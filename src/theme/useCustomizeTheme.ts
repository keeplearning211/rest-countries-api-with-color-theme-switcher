import { useMemo } from 'react'
import { ThemeType } from './ThemeProvider'
import { darkTheme, lightTheme } from './CustomizeTheme'

const COLOR_SCHEME = 'COLOR_SCHEME'

function useCustomizeTheme(themeType: ThemeType) {
  // Use a media query to check if the user prefers dark mode
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () => {
      localStorage.setItem(COLOR_SCHEME, themeType)
      if (themeType === 'light') {
        return lightTheme
      }
      else {
        return darkTheme
      }
    },
    [themeType],
  )
  return theme
}

export default useCustomizeTheme