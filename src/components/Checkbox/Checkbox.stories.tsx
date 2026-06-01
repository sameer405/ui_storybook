import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'RC Design System/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component key: `822:1255`\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    size:  { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
  args: { label: 'Option label', size: 'md' },
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = { args: { defaultChecked: false } };
export const Checked: Story = { args: { defaultChecked: true } };
export const SemiCheck: Story = { name: 'Indeterminate (semi-check)', args: { indeterminate: true } };
export const Disabled: Story = { args: { disabled: true } };

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-col gap-3">
      {(['sm','md','lg','xl'] as const).map(s => (
        <Checkbox key={s} size={s} label={`Size ${s}`} defaultChecked />
      ))}
    </div>
  ),
};
