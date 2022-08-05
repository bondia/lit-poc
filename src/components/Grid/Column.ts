import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import ColumnStyles from './ColumnStyles';

@customElement('wd-column')
export class Column extends LitElement {
  @property({ type: String })
  xs: String = '1';

  @property({ type: String })
  sm: String = '1';

  @property({ type: String })
  md: String = '1';

  @property({ type: String })
  lg: String = '1';

  @property({ type: String })
  xl: String = '1';

  render() {
    return html`
      <style>
        ${ColumnStyles}
      </style>
      <div><slot></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wd-column': Column;
  }
}
