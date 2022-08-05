import { css } from 'lit';

export default css`
  :host {
    padding: 2em;
    display: block;
  }

  :host([highlight]) button {
    border: 4px solid yellow;
  }

  button {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }

  .button--primary {
    color: white;
    background-color: #1ea7fd;
    border: 4px solid #1ea7fd;
  }

  .button--secondary {
    color: #333;
    background-color: transparent;
    border: 4px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  .button--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  .button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  .button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
`;
