import type { Meta, StoryObj } from '@storybook/react';
import { LinkText } from './LinkText';

function ExternalIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

const meta: Meta<typeof LinkText> = {
  title: 'RC Design System/Link Text',
  component: LinkText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component: Link (page: Link Text)\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  args: { children: 'Open documentation' },
};
export default meta;
type Story = StoryObj<typeof LinkText>;

export const Default: Story = {};
export const WithIcon: Story = {
  name: 'With Icon',
  args: { icon: <ExternalIcon />, children: 'Open in Figma' },
};
export const InlineText: Story = {
  name: 'Inline in Text',
  render: () => (
    <p className="text-sm text-gray-700">
      Read the <LinkText href="#">documentation</LinkText> to learn more about RapidCanvas components.
    </p>
  ),
};
