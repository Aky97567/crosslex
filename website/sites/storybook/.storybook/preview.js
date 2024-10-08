import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import '../../crosslex/styles/globals.css';

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

export const globalTypes = {
  palette: {
    name: 'Palette',
    description: 'Global palette for components',
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
  (Story, context) => {
    useEffect(() => {
      document.documentElement.setAttribute(
        'data-palette',
        context.globals.palette ?? 'sober',
      );
    }, [context.globals.palette]);

    return <Story />;
  },
];
