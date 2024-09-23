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
