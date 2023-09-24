import { ThemeOptions } from '@mui/material/styles';

const darkThemeConfig: ThemeOptions = {
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
}

const lightThemeConfig: ThemeOptions = {
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
}

export { darkThemeConfig, lightThemeConfig };