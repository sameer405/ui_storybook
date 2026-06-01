import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

function HomeIcon() {
  return <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" /></svg>;
}

const ITEMS = [
  { id: 'overview',  label: 'Overview' },
  { id: 'analytics', label: 'Analytics', badge: 3 },
  { id: 'settings', label: 'Settings' },
  { id: 'disabled', label: 'Disabled', disabled: true },
];

const meta: Meta<typeof Tabs> = {
  title: 'RC Design System/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tabs key: `d34c44309e0f20244fdd0f3896d2688e28d0d3ef`\n' +
          'Tab element key: `6aa3d906b709e2d43e38393845d767c33bd44aad`\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['line', 'pill'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: { items: ITEMS, defaultActiveId: 'overview', variant: 'line', size: 'md' },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Line: Story = { args: { variant: 'line' } };
export const Pill: Story = { args: { variant: 'pill' } };

export const WithIcons: Story = {
  name: 'With Icons',
  args: {
    variant: 'line',
    items: [
      { id: 'home', label: 'Home', icon: <HomeIcon /> },
      { id: 'analytics', label: 'Analytics', badge: 5 },
      { id: 'settings', label: 'Settings' },
    ],
    defaultActiveId: 'home',
  },
};

export const AllSizes: Story = {
  name: 'All Sizes — Line',
  render: () => (
    <div className="flex flex-col gap-8">
      {(['sm', 'md', 'lg'] as const).map(s => (
        <div key={s}>
          <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">{s}</p>
          <Tabs items={ITEMS} defaultActiveId="overview" variant="line" size={s} />
        </div>
      ))}
    </div>
  ),
};

export const BothVariants: Story = {
  name: 'Both Variants',
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Line (default)</p>
        <Tabs items={ITEMS} defaultActiveId="overview" variant="line" />
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Pill</p>
        <Tabs items={ITEMS} defaultActiveId="overview" variant="pill" />
      </div>
    </div>
  ),
};
