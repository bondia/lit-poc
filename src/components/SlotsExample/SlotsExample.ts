import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('slots-example')
export class SlotsExample extends LitElement {
  render() {
    return html`<section>Render some slots <br /></section> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slots-example': SlotsExample;
  }
}
