import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'RC Design System/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Figma component: Tooltip (page: Tooltip)\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    content: { control: 'text' },
  },
  args: { content: 'Helpful tooltip text', position: 'top' },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="secondary">Hover me</Button>
    </Tooltip>
  ),
};

export const AllPositions: Story = {
  name: 'All Positions',
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-16">
      {(['top','bottom','left','right'] as const).map(p => (
        <Tooltip key={p} content={`Tooltip ${p}`} position={p}>
          <Button variant="secondary" size="sm">{p}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};
