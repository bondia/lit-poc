import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { ButtonSize, ButtonType } from '../CounterButton/CounterButton';
import { SlotsExample } from './SlotsExample';

export default {
  title: 'Lit/Slots Example'
} as Meta;

const Template: Story<Partial<SlotsExample>> = (args) => {
  return html`<slots-example></slots-example>`;
};

export const SlotsDefault = Template.bind({});
SlotsDefault.args = {
  type: ButtonType.Primary,
  size: ButtonSize.Medium,
  highlight: false
};
