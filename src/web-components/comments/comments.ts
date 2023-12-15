import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Annotation } from '../../components/comments/types';
import { WebComponentsBase } from '../base';

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
  declare side: string;

  static properties = {
    open: { type: Boolean },
    annotations: { type: Object },
    annotationFilter: { type: String },
    waterMarkState: { type: Boolean },
    side: { type: String },
  };

  constructor() {
    super();
    this.annotations = [];
    this.annotationFilter = AnnotationFilter.ALL;
    this.waterMarkState = false;
    this.side = 'left: 0px';
  }

  public updateAnnotations(data: Annotation[]) {
    this.annotations = data;
  }

  private toggle() {
    this.emitEvent('toggle', {});
  }

  waterMarkStatus(waterMark: boolean) {
    this.waterMarkState = waterMark;
  }

  private setFilter({ detail }) {
    const { filter } = detail;
    this.annotationFilter = filter;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    this.updateComplete.then(() => {
      const supervizCommentsDiv = this.shadowRoot.querySelector('.superviz-comments');

      if (!supervizCommentsDiv) return;

      if (this.waterMarkState) {
        waterMarkElementObserver(this.shadowRoot);
      }

      supervizCommentsDiv.setAttribute('style', this.side);
    });
  }

  protected render() {
    const containerClass = [this.open ? 'container' : 'container-close', 'superviz-comments'].join(
      ' ',
    );
    const poweredByFooter = html` <div id="poweredby-footer" class="footer">
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

    const htmlPoweredByContent = this.waterMarkState ? poweredByFooter : '';

    return html`
      <div id="superviz-comments" class=${containerClass}>
        <div class="header">
          <superviz-comments-topbar
            @close=${this.toggle}
            side=${this.side.split(':')[0]}
          ></superviz-comments-topbar>
          <superviz-comments-annotations id="annotations" open=${this.open}>
          </superviz-comments-annotations>
        </div>
        <superviz-comments-annotation-filter
          filter=${this.annotationFilter}
          @select=${this.setFilter}
        >
        </superviz-comments-annotation-filter>
        <superviz-comments-content
          annotations=${JSON.stringify(this.annotations)}
          annotationFilter=${this.annotationFilter}
          class="content"
        ></superviz-comments-content>
        ${htmlPoweredByContent}
      </div>
    `;
  }
}
