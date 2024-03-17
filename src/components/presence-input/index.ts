import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { Field, PresenceInputProps } from './types';

export class PresenceInput extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;

  // HTML Elements
  private fields: Record<string, Field> = {};

  // Allowed tags and types
  private readonly allowedTagNames = ['input', 'textarea'];
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

  constructor(props: PresenceInputProps = {}) {
    super();
    this.name = ComponentNames.PRESENCE;
    this.logger = new Logger('@superviz/sdk/presence-input-component');

    const { fields } = props;

    if (typeof fields === 'string') {
      this.registerField(fields);
    } else if (Array.isArray(fields)) {
      this.registerArrayOfFields(fields);
    } else {
      this.throwError.onInvalidFieldsProp(typeof fields);
    }
  }

  // ------- setup -------
  /**
   * @function start
   * @description starts the component
   * @returns {void}
   * */
  protected start(): void {}

  /**
   * @function destroy
   * @description destroys the component
   * @returns {void}
   * */
  protected destroy(): void {
    this.deregisterAllFields();
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
    field.removeEventListener('input', this.handleInput);
    field.removeEventListener('focus', this.handleFocus);
    field.removeEventListener('blur', this.handleBlur);
  }

  // ------- register & deregister -------
  /**
   * @function registerArrayOfFields
   * @description Registers multiple fields at once
   * @param {string[]} fieldsIds The ids of the fields that will be registered
   * @returns {void}
   */
  private registerArrayOfFields(fieldsIds: string[]): void {
    fieldsIds.forEach((id) => {
      this.registerField(id);
    });
  }

  /**
   * @function registerField
   * @description Registers an element; usually, something that serves a text field. 
    
      A registered field will be monitored and most interactions with it will be shared with every other user in the room that is tracking the same field (or, at the very least, a field with the same id).

      Examples of common interactions that will be monitored include typing, focusing, and blurring, but more may apply.
   * @param {string} fieldId The id of the field that will be registered
   * @returns {void}
   */
  public registerField(fieldId: string) {
    const field = document.getElementById(fieldId) as Field;

    if (!field) {
      this.throwError.onFieldNotFound(fieldId);
    }

    this.validateField(field);
    this.fields[fieldId] = field;
    this.addListenersToField(field);
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
    this.fields[fieldId] = undefined;
  }

  // ------- callbacks -------
  private handleInput = (event: Event) => {
    console.log(event);
  };

  private handleFocus = (event: Event) => {
    console.log(event);
  };

  private handleBlur = (event: Event) => {
    console.log(event);
  };

  // ------- validations -------
  /**
   * @function validateField
   * @description Verifies if an element can be registered
   * @param {Field} field The element
   * @returns {void}
   */
  private validateField(field: Field): void {
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
}
