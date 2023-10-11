import { Theme, Select, MenuItem, SelectChangeEvent, Paper, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
// import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    width: 200,
  },
  iconButton: {
    padding: theme.spacing(1)
  },
  select: {
    flex: 1,
    backgroundColor: theme.palette.background.default,
    padding: '0 15px 0 10px',
    '& .MuiSelect-select': {
      paddingRight: '0px !important',
      fontWeight: 300,
      fontSize: '14px',
    },
  },
  menuItem: {
    fontWeight: '300 !important',
    fontSize: '14px !important'
  }
}))

interface CountryFilterProps {
  onFilter: (filterValue: string) => void;
  filterValue: string;
}

function CountryFilter({ onFilter, filterValue }: CountryFilterProps) {
  const classes = useStyles()
  const theme = useTheme()
  const [openSelect, setOpenSelect] = useState<boolean>(false)

  const handleRegionChange = (event: SelectChangeEvent<string>) => {
    onFilter(event.target.value)
  }
  return (
    <Paper
      className={classes.paper}
    >
      <Select
        className={classes.select}
        IconComponent={() =>
          <KeyboardArrowDownIcon
            sx={{
              color: theme.palette.text.secondary,
              width: '18px',
              position: 'absolute',
              right: 18,
              pointerEvents: 'none !important',
              transform: openSelect ? 'rotate(180deg)' : 'none'
            }} />
        }
        onOpen={() => setOpenSelect(true)}
        onClose={() => setOpenSelect(false)}
        value={filterValue}
        onChange={handleRegionChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Filter by Region' }}
        MenuProps={{
          PaperProps: {
            sx: {
              marginTop: theme.spacing(1),
              backgroundColor: theme.palette.background.default,
              padding: theme.spacing(0, 1),
            },
          },
        }}
        renderValue={(selected: string) => {
          if (!selected) {
            return 'Filter by Region'
          }
          return selected
        }}
      >
        <MenuItem className={classes.menuItem} value={'Africa'}>Africa</MenuItem>
        <MenuItem className={classes.menuItem} value={'Americas'}>Americas</MenuItem>
        <MenuItem className={classes.menuItem} value={'Asia'}>Asia</MenuItem>
        <MenuItem className={classes.menuItem} value={'Europe'}>Europe</MenuItem>
        <MenuItem className={classes.menuItem} value={'Oceania'}>Oceania</MenuItem>
      </Select>
    </Paper>
  )
}

export default CountryFilter