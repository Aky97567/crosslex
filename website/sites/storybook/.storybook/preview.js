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
