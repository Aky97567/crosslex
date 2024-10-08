type BreakPoints = {
  name: string;
  width: number;
}[];

const breakpoints = [
  {
    name: 'sm',
    width: 576,
  },
  {
    name: 'md',
    width: 768,
  },
  {
    name: 'lg',
    width: 992,
  },
  {
    name: 'xl',
    width: 1280,
  },
  {
    name: 'xxl',
    width: 1920,
  },
];

export { breakpoints };
export type { BreakPoints };
