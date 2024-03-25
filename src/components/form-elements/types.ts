import { SocketEvent } from '@superviz/socket-client';

export interface FormElementsProps {
  fields?: string[] | string;
}

export type Field = HTMLInputElement | HTMLTextAreaElement;

export enum IOFieldEvents {
  INPUT = 'field.input',
  BLUR = 'field.blur',
  FOCUS = 'field.focus',
}

export interface InputPayload {
  content: string | null;
  fieldId: string;
}

export interface FocusPayload {
  color: string;
  fieldId: string;
}

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
