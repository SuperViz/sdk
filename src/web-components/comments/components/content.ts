import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('superviz-comments-content')
export class CommentsContent extends LitElement {
  static styles = css`
    .comments-content {
      overflow: hidden;
      height: 100%;
      width: 100%;
    }
  `;

  protected render() {
    return html`
      <div class="content">
        <superviz-comments-annotations></superviz-comments-annotations>
        -- Content -- <br />
        <div class="comments-content">
          <superviz-comments-comment-item
            avatar="https://picsum.photos/200/300"
            username="John Doe"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, nisl nisl aliquet nisl, eu aliquam nisl nisl euismod nisl."
            createdAt="2 days ago"
          ></superviz-comments-comment-item>

          <superviz-comments-comment-item
            avatar="https://picsum.photos/200/300"
            username="Maria Antonieta"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, nisl nisl aliquet nisl, eu aliquam nisl nisl euismod nisl."
            createdAt="Just now"
          ></superviz-comments-comment-item>
        </div>
      </div>
    `;
  }
}
