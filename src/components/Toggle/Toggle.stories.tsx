import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const ITEMS = [
  { id: 'a', label: 'Toggle 01' },
  { id: 'b', label: 'Toggle 02' },
];

const ITEMS_3 = [
  { id: 'all',    label: 'All' },
  { id: 'month',  label: 'Month' },
  { id: 'week',   label: 'Week' },
];

const meta: Meta<typeof Toggle> = {
  title: 'RC Design System/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component key: `1483:13667`  (page: Switch)\n\n' +
          'Pill-group toggle: one item active at a time. Active = #ED600E bg + white text. ' +
          'Inactive = white bg + gray border + gray text.\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    showIcon: { control: 'boolean' },
  },
  args: { items: ITEMS, defaultActiveId: 'a', size: 'md', showIcon: true },
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};
export const SecondActive: Story = { name: 'Second Active', args: { defaultActiveId: 'b' } };

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-col gap-4">
      <Toggle items={ITEMS} defaultActiveId="a" size="sm" />
      <Toggle items={ITEMS} defaultActiveId="a" size="md" />
      <Toggle items={ITEMS} defaultActiveId="a" size="lg" />
    </div>
  ),
};

export const ThreeItems: Story = {
  name: 'Three Items',
  render: () => <Toggle items={ITEMS_3} defaultActiveId="month" showIcon={false} />,
};

export const WithDisabled: Story = {
  name: 'With Disabled Item',
  args: {
    items: [
      { id: 'a', label: 'Toggle 01' },
      { id: 'b', label: 'Toggle 02', disabled: true },
    ],
    defaultActiveId: 'a',
  },
};
