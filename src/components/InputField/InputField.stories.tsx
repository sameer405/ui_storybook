import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

function MailIcon() {
  return (
    <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const meta: Meta<typeof InputField> = {
  title: 'RC Design System/Input Field',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma component key: `91bcf366a38581add6f7e35c73cd61d4064e8c9f`\n\n' +
          'Size × State: sm/md/lg × Default/Hover/Focus/Active/Typing/Filled/error/disabled\n\n' +
          'Default/Filled → gray bg. Hover/Focus/Active → white bg + orange border.\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    size:     { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Label/Name',
    required: true,
    placeholder: 'Placeholder text..',
    hint: 'Helper text goes here...',
    size: 'md',
    leadingIcon: <MailIcon />,
  },
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {};
export const Filled: Story = { args: { defaultValue: 'Fill text here', placeholder: undefined } };
export const Error: Story = { args: { errorMessage: 'Helper text goes here...', hint: undefined } };
export const Disabled: Story = { args: { disabled: true } };
export const WithSearch: Story = { name: 'With Search Icon', args: { leadingIcon: <SearchIcon />, placeholder: 'Search...', label: 'Search', required: false } };
export const WithTrailingIcon: Story = { name: 'With Trailing Icon', args: { type: 'password', trailingIcon: <EyeIcon />, placeholder: 'Password', label: 'Password' } };

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-col gap-5 max-w-sm">
      <InputField label="Small" required size="sm" leadingIcon={<MailIcon />} placeholder="Placeholder text.." hint="Helper text goes here..." />
      <InputField label="Medium" required size="md" leadingIcon={<MailIcon />} placeholder="Placeholder text.." hint="Helper text goes here..." />
      <InputField label="Large" required size="lg" leadingIcon={<MailIcon />} placeholder="Placeholder text.." hint="Helper text goes here..." />
    </div>
  ),
};

export const AllStates: Story = {
  name: 'All States (md)',
  render: () => (
    <div className="flex flex-col gap-5 max-w-sm">
      <InputField label="Default"  required leadingIcon={<MailIcon />} placeholder="Placeholder text.." hint="Helper text goes here..." />
      <InputField label="Filled"   required leadingIcon={<MailIcon />} defaultValue="Fill text here" hint="Helper text goes here..." />
      <InputField label="Error"    required leadingIcon={<MailIcon />} defaultValue="Fill text here" errorMessage="Helper text goes here..." />
      <InputField label="Disabled" required leadingIcon={<MailIcon />} placeholder="Placeholder text.." hint="Helper text goes here..." disabled />
    </div>
  ),
};
