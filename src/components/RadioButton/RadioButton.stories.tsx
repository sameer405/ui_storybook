import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'RC Design System/Radio Button',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component key: `822:1298`\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    size:  { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Option label', size: 'md' },
};
export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Off: Story = { name: 'Unselected', args: { defaultChecked: false } };
export const On: Story = { name: 'Selected', args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-col gap-3">
      {(['sm','md','lg','xl'] as const).map(s => (
        <RadioButton key={s} size={s} label={`Size ${s}`} defaultChecked />
      ))}
    </div>
  ),
};

export const RadioGroup: Story = {
  name: 'Radio Group',
  render: () => (
    <div className="flex flex-col gap-2">
      <RadioButton name="group" value="a" label="Option A" defaultChecked />
      <RadioButton name="group" value="b" label="Option B" />
      <RadioButton name="group" value="c" label="Option C" />
      <RadioButton name="group" value="d" label="Option D (disabled)" disabled />
    </div>
  ),
};
