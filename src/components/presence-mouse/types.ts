import { Participant } from '../../common/types/participant.types';

export interface ParticipantMouse extends Participant {
  slotIndex: number;
  x: number;
  y: number;
  visible: boolean;
}

export interface Baseline {
  x: number;
  y: number;
  scale: number;
}

export interface PresenceMouseProps {
  onGoToPresence?: (position: { x: number; y: number }) => void;
}

export type Element = HTMLElement & SVGElement;

export enum VoidElements {
  AREA = 'area',
  BASE = 'base',
  BR = 'br',
  COL = 'col',
  EMBED = 'embed',
  HR = 'hr',
  IMG = 'img',
  INPUT = 'input',
  LINK = 'link',
  META = 'meta',
  PARAM = 'param',
  SOURCE = 'source',
  TRACK = 'track',
  WBR = 'wbr',
}

export enum SVGElements {
  RECT = 'rect',
  ELLIPSE = 'ellipse',
  SVG = 'svg',
}
