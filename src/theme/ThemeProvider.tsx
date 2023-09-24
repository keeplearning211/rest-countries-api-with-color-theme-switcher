import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import ThemeContext from './themeContext';
import { darkThemeConfig, lightThemeConfig } from './themeConfig';

const COLOR_SCHEME = 'COLOR_SCHEME'
const getColorScheme = () => {
  const colorScheme = localStorage.getItem(COLOR_SCHEME)
  if (colorScheme === 'light' || colorScheme === 'dark')
    return colorScheme
  else
    return 'dark'
}

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>(getColorScheme);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const theme = React.useMemo(
    () => {
      localStorage.setItem(COLOR_SCHEME, mode)
      if (mode === 'light') {
        return createTheme(lightThemeConfig)
      }
      else {
        return createTheme(darkThemeConfig)
      }
    },
    [mode],
  );


  return (
    <ThemeContext.Provider value={{ toggleMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;