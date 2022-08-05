import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import GridStyles from './GridStyles';

@customElement('wd-grid')
export class Grid extends LitElement {
  static styles = GridStyles;

  render() {
    return html`<div class="grid"><slot></slot></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wd-grid': Grid;
  }
}
