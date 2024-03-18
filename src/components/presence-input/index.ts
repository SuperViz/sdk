import { SocketEvent } from '@superviz/socket-client';

import { Participant } from '../../common/types/participant.types';
import { StoreType } from '../../common/types/stores.types';
import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { Field, Focus, IOFieldEvents, Payload, FormElementsProps } from './types';

// PresenceInput --> Change to FormElements
export class FormElements extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private localParticipant: Participant;

  // HTML Elements
  private fields: Record<string, Field> = {};

  // Allowed tags and types
  private readonly allowedTagNames = ['input', 'textarea'];
  // text, search, URL, tel, and password
  private readonly allowedInputTypes = ['text'];

  private readonly throwError = {
    onInvalidFieldsProp: (propType: string) => {
      throw new Error(
        `"Fields" property must be either a string or an array of strings. Received type: ${propType}`,
      );
    },
    onFieldNotFound: (invalidId: string) => {
      throw new Error(
        `You must pass the id of an existing element. Element with id ${invalidId} not found`,
      );
    },
    onInvalidTagName: (tagName: string) => {
      throw new Error(
        `You can't register an element with tag ${tagName}. Only the tags "${this.allowedTagNames.join(
          ', ',
        )}" are allowed`,
      );
    },
    onInvalidInputType: (type: string) => {
      throw new Error(
        `You can't register an input element of type ${type}. Only the types "${this.allowedInputTypes.join(
          ', ',
        )}" are allowed`,
      );
    },
    onDeregisterInvalidField: (fieldId: string) => {
      throw new Error(
        `You can't deregister field of id ${fieldId}. No field was registered with id ${fieldId} `,
      );
    },
  };

  private focusList: Record<string, Focus> = {};

  constructor(props: FormElementsProps = {}) {
    super();
    this.name = ComponentNames.PRESENCE;
    this.logger = new Logger('@superviz/sdk/presence-input-component');

    const { fields } = props;

    if (typeof fields === 'string') {
      this.validateFieldId(fields);
      this.fields[fields] = null;
      return;
    }

    if (Array.isArray(fields)) {
      fields.forEach((fieldId) => {
        this.validateFieldId(fieldId);
        this.fields[fieldId] = null;
      });
      return;
    }

    if (fields !== undefined) {
      this.throwError.onInvalidFieldsProp(typeof fields);
    }
  }

  // ------- setup -------
  /**
   * @function start
   * @description starts the component
   * @returns {void}
   * */
  protected start(): void {
    const { localParticipant } = this.useStore(StoreType.GLOBAL);
    localParticipant.subscribe();

    Object.entries(this.fields).forEach(([fieldId]) => {
      this.registerField(fieldId);
    });

    this.subscribeToRealtimeEvents();
  }

  /**
   * @function destroy
   * @description destroys the component
   * @returns {void}
   * */
  protected destroy(): void {
    this.deregisterAllFields();
  }

  private subscribeToRealtimeEvents() {
    Object.entries(this.fields).forEach(([fieldId]) => {
      this.addRealtimeListenersToField(fieldId);
    });
  }

  private removeFieldColor = (fieldId: string) => {
    return ({ presence }: SocketEvent<Focus>) => {
      if (this.focusList[fieldId]?.id !== presence.id || !this.fields[fieldId]) return;

      this.fields[fieldId].style.border = '';
      delete this.focusList[fieldId];
    };
  };

  private updateFieldColor = (fieldId: string) => {
    return ({ presence, data: { color }, timestamp }: SocketEvent<Focus>) => {
      const participantInFocus = this.focusList[fieldId] ?? ({} as Focus);

      const thereIsNoFocus = !participantInFocus.id;
      const localParticipantEmittedEvent = presence.id === this.localParticipant.id;

      if (thereIsNoFocus && localParticipantEmittedEvent) {
        this.focusList[fieldId] = {
          id: presence.id,
          color,
          firstInteraction: timestamp,
          lastInteraction: timestamp,
        };

        return;
      }

      const alreadyHasFocus = participantInFocus.id === presence.id;

      if (alreadyHasFocus) {
        this.focusList[fieldId].lastInteraction = timestamp;
        return;
      }

      const stoppedInteracting = timestamp - participantInFocus.lastInteraction >= 10000; // ms;
      const gainedFocusLongAgo = timestamp - participantInFocus.firstInteraction >= 100000; // ms;
      const changeInputBorderColor = stoppedInteracting || gainedFocusLongAgo || thereIsNoFocus;

      if (!changeInputBorderColor) return;

      this.focusList[fieldId] = {
        id: presence.id,
        color,
        firstInteraction: timestamp,
        lastInteraction: timestamp,
      };

      const border = localParticipantEmittedEvent ? '' : `2px solid ${color}`;
      this.fields[fieldId].style.border = border;
    };
  };

  private updateFieldContent = (fieldId: string) => {
    return ({ presence, data: { content } }: SocketEvent<Payload>) => {
      if (presence.id === this.localParticipant.id) return;
      this.fields[fieldId].value = content;
    };
  };

  // ------- listeners -------
  /**
   * @function addListenersToField
   * @description Adds listeners to a field
   * @param {Field} field The field that will have the listeners added
   * @returns {void}
   */
  private addListenersToField(field: Field): void {
    field.addEventListener('input', this.handleInputEvent);
    field.addEventListener('focus', this.handleFocus);
    field.addEventListener('blur', this.handleBlur);
  }

  private addRealtimeListenersToField(fieldId: string) {
    if (!this.room) return;
    this.room.on<Payload>(IOFieldEvents.INPUT + fieldId, this.updateFieldContent(fieldId));
    this.room.on<Focus>(IOFieldEvents.INPUT + fieldId, this.updateFieldColor(fieldId));
    this.room.on<Focus>(IOFieldEvents.FOCUS + fieldId, this.updateFieldColor(fieldId));
    this.room.on<Focus>(IOFieldEvents.BLUR + fieldId, this.removeFieldColor(fieldId));
  }

  /**
   * @function removeListenersFromAllFields
   * @description Removes listeners from all fields
   * @returns {void}
   */
  private removeListenersFromAllFields(): void {
    Object.values(this.fields).forEach((field) => {
      this.removeListenersFromField(field);
    });
  }

  /**
   * @function removeListenersFromField
   * @description Removes listeners from a field
   * @param {Field} field The field that will have the listeners removed
   * @param field
   */
  private removeListenersFromField(field: Field): void {
    field.removeEventListener('focus', this.handleFocus);
    field.removeEventListener('blur', this.handleBlur);
  }

  private removeRealtimeListenersFromField(fieldId: string) {
    this.room.off(IOFieldEvents.INPUT + fieldId, this.updateFieldContent(fieldId));
    this.room.off(IOFieldEvents.INPUT + fieldId, this.updateFieldColor(fieldId));
    this.room.off(IOFieldEvents.FOCUS + fieldId, this.updateFieldColor(fieldId));
    this.room.off(IOFieldEvents.BLUR + fieldId, this.removeFieldColor(fieldId));
  }

  // ------- register & deregister -------
  /**
   * @function registerField
   * @description Registers an element; usually, something that serves a text field. 
    
      A registered field will be monitored and most interactions with it will be shared with every other user in the room that is tracking the same field (or, at the very least, a field with the same id).

      Examples of common interactions that will be monitored include typing, focusing, and blurring, but more may apply.
   * @param {string} fieldId The id of the field that will be registered
   * @returns {void}
   */
  public registerField(fieldId: string) {
    this.validateField(fieldId);

    const field = document.getElementById(fieldId) as Field;
    this.fields[fieldId] = field;

    this.addListenersToField(field);
    this.addRealtimeListenersToField(fieldId);
  }

  /**
   * @function deregisterAllFields
   * @description Deregisters an element. No interactions with the field will be shared after this.
   * @returns {void}
   */
  private deregisterAllFields() {
    this.fields = {};
    this.removeListenersFromAllFields();
  }

  /**
   * @function deregisterField
   * @description Deregisters a single field
   * @param {string} fieldId The id of the field that will be deregistered
   * @returns {void}
   */
  public deregisterField(fieldId: string) {
    if (!this.fields[fieldId]) {
      this.throwError.onDeregisterInvalidField(fieldId);
    }

    console.log('deregistering field', fieldId);
    this.removeListenersFromField(this.fields[fieldId]);
    this.removeRealtimeListenersFromField(fieldId);
    this.fields[fieldId] = undefined;
  }

  // ------- callbacks -------
  private handleInputEvent = (event: any) => {
    console.log('on input');
    const target = event.target as HTMLInputElement;
    const payload: Payload = {
      content: target.value,
      color: this.localParticipant.slot.color,
    };

    this.room?.emit(IOFieldEvents.INPUT + target.id, payload);
  };

  private handleFocus = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const payload: Payload = {
      color: this.localParticipant.slot.color,
    };

    this.room?.emit(IOFieldEvents.FOCUS + target.id, payload);
  };

  private handleBlur = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.room?.emit(IOFieldEvents.BLUR + target.id, {});
  };

  // ------- validations -------
  /**
   * @function validateField
   * @description Verifies if an element can be registered
   * @param {Field} field The element
   * @returns {void}
   */
  private validateField(fieldId: string): void {
    this.validateFieldId(fieldId);

    const field = document.getElementById(fieldId) as Field;
    this.validateFieldTagName(field);
    this.validateFieldType(field);
  }

  /**
   * @function validateFieldTagName
   * @description Verifies if the element has one of the allowed tag names that can be registered
   * @param {Field} field The element that will be checked
   * @returns {void}
   */
  private validateFieldTagName(field: Field): void {
    const tagName = field.tagName.toLowerCase();
    const hasValidTagName = this.allowedTagNames.includes(tagName);

    if (!hasValidTagName) {
      this.logger.log('invalid element tagname');
      this.throwError.onInvalidTagName(tagName);
    }
  }

  /**
   * @function validateFieldType
   * @description Checks if an input element has one of the allowed types that can be registered
   * @param {Field} field The element that will be checked
   * @returns {void}
   */
  private validateFieldType(field: Field): void {
    if (field.tagName !== 'input') return;

    const inputType = field.getAttribute('type');
    const hasValidInputType = this.allowedInputTypes.includes(inputType);

    if (inputType && !hasValidInputType) {
      this.logger.log('invalid input type');
      this.throwError.onInvalidInputType(inputType);
    }
  }

  private validateFieldId(fieldId: string): void {
    const field = document.getElementById(fieldId);

    if (!field) {
      this.throwError.onFieldNotFound(fieldId);
    }
  }
}
