import { SocketEvent } from '@superviz/socket-client';

import { Participant } from '../../common/types/participant.types';
import { StoreType } from '../../common/types/stores.types';
import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { Field, Focus, IOFieldEvents, Payload, FormElementsProps, RealtimeCallback } from './types';

export class FormElements extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private localParticipant: Participant;

  // HTML Elements
  private fields: Record<string, Field> = {};

  private fieldsOriginalOutline: Record<string, string> = {};

  // Allowed tags and types
  private readonly allowedTagNames = ['input', 'textarea'];
  // text, search, URL, tel, and password
  private readonly allowedInputTypes = ['text', 'email'];

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
      this.validateField(fields);
      this.fields[fields] = null;
      return;
    }

    if (Array.isArray(fields)) {
      fields.forEach((fieldId) => {
        this.validateField(fieldId);
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
    this.restoreOutlines();
    this.deregisterAllFields();

    this.fieldsOriginalOutline = undefined;
  }

  /**
   * @function subscribeToRealtimeEvents
   * @description Subscribes all fields to realtime events
   * @returns {void}
   */
  private subscribeToRealtimeEvents(): void {
    Object.entries(this.fields).forEach(([fieldId]) => {
      this.addRealtimeListenersToField(fieldId);
    });
  }

  // ------- listeners -------
  /**
   * @function addListenersToField
   * @description Adds listeners to a field
   * @param {Field} field The field that will have the listeners added
   * @returns {void}
   */
  private addListenersToField(field: Field): void {
    field.addEventListener('input', this.handleInput);
    field.addEventListener('focus', this.handleFocus);
    field.addEventListener('blur', this.handleBlur);
  }

  /**
   * @function addRealtimeListenersToField
   * @description Adds realtime listeners to a field
   * @param {string} fieldId The id of the field that will have the listeners added
   * @returns {void}
   */
  private addRealtimeListenersToField(fieldId: string) {
    if (!this.room) return;
    this.room.on<Payload>(IOFieldEvents.INPUT + fieldId, this.updateFieldContent(fieldId));
    this.room.on<Focus>(IOFieldEvents.INPUT + fieldId, this.updateFieldColor(fieldId));
    this.room.on<Focus>(IOFieldEvents.FOCUS + fieldId, this.updateFieldColor(fieldId));
    this.room.on<Focus>(IOFieldEvents.BLUR + fieldId, this.removeFieldColor(fieldId));
  }

  /**
   * @function removeListenersFromField
   * @description Removes listeners from a field
   * @param {Field} field The field that will have the listeners removed
   * @param field
   */
  private removeListenersFromField(field: Field): void {
    field.removeEventListener('input', this.handleInput);
    field.removeEventListener('focus', this.handleFocus);
    field.removeEventListener('blur', this.handleBlur);
  }

  /**
   * @function removeRealtimeListenersFromField
   * @description Removes realtime listeners from a field
   * @param {string} fieldId The id of the field that will have the listeners removed
   * @returns {void}
   */
  private removeRealtimeListenersFromField(fieldId: string) {
    if (!this.room) return;

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
    this.fieldsOriginalOutline[fieldId] = field.style.outline;
  }

  /**
   * @function deregisterAllFields
   * @description Deregisters an element. No interactions with the field will be shared after this.
   * @returns {void}
   */
  private deregisterAllFields() {
    Object.keys(this.fields).forEach((fieldId) => {
      this.deregisterField(fieldId);
    });

    this.fields = undefined;
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

    this.removeListenersFromField(this.fields[fieldId]);
    this.removeRealtimeListenersFromField(fieldId);
    this.fields[fieldId].style.outline = this.fieldsOriginalOutline[fieldId];
    this.fields[fieldId] = undefined;
  }

  // ------- callbacks -------
  /**
   * @function handleInput
   * @description Handles the input event on an input element
   * @param {Event} event The event that triggered the function
   * @returns {void}
   */
  private handleInput = (event: any) => {
    const target = event.target as HTMLInputElement;
    const payload: Payload = {
      content: target.value,
      color: this.localParticipant.slot.color,
    };

    this.room?.emit(IOFieldEvents.INPUT + target.id, payload);
  };

  /**
   * @function handleFocus
   * @description Handles the focus event on an input element
   * @param {Event} event The event that triggered the function
   * @returns {void}
   */
  private handleFocus = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    const payload: Payload = {
      color: this.localParticipant.slot.color,
    };

    this.room?.emit(IOFieldEvents.FOCUS + target.id, payload);
  };

  /**
   * @function handleBlur
   * @description Handles the blur event on an input element
   * @param {Event} event The event that triggered the function
   * @returns {void}
   */
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
    if (field.tagName.toLowerCase() !== 'input') return;

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

  // ------- realtime callbacks -------
  /**
   * @function removeFieldColor
   * @description Resets the outline of a field to its original value
   * @param {string} fieldId The id of the field that will have its outline reseted
   * @returns {RealtimeCallback<Focus>} A function that will be called when the event is triggered
   */
  private removeFieldColor = (fieldId: string): RealtimeCallback<Focus> => {
    return ({ presence }: SocketEvent<Focus>) => {
      if (this.focusList[fieldId]?.id !== presence.id || !this.fields[fieldId]) return;

      this.fields[fieldId].style.outline = this.fieldsOriginalOutline[fieldId];
      delete this.fieldsOriginalOutline[fieldId];
      delete this.focusList[fieldId];
    };
  };

  /**
   * @function updateFieldColor
   * @description Changes the outline of a field to the color of the participant that is interacting with it, following the rules defined in the function
   * @param {string} fieldId The id of the field that will have its outline changed
   * @returns {RealtimeCallback<Focus>} A function that will be called when the event is triggered
   */
  private updateFieldColor = (fieldId: string): RealtimeCallback<Focus> => {
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

      const stoppedInteracting = timestamp - participantInFocus.lastInteraction >= 3000; // ms;
      const gainedFocusLongAgo = timestamp - participantInFocus.firstInteraction >= 10000; // ms;
      const changeInputBorderColor = stoppedInteracting || gainedFocusLongAgo || thereIsNoFocus;

      if (!changeInputBorderColor) return;

      this.focusList[fieldId] = {
        id: presence.id,
        color,
        firstInteraction: timestamp,
        lastInteraction: timestamp,
      };

      const outline = localParticipantEmittedEvent
        ? this.fieldsOriginalOutline[fieldId]
        : `1px solid ${color}`;
      this.fields[fieldId].style.outline = outline;
    };
  };

  /**
   * @function updateFieldContent
   * @description Updates the content of a field
   * @param {string} fieldId The id of the field that will have its content updated
   * @returns {RealtimeCallback<Payload>} A function that will be called when the event is triggered
   */
  private updateFieldContent = (fieldId: string): RealtimeCallback<Payload> => {
    return ({ presence, data: { content } }: SocketEvent<Payload>) => {
      if (presence.id === this.localParticipant.id) return;
      this.fields[fieldId].value = content;
    };
  };

  // ------- utils -------
  /**
   * @function restoreOutlines
   * @description Restores the outline of all fields to their original value
   * @returns {void}
   */
  private restoreOutlines(): void {
    Object.entries(this.fields).forEach(([fieldId]) => {
      this.fields[fieldId].style.outline = this.fieldsOriginalOutline[fieldId];
    });
  }
}
