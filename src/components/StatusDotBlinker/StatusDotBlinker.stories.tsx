import type { Meta, StoryObj } from '@storybook/react';
import { StatusDotBlinker } from './StatusDotBlinker';

const meta: Meta<typeof StatusDotBlinker> = {
  title: 'RC Design System/Status Dot Blinker',
  component: StatusDotBlinker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component key: `4bea9f9373d1aee06f24d7a21e217a3b80e87749`\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    status: { control: 'select', options: ['online', 'offline', 'busy', 'away', 'idle'] },
    size:   { control: 'select', options: ['sm', 'md', 'lg'] },
    animate: { control: 'boolean' },
  },
  args: { status: 'online', size: 'md', animate: true },
};
export default meta;
type Story = StoryObj<typeof StatusDotBlinker>;

export const Online: Story = { args: { status: 'online', label: 'Online' } };
export const Offline: Story = { args: { status: 'offline', label: 'Offline', animate: false } };
export const Busy: Story = { args: { status: 'busy', label: 'Busy' } };
export const Away: Story = { args: { status: 'away', label: 'Away' } };
export const Static: Story = { args: { animate: false } };

export const AllStatuses: Story = {
  name: 'All Statuses',
  render: () => (
    <div className="flex flex-col gap-3">
      {(['online', 'offline', 'busy', 'away', 'idle'] as const).map((s) => (
        <StatusDotBlinker key={s} status={s} label={s} size="md" animate={s !== 'offline'} />
      ))}
    </div>
  ),
};
