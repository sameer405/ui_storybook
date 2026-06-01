import type { Meta, StoryObj } from '@storybook/react';
import { TopNav } from './TopNav';

const meta: Meta<typeof TopNav> = {
  title: 'RC Design System/Top Nav',
  component: TopNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Figma component key: `499:283`  (page: Navigation)\n\n' +
          'Variant: type=Global\n\n' +
          'Design: white bg + bottom border. Left: workspace name + LIVE badge + sort chevron. ' +
          'Right: search pill (⌘K) + notification bell with red dot.\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    workspaceName:      { control: 'text' },
    liveStatus:         { control: 'boolean' },
    searchShortcut:     { control: 'text' },
    notificationCount:  { control: 'number' },
  },
  args: { workspaceName: 'WorkspaceName', liveStatus: true, notificationCount: 1 },
};
export default meta;
type Story = StoryObj<typeof TopNav>;

export const Default: Story = {};
export const NoLive: Story = { name: 'No LIVE Badge', args: { liveStatus: false } };
export const NoNotifications: Story = { name: 'No Notifications', args: { notificationCount: 0 } };
export const CustomWorkspace: Story = { name: 'Custom Workspace', args: { workspaceName: 'Production Env' } };
