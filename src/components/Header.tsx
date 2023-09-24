import { Box, IconButton, useTheme, Typography } from '@mui/material'
import React from 'react'
import ThemeContext from '../theme/themeContext'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'



function Header() {
  const theme = useTheme();
  const { toggleMode } = React.useContext(ThemeContext);
  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'background.default',
          color: 'text.primary',
          padding: '1.25rem 1rem'
        }}
      >
        <Typography variant='h1'>Where in the world?</Typography>
        <Box>
          <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Typography component="span" variant='body2'>
            {theme.palette.mode} mode
          </Typography>
        </Box>
      </Box>

    </header>
  )
}

export default Header