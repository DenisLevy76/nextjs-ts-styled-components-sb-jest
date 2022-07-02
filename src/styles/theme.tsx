export const theme = {
  colors: {
    primaryColor: '#08080e',
    secondaryColor: '#dc6e14',
    white: '#f4f2f4',
    mediumGray: '#d4d3d3',
  },
  font: {
    family: {
      default: "'Roboto', sans-serif",
      secondary: "'Roboto', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;

export type ThemeType = typeof theme;
