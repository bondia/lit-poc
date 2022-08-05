import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import ContainerStyles from './ContainerStyles';

@customElement('wd-container')
export class Container extends LitElement {
  static styles = ContainerStyles;
  render() {
    return html`<div class="container"><slot></slot></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wd-container': Container;
  }
}
