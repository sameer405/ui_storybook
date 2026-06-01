import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'RC Design System/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma components: `Progress Anim` (2078:3773) and `Progress load static` (2092:2781) — page: Loader\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    variant:   { control: 'select', options: ['animated', 'static'] },
    size:      { control: 'select', options: ['sm', 'md', 'lg'] },
    value:     { control: { type: 'range', min: 0, max: 100, step: 1 } },
    error:     { control: 'boolean' },
    showInfo:  { control: 'boolean' },
    name:      { control: 'text' },
  },
  args: { value: 50, size: 'md', variant: 'static', showInfo: true, name: 'Uploading...' },
};
export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};
export const Animated: Story = { name: 'Progress Anim', args: { variant: 'animated', name: 'Loading model...' } };
export const Error: Story = { name: 'load=Error', args: { error: true, name: 'Upload failed' } };
export const Complete: Story = { name: 'load=100%', args: { value: 100, name: 'Complete' } };

export const AllSizes: Story = {
  name: 'All Sizes — Static',
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm">
      <ProgressBar size="sm" value={40} name="Small" showInfo />
      <ProgressBar size="md" value={60} name="Medium" showInfo />
      <ProgressBar size="lg" value={75} name="Large" showInfo />
    </div>
  ),
};

export const LoadStates: Story = {
  name: 'All Load States',
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm">
      {([0, 25, 50, 75, 100] as const).map(v => (
        <ProgressBar key={v} value={v} name={`load=${v}%`} showInfo />
      ))}
      <ProgressBar error name="load=Error" showInfo />
    </div>
  ),
};
