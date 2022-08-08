import { css } from 'lit';

export default css`
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 calc(var(--column-gutter) * -1);
  }
`;
