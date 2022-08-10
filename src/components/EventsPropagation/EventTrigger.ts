import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import EventTriggerStyles from './EventTriggerStyles';

const componentName = 'wd-event-trigger';

export type WunderClickEvent = {
  count: number;
};

@customElement(componentName)
export class EventTrigger extends LitElement {
  static styles = EventTriggerStyles;

  @property({ type: Boolean })
  bubbles: boolean = true;

  @property({ type: Boolean })
  composed: boolean = false;

  @state()
  private _count = 0;

  render() {
    return html`<div>
      <label>
        <input
          type="checkbox"
          ?checked=${this.bubbles}
          @click=${this._toggleBubbles}
        />
        Bubbles
      </label>
      <label>
        <input
          type="checkbox"
          ?checked=${this.composed}
          @click=${this._toggleComposed}
        />
        Composed
      </label>
      <div>Count: ${this._count}</div>
      <button @click=${this._clickEvent}>Click me</button>
    </div>`;
  }

  private _toggleBubbles() {
    this.bubbles = !this.bubbles;
  }

  private _toggleComposed() {
    this.composed = !this.composed;
  }

  private _clickEvent() {
    this._count++;
    this.dispatchEvent(
      new CustomEvent<WunderClickEvent>('wunderClick', {
        bubbles: this.bubbles,
        composed: this.composed,
        detail: {
          count: this._count
        }
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: EventTrigger;
  }
}
