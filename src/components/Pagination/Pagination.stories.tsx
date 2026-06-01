import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import React from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'RC Design System/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Figma components: `.page no` (state×type) + `Pagination` (page: Pagination)\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    total:    { control: { type: 'number', min: 1 } },
    page:     { control: { type: 'number', min: 1 } },
    pageSize: { control: { type: 'number', min: 1 } },
  },
  args: { total: 180, page: 1, pageSize: 11 },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};
export const MiddlePage: Story = { args: { page: 5 } };
export const LastPage: Story = { args: { page: 10 } };

export const Interactive: Story = {
  name: 'Interactive',
  render: () => {
    const [page, setPage] = React.useState(1);
    return (
      <div className="flex flex-col items-center gap-4">
        <Pagination total={100} page={page} pageSize={10} onChange={setPage} />
        <p className="text-sm text-gray-500">Current page: {page}</p>
      </div>
    );
  },
};
