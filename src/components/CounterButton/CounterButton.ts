import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
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

  willUpdate(props: PropertyValues<this>) {
    console.info('willUpdate', {
      type: props.get('type'),
      size: props.get('size'),
      highlight: props.get('highlight')
    });
  }

  updated(props: PropertyValues<this>) {
    console.info('updated', {
      type: props.get('type'),
      size: props.get('size'),
      highlight: props.get('highlight')
    });
  }

  render() {
    const classes = {
      [`button--${this.type}`]: true,
      [`button--${this.size}`]: true
    };
    return html`
      <button class=${classMap(classes)} @click=${this._onClick} part="button">
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
    'counter-button': CounterButton;
  }
}
