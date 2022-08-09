import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('wd-container')
export class Container extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wd-container': Container;
  }
}
