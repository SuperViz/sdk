import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Annotation, Comment } from '../../components/comments/types';
import { WebComponentsBase } from '../base';

import { commentsStyle } from './css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, commentsStyle];

@customElement('superviz-comments')
export class Comments extends WebComponentsBaseElement {
  static styles = styles;

  declare open: boolean;
  declare annotations: Annotation[];

  static properties = {
    open: { type: Boolean },
    annotations: { type: Object },
  };

  constructor() {
    super();
    this.annotations = [];
  }

  updateAnnotations(data: Annotation[]) {
    this.annotations = data;
  }

  toggle() {
    this.open = !this.open;
  }

  protected render() {
    const containerClass = [this.open ? 'container' : 'container-close'].join(' ');

    return html`
      <div id="superviz-comments" class=${containerClass}>
        <div class="header">
          <superviz-comments-topbar @close=${this.toggle}></superviz-comments-topbar>
          <superviz-comments-annotations id="annotations" open=${this.open}>
          </superviz-comments-annotations>
        </div>
        <superviz-comments-content
          annotations=${JSON.stringify(this.annotations)}
          class="content"
        ></superviz-comments-content>
      </div>
    `;
  }
}
