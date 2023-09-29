import { Box, IconButton, useTheme, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ThemeContext from '../theme/themeContext'
// import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { COLOR_SCHEME } from '../theme/ThemeProvider';
function Header() {
  const theme = useTheme();
  const { toggleMode } = React.useContext(ThemeContext);
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === COLOR_SCHEME && toggleMode) {
        return toggleMode()
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [toggleMode]);
  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // bgcolor: 'background.default',
          // color: 'text.primary',
          padding: '1.25rem 1rem'
        }}
      >
        <Typography variant='h1'>Where in the world?</Typography>
        <Box>
          <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
            {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <DarkModeIcon />}
          </IconButton>
          <Typography component="span" variant='body2' sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
            {theme.palette.mode} mode
          </Typography>
        </Box>
      </Box>

    </header>
  )
}

export default Header