import type { Meta, StoryObj } from '@storybook/react';
import { ToastNotification } from './ToastNotification';

const meta: Meta<typeof ToastNotification> = {
  title: 'RC Design System/Toast Notification',
  component: ToastNotification,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Figma component key: `732334aaa5538c5f79ee50c559f99eb3c9088a8c`\n\n' +
          'Types: Info · success · warning-alert · error\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'warning-alert', 'error'] },
    title: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    type: 'info',
    title: 'Model training started',
    description: 'Your pipeline is now running in the background.',
    visible: true,
  },
};
export default meta;
type Story = StoryObj<typeof ToastNotification>;

export const Info: Story = { args: { type: 'info' } };
export const Success: Story = { args: { type: 'success', title: 'Pipeline complete', description: 'Results are ready to download.' } };
export const WarningAlert: Story = { name: 'Warning Alert', args: { type: 'warning-alert', title: 'Low disk space', description: 'Pipeline may fail.' } };
export const Error: Story = { args: { type: 'error', title: 'Training failed', description: 'Out of memory error.' } };

export const AllTypes: Story = {
  name: 'All Types',
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <ToastNotification type="info"           title="Info"          description="Something informational." />
      <ToastNotification type="success"        title="Success"       description="Operation completed." />
      <ToastNotification type="warning-alert"  title="Warning"       description="Proceed with caution." />
      <ToastNotification type="error"          title="Error"         description="Something went wrong." />
    </div>
  ),
};

export const WithAction: Story = {
  name: 'With Action & Dismiss',
  args: { type: 'error', title: 'Upload failed', action: { label: 'Retry now', onClick: () => {} }, onDismiss: () => {} },
};
