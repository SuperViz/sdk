import { Participant } from '../../common/types/participant.types';

export interface ParticipantMouse extends Participant {
  slotIndex: number;
  x: number;
  y: number;
  visible: boolean;
  elementId?: string;
}

export interface PresenceMouseProps {
  onGoToPresence?: (position: { x: number; y: number }) => void;
  dataAttributeName?: string;
  dataAttributeValueFilters?: RegExp[];
}

export type Element = HTMLElement & SVGElement;
