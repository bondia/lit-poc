import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
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
    }
  }
} as Meta;

const Template: Story<Partial<CounterButton>> = (args) => {
  const { type, size } = args;
  return html`<counter-button type=${type} size=${size}></counter-button>`;
};

export const CounterButtonDefault = Template.bind({});
CounterButtonDefault.args = {
  type: ButtonType.Primary,
  size: ButtonSize.Medium
};
