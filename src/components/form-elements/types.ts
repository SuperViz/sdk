import { SocketEvent } from '@superviz/socket-client';

export interface FormElementsProps {
  fields?: string[] | string;
  flags?: Flags;
}

export type Flags = {
  disableOutline?: boolean;
  disableRealtimeSync?: boolean;
};

export type Field = HTMLInputElement | HTMLTextAreaElement;

export enum FieldEvents {
  INPUT = 'field.input',
  BLUR = 'field.blur',
  FOCUS = 'field.focus',
  CHANGE = 'field.change',
  KEYBOARD_INTERACTION = 'field.keyboard-interaction',
}

export interface FocusPayload {
  color: string;
  fieldId: string;
}

export type InputPayload = {
  value: string | boolean;
  showOutline: boolean;
  syncContent: boolean;
  attribute: 'value' | 'checked';
} & FocusPayload;

export type Focus = {
  firstInteraction: number;
  lastInteraction: number;
  id: string;
  color: string;
};

export type RealtimeCallback<T> = (data: SocketEvent<T>) => void;

export type BlurPayload = {
  fieldId: string;
};
