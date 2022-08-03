import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ButtonSize, ButtonType, CounterButton } from './CounterButton';
export default {
  title: 'Lit/Counter Button',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: Object.values(ButtonType)
    },
    size: {
      control: { type: 'select' },
      options: Object.values(ButtonSize)
    },
    highlight: {
      control: { type: 'boolean' }
    }
  }
} as Meta;

const Template: Story<Partial<CounterButton>> = (args) => {
  const { type, size, highlight } = args;
  return html`<counter-button
    type=${ifDefined(type)}
    size=${ifDefined(size)}
    ?highlight=${highlight}
  ></counter-button>`;
};

export const CounterButtonDefault = Template.bind({});
CounterButtonDefault.args = {
  type: ButtonType.Primary,
  size: ButtonSize.Medium,
  highlight: false
};
