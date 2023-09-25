import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Annotation } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { annotationPinStyles } from '../css';

import { PinMode } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, annotationPinStyles];

@customElement('superviz-comments-annotation-pin')
export class CommentsAnnotationPin extends WebComponentsBaseElement {
  declare type: PinMode;
  declare annotation: Annotation;

  static styles = styles;
  static properties = {
    type: { type: String },
    annotation: { type: Object },
  };

  protected render() {
    if (this.type === PinMode.ADD) {
      return html`
        <div class="annotation-pin annotation-pin--active">
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `;
    }

    return html`
      <div class="annotation-pin">
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">U</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `;
  }
}
