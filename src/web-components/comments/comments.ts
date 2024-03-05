import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { ParticipantByGroupApi } from '../../common/types/participant.types';
import { Annotation, CommentsSide, Offset } from '../../components/comments/types';
import { WebComponentsBase } from '../base';
import importStyle from '../base/utils/importStyle';

import { AnnotationFilter } from './components/types';
import { commentsStyle, poweredByStyle } from './css/index';
import { waterMarkElementObserver } from './utils/watermark';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, commentsStyle, poweredByStyle];

@customElement('superviz-comments')
export class Comments extends WebComponentsBaseElement {
  static styles = styles;

  declare open: boolean;
  declare annotations: Annotation[];
  declare annotationFilter: AnnotationFilter;
  declare waterMarkState: boolean;
  declare side: CommentsSide;
  declare participantsList: ParticipantByGroupApi[];
  declare offset: Offset;

  static properties = {
    open: { type: Boolean },
    annotations: { type: Object },
    annotationFilter: { type: String },
    waterMarkState: { type: Boolean },
    side: { type: String },
    participantsList: { type: Object },
    offset: { type: Object },
  };

  constructor() {
    super();
    this.annotations = [];
    this.annotationFilter = AnnotationFilter.ALL;
    this.waterMarkState = false;
    this.participantsList = [];
    this.side = CommentsSide.LEFT;
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    super.firstUpdated(_changedProperties);
    this.updateComplete.then(() => {
      importStyle.call(this, ['comments']);
    });
  }

  protected updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    this.updateComplete.then(() => {
      if (this.waterMarkState) {
        waterMarkElementObserver(this.shadowRoot);
      }

      if (changedProperties.has('side')) {
        this.positionThreads();
      }

      if (changedProperties.has('offset')) {
        this.applyOffset();
      }
    });
  }

  public participantsListed(participants: ParticipantByGroupApi[]) {
    this.participantsList = participants;
  }

  public updateAnnotations(data: Annotation[]) {
    this.annotations = data;
  }

  private close() {
    this.emitEvent('close-threads', {});
  }

  waterMarkStatus(waterMark: boolean) {
    this.waterMarkState = waterMark;
  }

  private setFilter({ detail }) {
    const { filter } = detail;
    this.annotationFilter = filter;
  }

  private positionThreads() {
    const supervizCommentsDiv = this.shadowRoot.querySelector('.superviz-comments');
    if (!supervizCommentsDiv) return;

    supervizCommentsDiv.classList.remove('threads-on-left-side', 'threads-on-right-side');

    const className =
      this.side === CommentsSide.LEFT ? 'threads-on-left-side' : 'threads-on-right-side';

    supervizCommentsDiv.classList.add(className);
  }

  private applyOffset() {
    const supervizCommentsDiv: HTMLDivElement = this.shadowRoot.querySelector('.superviz-comments');
    if (!supervizCommentsDiv) return;

    const defaultDistanceFromEdge = 10;
    const defaultWidth = 320;

    supervizCommentsDiv.style.top = `${defaultDistanceFromEdge + this.offset.top}px`;
    supervizCommentsDiv.style.bottom = `${defaultDistanceFromEdge + this.offset.bottom}px`;

    if (this.side === CommentsSide.LEFT) {
      supervizCommentsDiv.style.left = `${defaultDistanceFromEdge + this.offset.left}px`;
      supervizCommentsDiv.style.width = `${defaultWidth + this.offset.right}px`;
      return;
    }

    supervizCommentsDiv.style.right = `${defaultDistanceFromEdge + this.offset.right}px`;
    supervizCommentsDiv.style.width = `${defaultWidth + this.offset.left}px`;
  }

  private get poweredBy() {
    if (!this.waterMarkState) return html``;

    return html` <div id="poweredby-footer" class="footer">
      <div class="powered-by powered-by--horizontal">
        <a href="https://superviz.com/" target="_blank" class="link">
          <div class="">
            Powered by
            <img
              width="48px"
              height="8.86px"
              src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg"
            />
          </div>
        </a>
      </div>
    </div>`;
  }

  protected render() {
    const classes = {
      'superviz-comments': true,
      close: !this.open,
    };

    return html`
      <div id="superviz-comments" class=${classMap(classes)}>
        <div class="header">
          <superviz-comments-topbar
            @close-threads=${this.close}
            side=${this.side.split(':')[0]}
          ></superviz-comments-topbar>
        </div>
        <superviz-comments-annotation-filter
          filter=${this.annotationFilter}
          @select=${this.setFilter}
        >
        </superviz-comments-annotation-filter>
        <superviz-comments-content
          annotations=${JSON.stringify(this.annotations)}
          annotationFilter=${this.annotationFilter}
          participantsList=${JSON.stringify(this.participantsList)}
          class="content"
        ></superviz-comments-content>
        ${this.poweredBy}
      </div>
    `;
  }
}
