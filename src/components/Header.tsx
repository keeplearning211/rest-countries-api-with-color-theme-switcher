import { Box, IconButton, useTheme } from '@mui/material'
import React from 'react'
import ThemeContext from '../theme/themeContext'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

function Header() {
  const theme = useTheme();
  const { toggleMode } = React.useContext(ThemeContext);
  return (
    <header>
      <h1>Where in the world?</h1>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

    </header>
  )
}

export default Header