import { ThemeOptions, createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Theme } from '@emotion/react';

const colors = {
  darkModeElement: 'hsl(209, 23%, 22%)', // Dark Blue (Dark Mode Elements)
  darkModeBackground: 'hsl(207, 26%, 17%)', // Very Dark Blue (Dark Mode Background)
  lightModeText: 'hsl(200, 15%, 8%)', // Very Dark Blue (Light Mode Text)
  lightModeInput: 'hsl(0, 0%, 52%)', // Dark Gray (Light Mode Input)
  lightModeBackground: 'hsl(0, 0%, 98%)', // Very Light Gray (Light Mode Background)
  darkModeTextAndLightModeElements: 'hsl(0, 0%, 100%)' // White (Dark Mode Text & Light Mode Elements)
}
const baseThemeConfig: ThemeOptions = {
  typography: {
    fontFamily: [
      'Nunito Sans',
      'sans-serif',
      '-apple-system',
    ].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 600,
    fontWeightBold: 800,
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
  components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          width: '20px',
          height: '20px'
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundImage: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontWeight: 600,
          '&::placeholder': {
            color: colors.lightModeInput,
            opacity: 1,
            fontWeight: 300,
          },
        }
      },
    },

  },
}

const darkTheme: Theme = createTheme(deepmerge(baseThemeConfig, {
  palette: {
    mode: 'dark',
    primary: {
      main: colors.darkModeElement, // Dark Blue (Dark Mode Elements)
    },
    background: {
      default: colors.darkModeBackground, // Very Dark Blue (Dark Mode Background)
    },
    text: {
      primary: colors.darkModeTextAndLightModeElements, // White (Dark Mode Text)
      secondary: colors.darkModeTextAndLightModeElements, // White (Dark Mode Text)
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            color: colors.darkModeTextAndLightModeElements,
            opacity: 1
          },
        }
      },
    },
  },
}))

const lightTheme: Theme = createTheme(deepmerge(baseThemeConfig, {
  palette: {
    mode: 'light',
    primary: {
      main: colors.lightModeInput, // Dark Gray (Light Mode Input)
    },
    background: {
      default: colors.lightModeBackground, // Very Light Gray (Light Mode Background)
    },
    text: {
      primary: colors.lightModeText, // Very Dark Blue (Light Mode Text)
      secondary: colors.lightModeInput
    },
    action: {
      active: colors.darkModeTextAndLightModeElements, // White (Light Mode Elements)
    },
  },
  components: {
    MuiSelect: {
      defaultProps: {
        IconComponent: KeyboardArrowDownIcon
      },
      styleOverrides: {
        icon: {
          color: 'black',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        }
      },
    },

  },
}))


export { darkTheme, lightTheme };