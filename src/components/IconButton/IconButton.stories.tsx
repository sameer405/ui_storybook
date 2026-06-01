import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

function BellIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M15 17H9m3-14a7 7 0 017 7c0 5 2 6 2 6H4s2-1 2-6a7 7 0 017-7z" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

const meta: Meta<typeof IconButton> = {
  title: 'RC Design System/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component key: `676:18280`\n\n' +
          'Types: Primary · Secondary · Tertiary · No bg\n' +
          'Sizes: sm · md · lg · xl\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'no-bg'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: { icon: <BellIcon />, label: 'Notifications', variant: 'no-bg', size: 'md' },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const NoBg: Story = { name: 'No bg', args: { variant: 'no-bg' } };
export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Tertiary: Story = { args: { variant: 'tertiary' } };

export const AllTypes: Story = {
  name: 'All Types',
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton icon={<BellIcon />}     label="No bg"     variant="no-bg" />
      <IconButton icon={<BellIcon />}     label="Primary"   variant="primary" />
      <IconButton icon={<SettingsIcon />} label="Secondary" variant="secondary" />
      <IconButton icon={<SettingsIcon />} label="Tertiary"  variant="tertiary" />
    </div>
  ),
};

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton icon={<BellIcon />} label="sm" size="sm" />
      <IconButton icon={<BellIcon />} label="md" size="md" />
      <IconButton icon={<BellIcon />} label="lg" size="lg" />
      <IconButton icon={<BellIcon />} label="xl" size="xl" />
    </div>
  ),
};
