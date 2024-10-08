/** @type {import('tailwindcss').Config} */

const COLORS = {
  primary: '#222222',
  color1: {
    DEFAULT: '#00977D',
    800: '#006E5B',
    900: '#005244',
  },
  color2: {
    400: '#C5E7E2',
    DEFAULT: '#6EC2B7',
  },
  color3: '#FF4B19',
  color4: '#E4A5A3',
  color5: '#F5F5F5',
  color6: '#B6BFC1',
  color7: '#5E6E6A',
  color8: '#E8EDEC',
  white: '#FFFFFF',
  dark: '#00000080',
  error: '#880D1E',
  errorLight: '#FFE8EB',
  current: 'currentcolor',
  transparent: 'transparent',
  green: {
    gradient: {
      from: '#0D8C76',
      to: '#06705F',
    },
  },
  orange: {
    gradient: {
      from: '#FF4B19',
      to: '#FF8664',
    },
  },
  mint: {
    gradient: {
      from: '#6EC2B7',
      to: '#4FBBAD',
    },
  },
  swirl: {
    gradient: {
      from: '#FF4B19',
      via: '#E4A5A3',
      to: '#6CC2B6',
    },
  },
};

module.exports = {
  theme: {
    screens: {
      // xs: '375px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
    },
    colors: {
      ...COLORS,
      brand: {
        DEFAULT: 'var(--color-brand)',
        2: 'var(--color-brand-2)',
        3: 'var(--color-brand-3)',
      },
      text: {
        DEFAULT: 'var(--color-text)',
        cta: 'var(--color-cta-text)',
        'alpha-50': 'rgba(var(--color-text), 0.5)',
      },

      bg: {
        l1: 'rgb(var(--color-bg-l1))',
        'l1-50': 'rgba(var(--color-bg-l1), 0.5)',
        l2: 'var(--color-bg-l2)',
      },
      transparent: 'rgba(0,0,0,0)',
    },
    fontFamily: {
      quicksand: [
        'Quicksand',
        'Bryant',
        '"Proxima Nova Soft"',
        'Arial Rounded MT Bold',
        'sans-serif',
      ],
      source: ['"Source Sans Pro"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    lineHeight: {
      base: '32px',
      focus: '0.666',
      xxs: '1',
      xs: '1.2',
      sm: '1.25',
      md: '1.3',
      lg: '1.333',
      xl: '1.4',
      xxl: '1.466',
    },
    fontSize: {
      basetext: '18px',
      focus: '0.666rem',
      xxs: '0.833rem',
      xs: '0.888rem',
      sm: '1rem',
      md: '1.555rem',
      lg: '2.111rem',
      xl: '2.666rem',
      '3xl': '4rem',
    },
    spacing: {
      0: '0',
      5: '0.125rem',
      10: '0.25rem',
      15: '0.375rem',
      20: '0.5rem',
      30: '0.75rem',
      40: '1rem',
      50: '24px',
      60: '32px',
      70: '40px',
      80: '48px',
      90: '64px',
      100: '72px',
      110: '96px',
      120: '112px',
      130: '128px',
      140: '144px',
      150: '160px',
    },
    borderRadius: {
      none: '0',
      xxs: '2px',
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '24px',
    },
    boxShadow: {
      sm: '0px 6px 20px rgba(0, 0, 0, 0.06)',
      md: '0px 10px 25px rgba(0, 0, 0, 0.08)',
      lg: '0px 10px 30px rgba(0, 0, 0, 0.14)',
    },
    backgroundImage: {
      // @see https://www.scien.cx/2021/11/10/adding-radial-gradients-to-tailwind-css/
      none: 'none',
      'gradient-to-t': 'linear-gradient(0deg, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(180deg, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(90deg, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(270deg, var(--tw-gradient-stops))',
      'gradient-radial':
        'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      'gradient-radial-at-t':
        'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      'gradient-radial-at-b':
        'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
      'gradient-radial-at-l':
        'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
      'gradient-radial-at-r':
        'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
      'gradient-radial-at-tl':
        'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
      'gradient-radial-at-tr':
        'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
      'gradient-radial-at-bl':
        'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
      'gradient-radial-at-br':
        'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
    },
    extend: {
      minHeight: {
        100: '5rem',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-15px)' },
          '60%': { transform: 'translateY(-8px)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        flipAndExpand: {
          '0%': {
            transform: 'rotateY(0deg) scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'rotateY(180deg) scale(1.5) translate(0, 0)', // Adjust the final scale and translation as needed
            opacity: '0',
          },
        },
        flipAndScaleUp: {
          '0%': { transform: 'rotateY(0deg) scale(1)' },
          '50%': { transform: 'rotateY(90deg) scale(1.5)' },
          '100%': { transform: 'rotateY(180deg) scale(2)' },
        },
        flipAndScaleUp1: {
          '0%': {
            transform: 'rotateY(0deg) scale(1)',
            transformOrigin: 'center',
          },
          '50%': {
            transform: 'rotateY(90deg) scale(1.7)',
            transformOrigin: 'center',
          },
          '100%': {
            transform: 'rotateY(180deg) scale(2.4)',
            transformOrigin: 'center',
          },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.7)' },
          '100%': { transform: 'scale(2.4)' },
        },
        vibrate: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '50%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(-2px)' },
        },
      },
      animation: {
        bounce: 'bounce 0.6s ease-in-out',
        flip: 'flip 0.5s ease-in-out',
        flipAndExpand: 'flipAndExpand 1s ease-in-out forwards',
        flipAndScaleUp: 'flipAndScaleUp 0.5s ease-in-out forwards',
        scaleUp: 'scaleUp 0.4s ease-in-out',
        vibrate: 'vibrate 0.4s ease-in-out',
      },
      backgroundImage: {
        'gradient-brand':
          'linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-2) 50%, var(--color-brand-3) 100%)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
      },
      width: {
        350: '350px',
      },
      gridTemplateColumns: {
        '1-2-1': '1fr 2fr 1fr',
        24: 'repeat(24, minmax(0, 1fr))',
      },
      maxWidth: {
        400: '400px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.rotate-into': {
          transform: 'rotateY(180deg)',
        },
      });
    },
  ],
};
