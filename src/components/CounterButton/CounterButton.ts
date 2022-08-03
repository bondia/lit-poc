import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import ContentButtonStyles from './ContentButtonStyles';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

@customElement('counter-button')
export class CounterButton extends LitElement {
  static styles = ContentButtonStyles;

  @property({ type: String })
  type: ButtonType = ButtonType.Primary;

  @property({ type: String })
  size: ButtonSize = ButtonSize.Small;

  @property({ type: Boolean, reflect: true })
  highlight = false;

  @state()
  private _count = 0;

  render() {
    const className = `button--${this.type} button--${this.size}`;
    return html`
      <button class=${className} @click=${this._onClick} part="button">
        count is ${this._count}
      </button>
    `;
  }

  private _onClick() {
    this._count++;
    this.highlight = this.highlight || this._count >= 10;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    counter: CounterButton;
  }
}
