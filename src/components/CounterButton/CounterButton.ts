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

  @state()
  private _count = 0;

  render() {
    const className = `button--${this.type} button--${this.size}`;
    return html`
      <div class="card">
        <button class=${className} @click=${this._onClick} part="button">
          count is ${this._count}
        </button>
      </div>
    `;
  }

  private _onClick() {
    this._count++;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    counter: CounterButton;
  }
}
