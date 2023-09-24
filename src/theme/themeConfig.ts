import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
const basicThemeConfig: ThemeOptions = {
  typography: {
    fontFamily: [
      'Nunito Sans',
      'sans-serif',
      '-apple-system',
    ].join(','),
    h1: {
      fontSize: '1rem',
      fontWeight: 600,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: 16,
      // fontWeight: 300,
    },
    body2: {
      fontSize: 14,
      // fontWeight: 300,
    },
  },
}

const darkThemeConfig: ThemeOptions = deepmerge(basicThemeConfig, {
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(209, 23%, 22%)', // Dark Blue (Dark Mode Elements)
    },
    background: {
      default: 'hsl(207, 26%, 17%)', // Very Dark Blue (Dark Mode Background)
    },
    text: {
      primary: 'hsl(0, 0%, 100%)', // White (Dark Mode Text)
    },
  },
})

const lightThemeConfig: ThemeOptions = deepmerge(basicThemeConfig, {
  palette: {
    mode: 'light',
    primary: {
      main: 'hsl(0, 0%, 52%)', // Dark Gray (Light Mode Input)
    },
    background: {
      default: 'hsl(0, 0%, 98%)', // Very Light Gray (Light Mode Background)
    },
    text: {
      primary: 'hsl(200, 15%, 8%)', // Very Dark Blue (Light Mode Text)
    },
    action: {
      active: 'hsl(0, 0%, 100%)', // White (Light Mode Elements)
    },
  },
})

export { darkThemeConfig, lightThemeConfig };