import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'RC Design System/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component key: `2766:1867`\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['neutral', 'orange', 'green', 'red', 'cyan', 'blue', 'purple', 'yellow', 'pink', 'olive'],
    },
    style: { control: 'select', options: ['solid', 'glass'] },
    label: { control: 'text' },
  },
  args: { label: 'Badge', color: 'orange', style: 'solid' },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
export const Glass: Story = { args: { style: 'glass' } };

export const AllColors: Story = {
  name: 'All Colors — Solid',
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(['neutral','orange','green','red','cyan','blue','purple','yellow','pink','olive'] as const).map(c => (
        <Badge key={c} label={c} color={c} style="solid" />
      ))}
    </div>
  ),
};

export const AllColorsGlass: Story = {
  name: 'All Colors — Glass',
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(['neutral','orange','green','red','cyan','blue','purple','yellow','pink','olive'] as const).map(c => (
        <Badge key={c} label={c} color={c} style="glass" />
      ))}
    </div>
  ),
};
