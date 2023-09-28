import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Annotation, Comment } from '../../components/comments/types';
import { WebComponentsBase } from '../base';

import { AnnotationFilter } from './components/types';
import { commentsStyle, poweredByStyle } from './css/index';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, commentsStyle, poweredByStyle];

@customElement('superviz-comments')
export class Comments extends WebComponentsBaseElement {
  static styles = styles;

  declare open: boolean;
  declare annotations: Annotation[];
  declare annotationFilter: AnnotationFilter;
  declare waterMarkState: boolean;

  static properties = {
    open: { type: Boolean },
    annotations: { type: Object },
    annotationFilter: { type: String },
    waterMarkState: { type: Boolean },
  };

  constructor() {
    super();
    this.annotations = [];
    this.annotationFilter = AnnotationFilter.ALL;
    this.waterMarkState = false;
  }

  updateAnnotations(data: Annotation[]) {
    this.annotations = data;
  }

  waterMarkStatus(waterMark: boolean) {
    this.waterMarkState = waterMark;
  }

  toggle() {
    this.open = !this.open;
  }

  setFilter({ detail }) {
    const { filter } = detail;
    this.annotationFilter = filter;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    this.updateComplete.then(() => {
      const supervizCommentsDiv = this.shadowRoot.querySelector('#superviz-comments');

      if (supervizCommentsDiv && this.waterMarkState) {
        this.waterMarkElementObserver();
      }
    });
  }

  waterMarkElementObserver() {
    const superVizCommentsId = this.shadowRoot.querySelector('#superviz-comments');
    if (superVizCommentsId) {
      const options = {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
      };

      const superVizCommentsIdobserver = new MutationObserver((mutationsList, observer) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const mutation of mutationsList) {
          const supervizCommentsDiv = this.shadowRoot.querySelector('#superviz-comments');

          if (supervizCommentsDiv && supervizCommentsDiv.contains(mutation.target)) {
            observer.disconnect();
            this.reloadWaterMarkContent();
          }
        }
      });

      superVizCommentsIdobserver.observe(superVizCommentsId, options);
    }
  }

  reloadWaterMarkContent() {
    const poweredByFooterId = this.shadowRoot.querySelector('#poweredby-footer');
    if (poweredByFooterId) {
      poweredByFooterId.remove();
    }
    const divPoweredByFooter = document.createElement('div');
    divPoweredByFooter.id = 'poweredby-footer';
    divPoweredByFooter.className = 'footer';

    const divPoweredBy = document.createElement('div');
    divPoweredBy.className = 'powered-by powered-by--horizontal';

    const link = document.createElement('a');
    link.href = 'https://superviz.com/';
    link.target = '_blank';
    link.className = 'link';

    const divText = document.createElement('div');
    divText.textContent = 'Powered by';

    const img = document.createElement('img');
    img.width = 48;
    img.height = 8.86;
    img.src = 'https://production.cdn.superviz.com/static/superviz-gray-logo.svg';

    divPoweredBy.appendChild(link);
    link.appendChild(divText);
    divText.appendChild(img);
    divPoweredByFooter.appendChild(divPoweredBy);

    const supervizCommentsDiv = this.shadowRoot.getElementById('superviz-comments');
    supervizCommentsDiv.appendChild(divPoweredByFooter);

    this.waterMarkElementObserver();
  }

  protected render() {
    const containerClass = [this.open ? 'container' : 'container-close'].join(' ');
    const poweredByFooter = html`
    <div id="poweredby-footer" class="footer">
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
          <superviz-comments-topbar @close=${this.toggle}></superviz-comments-topbar>
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
