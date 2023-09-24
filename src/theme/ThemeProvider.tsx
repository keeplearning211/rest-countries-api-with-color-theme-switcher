import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import ThemeContext from './themeContext';
import { darkThemeConfig, lightThemeConfig } from './themeConfig';

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const theme = React.useMemo(
    () => {
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