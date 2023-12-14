import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { WebComponentsBase } from '../../base';
import { annotationItemStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, annotationItemStyle];

@customElement('superviz-comments-mention-list')
export class CommentsMentionList extends WebComponentsBaseElement {
  static styles = styles;

  static properties = {
    //
  };

  protected render() {
    return html`
      // ...
    `;
  }
}
