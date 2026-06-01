import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedCalendar } from './AnimatedCalendar';

const meta: Meta<typeof AnimatedCalendar> = {
  title: 'RC Design System/Animated Calendar',
  component: AnimatedCalendar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component key: `58e1b1119a8dde05671de08e42ae3ff2d7749df2`\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  args: {},
};
export default meta;
type Story = StoryObj<typeof AnimatedCalendar>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  name: 'Pre-selected Date',
  args: { defaultValue: new Date(2026, 4, 15) },
};

export const WithMinMax: Story = {
  name: 'With Min/Max',
  args: {
    minDate: new Date(2026, 4, 1),
    maxDate: new Date(2026, 4, 31),
  },
};
