import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import EventTriggerStyles from './EventTriggerStyles';

const componentName = 'wd-event-trigger';

export type WunderClickEvent = {
  count: number;
};

@customElement(componentName)
export class EventTrigger extends LitElement {
  static styles = EventTriggerStyles;

  @state()
  private _count = 0;

  render() {
    return html`<div>
      <div>Count: ${this._count}</div>
      <button @click=${this._clickEvent}><slot>Click me</slot></button>
    </div>`;
  }

  private _clickEvent() {
    this._count++;
    this.dispatchEvent(
      new CustomEvent<WunderClickEvent>('wunderClick', {
        bubbles: true,
        composed: false,
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
