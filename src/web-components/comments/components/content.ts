import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { WebComponentsBase } from '../../base';
import { contentStyle } from '../css';

import { Comment } from './types/comments.types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles || [], contentStyle];

@customElement('superviz-comments-content')
export class CommentsContent extends WebComponentsBaseElement {
  constructor() {
    super();
    this.comments = [];
  }

  static styles = styles;

  declare comments: Comment[];

  static properties = {
    comments: { type: Object },
  };

  protected render() {
    // ! WIP !
    // const commentsTemplate = () => {
    //   return this.comments.map(
    //     (item: Comment) => html`
    //       <div class="comments">
    //         <superviz-comments-comment-item
    //           avatar=${item.avatar}
    //           username=${item.username}
    //           text=${item.text}
    //           createdAt=${item.createdAt}
    //         ></superviz-comments-comment-item>
    //       </div>

    //       <div class="sv-hr"></div>
    //     `,
    //   );
    // };
    // return html` ${commentsTemplate()} `;

    return html`! WIP !`;
  }
}
