import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'RC Design System/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component: Switch (page: Switch). Variants: Switch=On / Switch=Off\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    labelPosition: { control: 'select', options: ['left', 'right'] },
  },
  args: { label: 'Enable feature' },
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Off: Story = { name: 'Switch Off', args: { defaultChecked: false } };
export const On: Story = { name: 'Switch On', args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const LabelLeft: Story = { name: 'Label Left', args: { labelPosition: 'left', defaultChecked: true } };
