import { InputBase, IconButton, Theme, Paper } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { useDebounce } from '../app/hooks';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    width: 400,
    padding: theme.spacing(0.25, 0),
    backgroundColor: `${theme.palette.background.default} !important`
  },
  iconButton: {
    padding: theme.spacing(1),
  },
  inputBase: {
    marginLeft: theme.spacing(1),
    flex: 1,
    backgroundColor: theme.palette.background.default,
    '&>input&::placeholder': {
      color: theme.palette.text.primary, // Change this to the color you want
    },
  }
}))

const TIME_OUT = 300;

function CountrySearch() {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, TIME_OUT);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    console.log('debouncedInputValue', debouncedInputValue);

  }, [debouncedInputValue])

  return (
    <Paper
      className={classes.paper}
    >
      <IconButton className={classes.iconButton} type="button" aria-label="search"
        sx={{
          color: 'text.secondary',
        }}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.inputBase}
        placeholder="Search for a countries..."
        inputProps={{ 'aria-label': 'Search for a countries...' }}
        value={inputValue}
        onChange={handleInputChange}
      ></InputBase>
    </Paper>
  );
}

export default CountrySearch;