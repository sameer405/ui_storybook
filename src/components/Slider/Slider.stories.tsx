import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'RC Design System/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component key: `1383:7416`\n\n' +
          'Variants: size (sm/md/lg) × orientation (horizontal/vertical) × state (default/disable)\n\n' +
          'Design: rounded-full track, orange gradient fill (#F98C4E → #ED600E), white drop-shadow thumb\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    size:        { control: 'select', options: ['sm', 'md', 'lg'] },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    min:         { control: 'number' },
    max:         { control: 'number' },
    step:        { control: 'number' },
    disabled:    { control: 'boolean' },
    showValue:   { control: 'boolean' },
  },
  args: { min: 0, max: 100, defaultValue: 40, label: 'Volume', showValue: true, size: 'md' },
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true, defaultValue: 60 } };
export const Stepped: Story = { name: 'Stepped (step=10)', args: { step: 10, defaultValue: 50 } };

export const AllSizes: Story = {
  name: 'All Sizes — Horizontal',
  render: () => (
    <div className="flex flex-col gap-8 w-72">
      <Slider size="sm" label="Small (sm)" defaultValue={40} showValue />
      <Slider size="md" label="Medium (md)" defaultValue={60} showValue />
      <Slider size="lg" label="Large (lg)" defaultValue={75} showValue />
    </div>
  ),
};

export const Disabled3: Story = {
  name: 'Disabled (all sizes)',
  render: () => (
    <div className="flex flex-col gap-8 w-72">
      <Slider size="sm" label="Small disabled" defaultValue={40} disabled showValue />
      <Slider size="md" label="Medium disabled" defaultValue={60} disabled showValue />
      <Slider size="lg" label="Large disabled" defaultValue={75} disabled showValue />
    </div>
  ),
};
