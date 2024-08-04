import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import '../../crossplex/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  presetColors: [
    '#1F2937',
    '#059669',
    '#34D399',
    '#DC2626',
    '#FCA5A5',
    '#FFFFFF',
    '#E5E7EB',
    '#94A3B8',
    '#475569',
    '#F1F5F9',
    '#991B1B',
    '#334155',
  ],
};

// Adding a custom control for theme switching
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'sober', title: 'Sober' },
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'modern', title: 'Modern' },
        { value: 'coolBlue', title: 'Cool Blue' },
        { value: 'oceanBlue', title: 'Ocean Blue' },
        { value: 'skyBlue', title: 'Sky Blue' },
      ],
      showName: true,
    },
  },
};

export const decorators = [
  // enable default fonts
  (Story, context) => {
    useEffect(() => {
      // Set the `data-theme` attribute based on the selected theme
      document.documentElement.setAttribute(
        'data-theme',
        context.globals.theme ?? 'sober',
      );
    }, [context.globals.theme]);

    return <Story />;
  },
];
