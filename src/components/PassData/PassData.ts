import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ComplexData } from './PassDataHeadline';
import PassDataStyles from './PassDataStyles';

const componentName = 'wd-pass-data';

@customElement(componentName)
export class PassData extends LitElement {
  static styles = PassDataStyles;

  @state()
  data: ComplexData = {
    headline: '',
    description: ''
  };

  render() {
    return html`<section>
      <wd-pass-data-headline .data=${this.data}></wd-pass-data-headline>
      <label>
        Headline
        <input
          type="text"
          @change=${this._changeHeadline}
          value=${this.data.headline}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          @change=${this._changeDescription}
          value=${this.data.description}
        />
      </label>
    </section> `;
  }

  private _changeHeadline(e: Event) {
    const targetInput = e.target as HTMLInputElement;
    this.data = { ...this.data, ...{ headline: targetInput.value } };
  }

  private _changeDescription(e: Event) {
    const targetInput = e.target as HTMLInputElement;
    this.data = { ...this.data, ...{ description: targetInput.value } };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: PassData;
  }
}
