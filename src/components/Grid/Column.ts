import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('wd-column')
export class Column extends LitElement {
  @property({ type: Number })
  xs: Number = 1;

  @property({ type: Number })
  sm: Number = 1;

  @property({ type: Number })
  md: Number = 1;

  @property({ type: Number })
  lg: Number = 1;

  @property({ type: Number })
  xl: Number = 1;

  @property({ type: Number })
  pushxs: Number = 0;

  @property({ type: Number })
  pushsm: Number = 0;

  @property({ type: Number })
  pushmd: Number = 0;

  @property({ type: Number })
  pushlg: Number = 0;

  @property({ type: Number })
  pushxl: Number = 0;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wd-column': Column;
  }
}
