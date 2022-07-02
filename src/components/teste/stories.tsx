import { Story } from '@storybook/react/types-6-0';
import Home from '../../pages';

export default {
  title: 'Home',
  component: Home,
};

export const Template: Story = () => {
  return <Home />;
};
