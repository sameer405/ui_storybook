/**
 * @fantom/ui — RapidCanvas UX Design Library
 * Components and design tokens extracted from Figma (F7YIPUOWnqIZAOcnFszBcr).
 *
 * Styling is Tailwind-based: the consuming app must run Tailwind and apply this
 * package's preset (see ./tailwind-preset.cjs) so the utility classes render.
 */

// Components (named exports + their prop/variant types)
export * from './components/AnimatedCalendar/AnimatedCalendar';
export * from './components/Badge/Badge';
export * from './components/Button/Button';
export * from './components/Checkbox/Checkbox';
export * from './components/IconButton/IconButton';
export * from './components/InputField/InputField';
export * from './components/LinkText/LinkText';
export * from './components/Menu/Menu';
export * from './components/Notification/Notification';
export * from './components/Pagination/Pagination';
export * from './components/ProgressBar/ProgressBar';
export * from './components/RadioButton/RadioButton';
export * from './components/SideNav/SideNav';
export * from './components/Slider/Slider';
export * from './components/StatusDotBlinker/StatusDotBlinker';
export * from './components/Switch/Switch';
export * from './components/Tabs/Tabs';
export * from './components/Tag/Tag';
export * from './components/ToastNotification/ToastNotification';
export * from './components/Toggle/Toggle';
export * from './components/Tooltip/Tooltip';
export * from './components/TopNav/TopNav';

// ErrorBoundary uses a default export
export { default as ErrorBoundary } from './components/Errorboundary/ErrorBoundary';

// Design tokens
export { colors, spacing, radius, typography, shadows } from './tokens';
