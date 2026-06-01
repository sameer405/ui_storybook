import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem, NotificationsPanel } from './Notification';

const SAMPLE_ITEMS = [
  { state: 'default' as const, name: 'Pipeline run completed', projectName: 'Sales Analytics', time: '2m ago', progress: 100 },
  { state: 'error' as const,   name: 'Model training failed',  projectName: 'Churn Predictor', time: '5m ago', message: 'Out of memory error', actionLabel: 'Retry' },
  { state: 'warning' as const, name: 'Dataset upload slow',    projectName: 'Inventory Data',  time: '12m ago', progress: 45 },
  { state: 'default' as const, name: 'Export ready',           projectName: 'Q4 Report',       time: '1h ago', actionLabel: 'Download' },
];

const meta: Meta<typeof NotificationItem> = {
  title: 'RC Design System/Notification',
  component: NotificationItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Figma components: `.notification` (State=Default/Error/Warning/Hover) + `Notifications` panel (page: Notification)\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    state: { control: 'select', options: ['default', 'error', 'warning', 'hover'] },
  },
  args: {
    state: 'default',
    name: 'Pipeline run completed',
    projectName: 'Sales Analytics',
    time: '2m ago',
    progress: 75,
  },
};
export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Default: Story = {};
export const Error: Story = { args: { state: 'error', name: 'Training failed', message: 'Out of memory', actionLabel: 'Retry' } };
export const Warning: Story = { args: { state: 'warning', name: 'Upload slow', progress: 30 } };
export const Hover: Story = { args: { state: 'hover' } };

export const Panel: Story = {
  name: 'Notifications Panel',
  render: () => <NotificationsPanel items={SAMPLE_ITEMS} onClearAll={() => {}} />,
};

export const EmptyPanel: Story = {
  name: 'Empty Panel',
  render: () => <NotificationsPanel items={[]} />,
};
