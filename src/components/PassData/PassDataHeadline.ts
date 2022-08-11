import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const componentName = 'wd-pass-data-headline';

export type ComplexData = {
  headline: string;
  description: string;
};

@customElement(componentName)
export class PassDataHeadline extends LitElement {
  @property({ type: Object })
  data: ComplexData = {
    headline: '',
    description: ''
  };

  render() {
    return html`
      <h2>${this.data.headline}</h2>
      <p>${this.data.description}</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: PassDataHeadline;
  }
}
