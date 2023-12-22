import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Annotation, PinCoordinates } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { annotationPinStyles } from '../css';

import { PinMode, HorizontalSide, Sides } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, annotationPinStyles];

@customElement('superviz-comments-annotation-pin')
export class CommentsAnnotationPin extends WebComponentsBaseElement {
  declare type: PinMode;
  declare active: boolean;
  declare annotation: Annotation;
  declare position: Partial<PinCoordinates>;
  declare showInput: boolean;
  declare containerSides: Sides;
  declare horizontalSide: HorizontalSide | undefined;
  private annotationSides: Sides;
  declare commentsSide: HorizontalSide;
  declare movedPosition: string;
  declare pinAnnotation: HTMLElement;
  declare localAvatar: string | undefined;
  private originalPosition: Partial<PinCoordinates>;
  private inputElement: HTMLTextAreaElement;

  static styles = styles;
  static properties = {
    type: { type: String },
    annotation: { type: Object },
    position: { type: Object },
    active: { type: Boolean },
    showInput: { type: Boolean },
    containerSides: { type: Object },
    horizontalSide: { type: String },
    commentsSide: { type: String },
    movedPosition: { type: String },
    pinAnnotation: { type: Object },
    localAvatar: { type: String },
  };

  constructor() {
    super();
    this.position = { x: 0, y: 0 };
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.updated(_changedProperties);

    if (!_changedProperties.has('movedPosition') || !this.annotationSides) return;
    this.annotationSides = this.pinAnnotation.getBoundingClientRect();
    this.setInputSide();

    if (!this.inputElement) return;
    this.focusInput();
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    super.firstUpdated(_changedProperties);

    if (!this.showInput) return;
    this.originalPosition = { ...this.position };
    this.pinAnnotation = this.shadowRoot?.querySelector('.annotation-pin');
    this.annotationSides = this.pinAnnotation.getBoundingClientRect();
    this.setInputSide();
  }

  private focusInput = () => {
    if (!this.inputElement) {
      this.inputElement = this.shadowRoot
        ?.querySelector('superviz-comments-comment-input')
        ?.shadowRoot!.querySelector('textarea') as HTMLTextAreaElement;
    }

    this.inputElement.focus();
  };

  private setInputSide = () => {
    const inputWidth = 286;
    const gapWidth = 7;
    const extraWidth = inputWidth + gapWidth;

    let commentsWidth = this.commentsSide === 'right' ? 320 : 0;

    const right = this.annotationSides.right + extraWidth;
    const rightLimit = this.containerSides.right - commentsWidth;
    if (right < rightLimit) {
      this.horizontalSide = 'right';
      return;
    }

    commentsWidth = this.commentsSide === 'left' ? 320 : 0;
    const left = this.annotationSides.left - extraWidth;
    const leftLimit = this.containerSides.left + commentsWidth;
    if (left > leftLimit) {
      this.horizontalSide = 'left';
      return;
    }

    this.horizontalSide = leftLimit - left > right - rightLimit ? 'right' : 'left';
  };

  private createComment = ({ detail }: CustomEvent) => {
    document.body.dispatchEvent(
      new CustomEvent('create-annotation', {
        detail: { ...detail, position: { ...this.originalPosition, type: 'canvas' } },
      }),
    );

    this.annotation = null;
  };

  private cancelTemporaryAnnotation = () => {
    this.annotation = null;
  };

  private cancelTemporaryAnnotationEsc = (event: KeyboardEvent) => {
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

  get userAvatar() {
    if (this.annotation?.comments) return this.annotation?.comments?.at(0)?.participant.avatar;

    return this.localAvatar;
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

  private avatar = () => {
    if (this.type === PinMode.ADD && !this.showInput) {
      return html`<div class="annotation-pin__avatar annotation-pin__avatar--add">
        <superviz-icon name="add" allowSetSize="true"></superviz-icon>
      </div>`;
    }

    if (this.userAvatar) {
      return html`<div class="annotation-pin__avatar">
        <img src=${this.userAvatar} />
      </div>`;
    }

    return html`<div class="annotation-pin__avatar">
      <p class="text text-bold text-big">${this.userInitial}</p>
    </div>`;
  };

  private input = () => {
    if (!this.showInput) return;
    return html`<div class="floating-input">
      <superviz-comments-comment-input
        @create-annotation=${this.createComment}
        eventType="create-annotation"
        @comment-input-ready=${this.focusInput}
      >
      </superviz-comments-comment-input>
    </div>`;
  };

  protected render() {
    const classes = {
      'annotation-pin': true,
      'annotation-pin--active': this.active,
    };
    classes[this.horizontalSide] = true;

    if (this.type === PinMode.ADD) {
      return html`
        <div
          class=${classMap(classes)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          ${this.avatar()} ${this.input()}
        </div>
      `;
    }

    return html`
      <div
        @click=${this.emitClick}
        class=${classMap(classes)}
        style=${`top: ${this.position?.y}px; left: ${this.position?.x}px; pointer-events: auto;`}
      >
        ${this.avatar()}
      </div>
    `;
  }
}
