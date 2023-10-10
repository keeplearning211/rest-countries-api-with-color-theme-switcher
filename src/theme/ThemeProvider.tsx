import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import ThemeContext from './themeContext'
import useCustomizeTheme from './useCustomizeTheme'

export type ThemeType = 'light' | 'dark';
export const COLOR_SCHEME = 'COLOR_SCHEME'
const getColorScheme = (): ThemeType => {
  const colorScheme = localStorage.getItem(COLOR_SCHEME)
  if (colorScheme === 'light' || colorScheme === 'dark')
    return colorScheme
  else
    return 'light'
}

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = React.useState<ThemeType>(getColorScheme)

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const theme = useCustomizeTheme(mode)

  return (
    <ThemeContext.Provider value={{ toggleMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider