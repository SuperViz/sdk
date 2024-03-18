export interface FormElementsProps {
  fields?: string[] | string;
}

export type Field = HTMLInputElement | HTMLTextAreaElement;

export enum IOFieldEvents {
  INPUT = 'field.input',
  BLUR = 'field.blur',
  FOCUS = 'field.focus',
}

// https://w3c.github.io/input-events/#interface-InputEvent-Attributes
export enum InputEvent {
  INSERT_TEXT = 'insertText',
  DELETE_CONTENT_BACKWARD = 'deleteContentBackward',
  DELETE_CONTENT_FORWARD = 'deleteContentForward',
}

export interface Payload {
  content?: string | null;
  color: string;
}

export interface Focus {
  firstInteraction: number;
  lastInteraction: number;
  color: string;
  id: string;
}
