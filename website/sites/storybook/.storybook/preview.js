import 'tailwindcss/tailwind.css';

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

export const decorators = [
  // enable default fonts
  Story => (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&amp;family=Source+Sans+Pro:wght@400;600&amp;display=swap"
        rel="stylesheet"
      />
      <div className="font-source">
        <Story />
      </div>
    </>
  ),
];
