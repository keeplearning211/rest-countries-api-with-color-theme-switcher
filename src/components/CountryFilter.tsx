import { Theme, Select, MenuItem, SelectChangeEvent, Paper, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    width: 200,
    padding: theme.spacing(0.25, 0)
  },
  iconButton: {
    padding: theme.spacing(1)
  },
  select: {
    // marginLeft: theme.spacing(1),
    flex: 1,
    backgroundColor: theme.palette.background.default,
    fontWeight: 600,
    padding: theme.spacing(0, 2),
  },
}))

function CountryFilter() {
  const classes = useStyles();
  const theme = useTheme()
  const [region, setRegion] = useState('');

  const handleRegionChange = (event: SelectChangeEvent<string>) => {
    setRegion(event.target.value as string);
  };
  return (
    <Paper
      className={classes.paper}
    >
      <Select
        className={classes.select}
        IconComponent={() => <KeyboardArrowDownIcon sx={{ color: theme.palette.text.secondary }} />}
        value={region}
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
            return <em>Filter by Region</em>;
          }
          return selected;
        }}
      >
        <MenuItem value={'Africa'}>Africa</MenuItem>
        <MenuItem value={'America'}>America</MenuItem>
        <MenuItem value={'Asia'}>Asia</MenuItem>
        <MenuItem value={'Europe'}>Europe</MenuItem>
        <MenuItem value={'Oceania'}>Oceania</MenuItem>
      </Select>
    </Paper>
  );
}

export default CountryFilter;