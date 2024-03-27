import { SocketEvent } from '@superviz/socket-client';

import { Participant } from '../../common/types/participant.types';
import { StoreType } from '../../common/types/stores.types';
import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import {
  Field,
  Focus,
  FieldEvents,
  InputPayload,
  FormElementsProps,
  FocusPayload,
  BlurPayload,
  Flags,
} from './types';

// não synchar (flag pra desativar de todos no começo, métodos pra desativar ou ativar de 1, métodos pra ativar ou desativar de todos)
// emitir evento quando pessoa escrever

export class FormElements extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private localParticipant: Participant;

  // HTML Elements
  private fields: Record<string, Field> = {};
  private fieldsOriginalOutline: Record<string, string> = {};
  private focusList: Record<string, Focus> = {};
  private enabledOutlineFields: Record<string, boolean> = {};
  private enabledRealtimeSynchFields: Record<string, boolean> = {};

  // Flags
  private flags: Flags = {};

  // Allowed tags and types
  private readonly allowedTagNames = ['input', 'textarea'];
  // text, search, URL, tel, and password
  private readonly allowedInputTypes = [
    'text',
    'email',
    'date',
    'color',
    'datetime-local',
    'month',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'time',
    'url',
    'week',
    'checkbox',
    'radio',
  ];

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

  constructor(props: FormElementsProps = {}) {
    super();
    this.name = ComponentNames.PRESENCE;
    this.logger = new Logger('@superviz/sdk/presence-input-component');

    const { fields, flags } = props;

    this.flags = flags ?? {};

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
    this.focusList = undefined;
  }

  // ------- listeners -------
  /**
   * @function addListenersToField
   * @description Adds listeners to a field
   * @param {Field} field The field that will have the listeners added
   * @returns {void}
   */
  private addListenersToField(field: Field): void {
    const { type } = field;

    if (this.hasCheckedProperty(field)) {
      field.addEventListener('change', this.handleChange);
    } else {
      field.addEventListener('input', this.handleInput);
    }

    if (this.flags.disableOutline) return;

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

    this.room.on<InputPayload>(FieldEvents.INPUT + fieldId, this.updateFieldContent);
    this.room.on<FocusPayload>(
      FieldEvents.KEYBOARD_INTERACTION + fieldId,
      this.publishKeyboardInteraction,
    );

    if (this.flags.disableOutline) return;

    this.room.on<FocusPayload>(FieldEvents.FOCUS + fieldId, this.updateFieldColor);
    this.room.on<BlurPayload>(FieldEvents.BLUR + fieldId, this.removeFieldColor);
  }

  /**
   * @function removeListenersFromField
   * @description Removes listeners from a field
   * @param {Field} field The field that will have the listeners removed
   * @returns {void}
   */
  private removeListenersFromField(field: Field): void {
    if (this.hasCheckedProperty(field)) {
      field.removeEventListener('change', this.handleChange);
    } else {
      field.removeEventListener('input', this.handleInput);
    }

    if (this.flags.disableOutline) return;

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

    this.room.off(FieldEvents.INPUT + fieldId, this.updateFieldContent);
    this.room.off<FocusPayload>(
      FieldEvents.KEYBOARD_INTERACTION + fieldId,
      this.publishKeyboardInteraction,
    );

    if (this.flags.disableOutline) return;

    this.room.off(FieldEvents.FOCUS + fieldId, this.updateFieldColor);
    this.room.off(FieldEvents.BLUR + fieldId, this.removeFieldColor);
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

    if (this.enabledOutlineFields[fieldId] === undefined) return;

    delete this.enabledOutlineFields[fieldId];
    delete this.enabledRealtimeSynchFields[fieldId];
    delete this.fieldsOriginalOutline[fieldId];
    delete this.focusList[fieldId];

    this.room?.emit(FieldEvents.BLUR + fieldId, { fieldId });
  }

  // ------- callbacks -------
  /**
   * @function handleInput
   * @description Handles the input event on an input element
   * @param {Event} event The event that triggered the function
   * @returns {void}
   */
  private handleInput = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;

    this.room?.emit(FieldEvents.KEYBOARD_INTERACTION + target.id, {
      fieldId: target.id,
      color: this.localParticipant.slot.color,
    });

    const canSynch = this.canSynchContent(target.id);
    if (!canSynch) return;

    const payload: InputPayload & FocusPayload = {
      value: target.value,
      color: this.localParticipant.slot.color,
      fieldId: target.id,
      showOutline: this.canUpdateColor(target.id),
      synchContent: canSynch,
      attribute: 'value',
    };

    this.room?.emit(FieldEvents.INPUT + target.id, payload);
  };

  /**
   * @function handleChange
   * @description Handles the change event on an input element
   * @param {Event} event The event that triggered the function
   * @returns {void}
   */
  private handleChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;

    const canSynch = this.canSynchContent(target.id);
    if (!canSynch) return;

    const payload: InputPayload & FocusPayload = {
      fieldId: target.id,
      value: target.checked,
      color: this.localParticipant.slot.color,
      showOutline: this.canUpdateColor(target.id),
      synchContent: this.canSynchContent(target.id),
      attribute: 'checked',
    };

    this.room?.emit(FieldEvents.INPUT + target.id, payload);
  };

  /**
   * @function handleFocus
   * @description Handles the focus event on an input element
   * @param {Event} event The event that triggered the function
   * @returns {void}
   */
  private handleFocus = (event: InputEvent): void => {
    const target = event.target as HTMLInputElement;
    const payload: FocusPayload = {
      color: this.localParticipant.slot.color,
      fieldId: target.id,
    };

    this.room?.emit(FieldEvents.FOCUS + target.id, payload);
  };

  /**
   * @function handleBlur
   * @description Handles the blur event on an input element
   * @param {Event} event The event that triggered the function
   * @returns {void}
   */
  private handleBlur = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    const payload: BlurPayload = {
      fieldId: target.id,
    };

    this.room?.emit(FieldEvents.BLUR + target.id, payload);
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
   * @param {SocketEvent<BlurPayload>} event The payload from the event
   * @returns {void} A function that will be called when the event is triggered
   */
  private removeFieldColor = ({ presence, data: { fieldId } }: SocketEvent<BlurPayload>) => {
    if (this.focusList[fieldId]?.id !== presence.id || !this.fields[fieldId]) return;

    this.fields[fieldId].style.outline = this.fieldsOriginalOutline[fieldId] ?? '';
    delete this.fieldsOriginalOutline[fieldId];
    delete this.focusList[fieldId];
  };

  /**
   * @function updateFieldColor
   * @description Changes the outline of a field to the color of the participant that is interacting with it, following the rules defined in the function
   * @param {SocketEvent<FocusPayload>} event The payload from the event
   * @returns {void}
   */
  private updateFieldColor = ({
    presence,
    data: { color, fieldId },
    timestamp,
  }: SocketEvent<FocusPayload>) => {
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

  /**
   * @function updateFieldContent
   * @description Updates the content of a field
   * @param {string} fieldId The id of the field that will have its content updated
   * @returns {void}
   */
  private updateFieldContent = ({
    presence,
    data: { value, fieldId, color, showOutline, synchContent, attribute },
    timestamp,
    ...params
  }: SocketEvent<InputPayload>) => {
    if (presence.id === this.localParticipant.id) return;

    this.publish(`${FieldEvents.INPUT}-${fieldId}`, {
      value,
      fieldId,
      attribute,
      userId: presence.id,
      userName: presence.name,
      timestamp,
    });

    if (synchContent && this.canSynchContent(fieldId)) this.fields[fieldId][attribute] = value;

    if (showOutline && this.canUpdateColor(fieldId)) {
      this.updateFieldColor({ presence, data: { color, fieldId }, timestamp, ...params });
    }
  };

  private publishKeyboardInteraction = ({
    presence,
    data: { fieldId, color },
  }: SocketEvent<FocusPayload>) => {
    if (presence.id === this.localParticipant.id) return;

    this.publish(`${FieldEvents.KEYBOARD_INTERACTION}-${fieldId}`, {
      fieldId,
      userId: presence.id,
      userName: presence.name,
      color,
    });
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

  private hasCheckedProperty(field: Field): boolean {
    const tag = field.tagName.toLowerCase();
    const type = field.getAttribute('type');

    return tag === 'input' && (type === 'radio' || type === 'checkbox');
  }

  private canUpdateColor(fieldId: string): boolean {
    return (
      (!this.flags.disableOutline && this.enabledOutlineFields[fieldId] !== false) ||
      this.enabledOutlineFields[fieldId]
    );
  }

  private canSynchContent(fieldId: string): boolean {
    return (
      (!this.flags.disableRealtimeSynch && this.enabledRealtimeSynchFields[fieldId] !== false) ||
      this.enabledRealtimeSynchFields[fieldId]
    );
  }

  // ----------------------------
  public enableOutline(fieldId: string): void {
    const field = this.fields[fieldId];

    if (!field) return;

    this.enabledOutlineFields[fieldId] = true;
    this.fieldsOriginalOutline[fieldId] = field.style.outline;

    field.addEventListener('focus', this.handleFocus);
    field.addEventListener('blur', this.handleBlur);

    this.room.on<FocusPayload>(FieldEvents.FOCUS + fieldId, this.updateFieldColor);
    this.room.on<BlurPayload>(FieldEvents.BLUR + fieldId, this.removeFieldColor);
  }

  public disableOutline(fieldId: string): void {
    const field = this.fields[fieldId];
    if (!field) return;

    this.enabledOutlineFields[fieldId] = false;
    field.style.outline = this.fieldsOriginalOutline[fieldId] ?? '';

    field.removeEventListener('focus', this.handleFocus);
    field.removeEventListener('blur', this.handleBlur);

    this.room.off(FieldEvents.FOCUS + fieldId, this.updateFieldColor);
    this.room.off(FieldEvents.BLUR + fieldId, this.removeFieldColor);

    this.room?.emit(FieldEvents.BLUR + fieldId, { fieldId });
  }

  public enableRealtimeSynch(fieldId: string): void {
    this.enabledRealtimeSynchFields[fieldId] = true;
  }

  public disableRealtimeSynch(fieldId: string): void {
    this.enabledRealtimeSynchFields[fieldId] = false;
  }

  public synch = (fieldId: string): void => {
    const field = this.fields[fieldId];

    const value = this.hasCheckedProperty(field)
      ? (field as HTMLInputElement).checked
      : field.value;

    const payload: InputPayload & FocusPayload = {
      value,
      color: this.localParticipant.slot.color,
      fieldId,
      showOutline: this.canUpdateColor(fieldId),
      synchContent: this.canSynchContent(fieldId),
      attribute: 'value',
    };

    this.room?.emit(FieldEvents.INPUT + fieldId, payload);
  };
}
