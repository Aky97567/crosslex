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
    '#222222',
    '#00977D',
    '#6EC2B7',
    '#FF4B19',
    '#E4A5A3',
    '#FFFFFF',
    '#F5F5F5',
    '#B6BFC1',
    '#5E6E6A',
    '#E8EDEC',
    '#880D1E',
    '#0D3B66',
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
        context.globals.theme,
      );
    }, [context.globals.theme]);

    return <Story />;
  },
];
