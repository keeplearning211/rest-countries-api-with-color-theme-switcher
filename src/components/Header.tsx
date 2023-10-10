import { Box, IconButton, useTheme, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ThemeContext from '../theme/themeContext'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { COLOR_SCHEME } from '../theme/ThemeProvider'
function Header() {
  const theme = useTheme()
  const { toggleMode } = React.useContext(ThemeContext)
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === COLOR_SCHEME && toggleMode) {
        return toggleMode()
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [toggleMode])
  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'background.default',
          padding: { xs: '1.25rem 1rem', md: '20px 81px 20px 80px' }
        }}
      >
        <Typography
          sx={{
            fontWeight: 800
          }}
          variant="h1">Where in the world?</Typography>
        <Box onClick={toggleMode}>
          <IconButton sx={{ ml: 1 }} color="inherit" aria-label="Change theme button">
            {theme.palette.mode === 'light' ? <DarkModeOutlinedIcon /> : <DarkModeIcon />}
          </IconButton>
          <Typography component="span" variant="body1" sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
            {theme.palette.mode === 'dark' ? 'Light' : 'Dark'} mode
          </Typography>
        </Box>
      </Box>

    </header>
  )
}

export default Header