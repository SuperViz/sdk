/* eslint-disable no-constructor-return */
import { PointersCanvas } from './canvas';
import { PointersHTML } from './html';
import { PresenceMouseProps } from './types';

export class MousePointers {
  constructor(containerId: string, options?: PresenceMouseProps) {
    const container = document.getElementById(containerId);
    const tagName = container.tagName.toLowerCase();

    if (tagName === 'canvas') {
      return new PointersCanvas(containerId, options);
    }

    return new PointersHTML(containerId, options);
  }
}
