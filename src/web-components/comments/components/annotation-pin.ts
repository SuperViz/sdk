import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Annotation, PinCoordinates } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { annotationPinStyles } from '../css';

import { PinMode } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, annotationPinStyles];

@customElement('superviz-comments-annotation-pin')
export class CommentsAnnotationPin extends WebComponentsBaseElement {
  declare type: PinMode;
  declare active: boolean;
  declare annotation: Annotation;
  declare position: Partial<PinCoordinates>;

  static styles = styles;
  static properties = {
    type: { type: String },
    annotation: { type: Object },
    position: { type: Object },
    active: { type: Boolean },
  };

  constructor() {
    super();
    this.position = { x: 0, y: 0 };
  }

  private emitClick(): void {
    document.body.dispatchEvent(
      new CustomEvent('select-annotation', {
        detail: { uuid: this.annotation.uuid },
      }),
    );
  }

  protected render() {
    const classes = {
      'annotation-pin': true,
      'annotation-pin--active': this.active,
    };

    if (this.type === PinMode.ADD) {
      return html`
        <div
          class=${classMap(classes)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `;
    }

    return html`
      <div
        @click=${this.emitClick}
        class=${classMap(classes)}
        style=${`top: ${this.position?.y}px; left: ${this.position?.x}px;`}
      >
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">U</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `;
  }
}
