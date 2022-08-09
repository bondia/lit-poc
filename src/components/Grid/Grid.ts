import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('wd-grid')
export class Grid extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wd-grid': Grid;
  }
}
