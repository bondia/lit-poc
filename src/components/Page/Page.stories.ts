import { Meta, Story } from '@storybook/web-components';
import * as HeaderStories from '../Header/Header.stories';
import { Page, PageProps } from './Page';

export default {
  title: '__Old/Page'
} as Meta;

const Template: Story<Partial<PageProps>> = (args) => Page(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/web-components/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args
};
