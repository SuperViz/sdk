import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { styles as customMouseStyles } from './styles';

@customElement('superviz-mouses')
export class Mouses extends LitElement {
  declare name: string;
  declare attendeeId: string;
  declare pointerMouse: string;

  static properties = {
    name: { type: String },
    attendeeId: { type: String },
    pointerMouse: { type: String },

  };

  static styles = [customMouseStyles];

  constructor() {
    super();

    this.name = 'Attendee Name';
    this.attendeeId = 'Attendee1';
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
    window.addEventListener('mousemove', this._handleMove);

    // if use Iframe on mouse move
    // document.addEventListener('DOMContentLoaded', this._onParentDOMContentLoaded);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._handleResize);
    window.removeEventListener('mousemove', this._handleMove);

    // if use Iframe on mouse move
    // document.removeEventListener('DOMContentLoaded', this._onParentDOMContentLoaded);
  }

  _onParentDOMContentLoaded = () => {
    this._trackMouseInIframes();
  };

  // if use Iframe on mouse move
  private _trackMouseInIframes() {
    const iframes = document.getElementsByTagName('iframe');
    const iframeArray: HTMLIFrameElement[] = Array.from(iframes);

    iframeArray.forEach((iframe) => {
      const iframeWindow = iframe.contentWindow;
      if (iframeWindow) {
        iframeWindow.addEventListener('mousemove', (event) => {
          const x = event.clientX;
          const y = event.clientY;
          // console.log(`IFRAME (${iframe.src}) - X: ${x}, Y: ${y}`);
        });
      }
    });
  }

  private _handleMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const divMouseFollower = this.shadowRoot.getElementById(this.attendeeId);
    if (!divMouseFollower) {
      return;
    }
    divMouseFollower.style.left = `${x.toString()}px`;
    divMouseFollower.style.top = `${y.toString()}px`;
    // console.log(`DOM - X: ${x}, Y: ${y}`);
  };

  private _handleResize = (e) => {
    // console.log('RESIZE: ', e.currentTarget.innerWidth, e.currentTarget.innerHeight);
  };

  protected render() {
    return html`
    <div id="mouse-container" class="mouse-board">
      <div id="mouse-sync">
        <div id="${this.attendeeId}" class="mouse-follower">
          <div class="pointer-mouse"></div>
          <div class="mouse-user-name">${this.name}</div>
        </div>
      </div>
  </div>
    `;
  }
}

document.body.appendChild(document.createElement('superviz-mouses'));
