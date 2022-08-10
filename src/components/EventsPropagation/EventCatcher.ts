import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import EventCatcherStyles from './EventCatcherStyles';
import { WunderClickEvent } from './EventTrigger';

const componentName = 'wd-event-catcher';

@customElement(componentName)
export class EventCatcher extends LitElement {
  static styles = EventCatcherStyles;

  @property({ type: Boolean })
  propagate: boolean = false;

  @state()
  private _count = 0;

  render() {
    return html`<div @wunderClick=${this._wunderClickListener}>
      <h3>Catch</h3>
      <label>
        <input
          type="checkbox"
          ?checked=${this.propagate}
          @click=${this._toggle}
        />
        Propagate
      </label>

      <p>Propagated Count: ${this._count}</p>
      <slot>
        <wd-event-trigger></wd-event-trigger>
      </slot>
    </div>`;
  }

  private _toggle() {
    this.propagate = !this.propagate;
  }

  private _wunderClickListener(e: CustomEvent<WunderClickEvent>) {
    this._count = e.detail.count;
    if (!this.propagate) {
      e.stopPropagation();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: EventCatcher;
  }
}
