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
  declare showInput: boolean;

  static styles = styles;
  static properties = {
    type: { type: String },
    annotation: { type: Object },
    position: { type: Object },
    active: { type: Boolean },
    showInput: { type: Boolean },
  };

  constructor() {
    super();
    this.position = { x: 0, y: 0 };
  }

  private createComment = ({ detail }: CustomEvent) => {
    document.body.dispatchEvent(
      new CustomEvent('create-annotation', {
        detail: { ...detail, position: { ...this.position, type: 'canvas' } },
      }),
    );

    this.annotation = null;
  };

  private cancelTemporaryAnnotation = () => {
    this.annotation = null;
  };

  private cancelTemporaryAnnotationEsc = (event: KeyboardEvent) => {
    if (event?.key !== 'Escape') return;

    this.annotation = null;
  };

  connectedCallback(): void {
    super.connectedCallback();

    if (this.type !== PinMode.ADD) return;

    window.document.body.addEventListener(
      'close-temporary-annotation',
      this.cancelTemporaryAnnotation,
    );

    window.document.body.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.cancelTemporaryAnnotationEsc(e);
      }
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (this.type !== PinMode.ADD) return;

    window.document.body.removeEventListener(
      'close-temporary-annotation',
      this.cancelTemporaryAnnotation,
    );

    window.document.body.removeEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.cancelTemporaryAnnotationEsc(e);
      }
    });
  }

  get userInitial(): string {
    const name = this.annotation?.comments?.at(0)?.participant?.name ?? 'Anonymous';

    return name[0].toUpperCase();
  }

  private emitClick(): void {
    document.body.dispatchEvent(
      new CustomEvent('select-annotation', {
        detail: { uuid: this.annotation?.uuid },
      }),
    );
  }

  private input = () => {
    if (!this.showInput) return;

    return html`<div class="floating-input">
      <superviz-comments-comment-input
        @create-annotation=${this.createComment}
        eventType="create-annotation"
      >
      </superviz-comments-comment-input>
    </div>`;
  };

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
          ${this.input()}
        </div>
      `;
    }

    return html`
      <div
        @click=${this.emitClick}
        class=${classMap(classes)}
        style=${`top: ${this.position?.y}px; left: ${this.position?.x}px; pointer-events: auto;`}
      >
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">${this.userInitial}</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `;
  }
}
