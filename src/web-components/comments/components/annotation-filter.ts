import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { WebComponentsBase } from '../../base';
import importStyle from '../../base/utils/importStyle';
import { annotationFilterStyle } from '../css';

import { AnnotationFilter } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, annotationFilterStyle];

const options = [
  {
    label: 'All comments',
    code: AnnotationFilter.ALL,
  },
  {
    label: 'Resolved comments',
    code: AnnotationFilter.RESOLVED,
  },
];

@customElement('superviz-comments-annotation-filter')
export class CommentsAnnotationFilter extends WebComponentsBaseElement {
  constructor() {
    super();
    this.caret = 'down';
  }

  declare filter: AnnotationFilter;
  declare caret: string;

  static styles = styles;

  static properties = {
    filter: { type: String },
    caret: { type: String },
  };

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    super.firstUpdated(_changedProperties);
    this.updateComplete.then(() => {
      importStyle.call(this, ['comments']);
    });
  }

  protected render() {
    const selectedLabel =
      this.filter === AnnotationFilter.ALL ? options[0].label : options[1].label;

    const dropdownOptionsHandler = ({ detail }: CustomEvent) => {
      this.emitEvent('select', { filter: detail });
      selectClick();
    };

    const selectClick = () => {
      this.caret = this.caret === 'down' ? 'up' : 'down';
    };

    const active = this.filter === AnnotationFilter.ALL ? options[0].code : options[1].code;

    const textClasses = {
      text: true,
      'text-bold': true,
      'select-content': true,
      'comments__filter__selected-label': true,
      'sv-gray-500': this.caret === 'down',
      'sv-gray-700': this.caret === 'up',
    };

    return html`
      <div class="comments__filter-container">
        <div class="comments__filter">
          <superviz-dropdown
            options=${JSON.stringify(options)}
            active=${active}
            label="label"
            returnTo="code"
            position="bottom-left"
            right-offset="100px"
            @click=${selectClick}
            @selected=${dropdownOptionsHandler}
            @close=${selectClick}
            classesPrefix="comments__dropdown"
            parentComponent="comments"
          >
            <div class="comments__filter__toggle-button" slot="dropdown">
              <span class=${classMap(textClasses)}>${selectedLabel}</span>
              <superviz-icon name=${this.caret} size="xs"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `;
  }
}
