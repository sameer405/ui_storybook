import type { Meta, StoryObj } from '@storybook/react';
import { SideNav } from './SideNav';

function Icon({ d }: { d: string }) {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

// Matches actual RC nav structure from Figma screenshot
const RC_ITEMS = [
  { id: 'dashboard',    label: 'Dashboard',          section: 'Overview',              icon: <Icon d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" /> },
  { id: 'all-projects', label: 'All Projects',       section: 'Projects & DataApps',   icon: <Icon d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /> },
  { id: 'dataapps',     label: 'DataApps',           section: 'Projects & DataApps',   icon: <Icon d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
  { id: 'schedulers',   label: 'Schedulers',         section: 'Automation & Compute',  icon: <Icon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
  { id: 'fastapis',     label: 'FastAPIs',           section: 'Automation & Compute',  icon: <Icon d="M13 10V3L4 14h7v7l9-11h-7z" /> },
  { id: 'environments', label: 'Environments',       section: 'Automation & Compute',  icon: <Icon d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /> },
  { id: 'predictions',  label: 'Prediction Services', section: 'Automation & Compute', icon: <Icon d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /> },
  { id: 'connectors',   label: 'Connectors',         section: 'Data & Integrations',   icon: <Icon d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /> },
  { id: 'folders',      label: 'Folders & Models',   section: 'Data & Integrations',   icon: <Icon d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /> },
];

function RCLogo({ collapsed }: { collapsed?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-7 w-7 rounded-lg bg-[#ED600E] flex items-center justify-center shrink-0">
        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>
      {!collapsed && <span className="text-sm font-semibold text-gray-900">RapidCanvas</span>}
    </div>
  );
}

function UserFooter({ collapsed }: { collapsed?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-7 w-7 rounded-full bg-[#ED600E] flex items-center justify-center text-white text-xs font-bold shrink-0">SA</div>
      {!collapsed && <span className="text-sm text-gray-600 truncate">Shirely Anderson</span>}
    </div>
  );
}

const meta: Meta<typeof SideNav> = {
  title: 'RC Design System/Side Nav',
  component: SideNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Figma component key: `295:3506`  (page: Navigation)\n\n' +
          'Variants: SideNav=Global-E/C, NavItem Type=Selected-E/C, Default-E/C\n\n' +
          'Active item: 3px left orange bar + #FFF1E9 bg + orange icon tint.\n\n' +
          '[Open in Figma](https://www.figma.com/design/F7YIPUOWnqIZAOcnFszBcr/RapidCanvas---UX-Design-Library--WIP-)',
      },
    },
  },
  argTypes: {
    collapsed: { control: 'boolean' },
  },
  args: {
    items: RC_ITEMS,
    activeId: 'dashboard',
    collapsed: false,
  },
};
export default meta;
type Story = StoryObj<typeof SideNav>;

export const GlobalExpanded: Story = {
  name: 'Global — Expanded',
  args: {
    collapsed: false,
    header: <RCLogo />,
    footer: <UserFooter />,
  },
  decorators: [(Story) => <div className="h-screen flex"><Story /></div>],
};

export const GlobalCollapsed: Story = {
  name: 'Global — Collapsed',
  args: {
    collapsed: true,
    header: <RCLogo collapsed />,
    footer: <UserFooter collapsed />,
  },
  decorators: [(Story) => <div className="h-screen flex"><Story /></div>],
};

export const ActiveDashboard: Story = {
  name: 'Active: Dashboard',
  args: {
    activeId: 'dashboard',
    header: <RCLogo />,
    footer: <UserFooter />,
  },
  decorators: [(Story) => <div className="h-screen flex"><Story /></div>],
};

export const ActivePredictions: Story = {
  name: 'Active: Prediction Services',
  args: {
    activeId: 'predictions',
    header: <RCLogo />,
    footer: <UserFooter />,
  },
  decorators: [(Story) => <div className="h-screen flex"><Story /></div>],
};
