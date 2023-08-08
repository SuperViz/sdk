import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { WebComponentsBase } from '../base';

import { Comment } from './components/types/comments.types';
import { commentsStyle } from './css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles || [], commentsStyle];

@customElement('superviz-comments')
export class Comments extends WebComponentsBaseElement {
  static styles = styles;

  declare open: boolean;
  declare comments: Comment[];

  static properties = {
    open: { type: Boolean },
    comments: { type: Object },
  };

  protected render() {
    const containerClass = () => {
      const classes = [this.open ? 'container' : 'container-close'];
      return classes.join(' ');
    };

    const close = (e: CustomEvent) => {
      this.open = !this.open;
    };

    return html`
      <div id="app" class=${containerClass()}>
        <div class="header">
          <superviz-comments-topbar @close=${close}></superviz-comments-topbar>
          <superviz-comments-annotations></superviz-comments-annotations>
        </div>
        <superviz-comments-content class="content"></superviz-comments-content>
      </div>
    `;
  }
}
