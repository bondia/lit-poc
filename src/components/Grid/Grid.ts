import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import './Grid.scss';

@customElement('wd-grid')
export class Grid extends LitElement {
  render() {
    return html`<div class="grid"><slot></slot></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wd-grid': Grid;
  }
}
