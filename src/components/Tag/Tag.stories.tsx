import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'RC Design System/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component key: `d8a1fb3103caf47b7192ebb2e00b22dd4921272b`\n\n' +
          'Colors: default · orange · green · yellow · red · blue · pink · purple · cyan · olive\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default','orange','green','yellow','red','blue','pink','purple','cyan','olive'],
    },
    size: { control: 'select', options: ['sm', 'md'] },
    dismissible: { control: 'boolean' },
  },
  args: { label: 'Tag label', color: 'orange', size: 'md', dismissible: false },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};
export const Orange: Story = { args: { color: 'orange' } };
export const Green: Story = { args: { color: 'green' } };
export const Red: Story = { args: { color: 'red' } };
export const Dismissible: Story = { args: { dismissible: true } };
export const Small: Story = { args: { size: 'sm' } };

export const AllColors: Story = {
  name: 'All Colors',
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(['default','orange','green','yellow','red','blue','pink','purple','cyan','olive'] as const).map(c => (
        <Tag key={c} label={c} color={c} />
      ))}
    </div>
  ),
};

export const AllColorsDismissible: Story = {
  name: 'All Colors — Dismissible',
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(['default','orange','green','yellow','red','blue','pink','purple','cyan','olive'] as const).map(c => (
        <Tag key={c} label={c} color={c} dismissible />
      ))}
    </div>
  ),
};
