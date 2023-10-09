import { Theme, Select, MenuItem, SelectChangeEvent, Paper, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
// import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

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
    fontWeight: 600,
    padding: theme.spacing(0, 2),
    '& .MuiSelect-select': {
      paddingRight: '0px !important',
    },
  },
}))

interface CountryFilterProps {
  onFilter: (filterValue: string) => void;
  filterValue: string;
}

function CountryFilter({ onFilter, filterValue }: CountryFilterProps) {
  const classes = useStyles()
  const theme = useTheme()
  // const [region, setRegion] = useState('');

  // const handleRegionChange = (event: SelectChangeEvent<string>) => {
  //   setRegion(event.target.value);
  // };


  const handleRegionChange = (event: SelectChangeEvent<string>) => {
    onFilter(event.target.value)
  }
  return (
    <Paper
      className={classes.paper}
    >
      <Select
        className={classes.select}
        IconComponent={() => <KeyboardArrowDownIcon sx={{ color: theme.palette.text.secondary }} />}
        value={filterValue}
        onChange={handleRegionChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Filter by Region' }}
        MenuProps={{
          PaperProps: {
            style: {
              marginTop: theme.spacing(1),
              backgroundColor: theme.palette.background.default,
              padding: theme.spacing(0, 2),
            },
          },
        }}
        renderValue={(selected: string) => {
          if (!selected) {
            return <em>Filter by Region</em>
          }
          return selected
        }}
      >
        <MenuItem value={'Africa'}>Africa</MenuItem>
        <MenuItem value={'Americas'}>Americas</MenuItem>
        <MenuItem value={'Asia'}>Asia</MenuItem>
        <MenuItem value={'Europe'}>Europe</MenuItem>
        <MenuItem value={'Oceania'}>Oceania</MenuItem>
      </Select>
    </Paper>
  )
}

export default CountryFilter