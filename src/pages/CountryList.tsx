import { Box, Paper, Theme } from "@mui/material"
import makeStyles from '@mui/styles/makeStyles';
import CountrySearch from "../components/CountrySearch";
import CountryFilter from "../components/CountryFilter";
import CountryCard from "../components/CountryCard";
import countries from "./mockData";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    minHeight: "90vh",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    padding: theme.spacing(2, 8),
    gap: theme.spacing(6)
  },
  controlBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  countriesList: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing(9),
  }
}));

function CountryList() {
  const classes = useStyles()
  console.log('countryList', countries);

  return (
    <Paper className={classes.paper}>
      <Box className={classes.controlBox}>
        <CountrySearch />
        <CountryFilter />
      </Box>
      <Box className={classes.countriesList}>
        {
          countries.length && countries.map(country => (
            <CountryCard key={country.name} country={country} />
          ))
        }
      </Box>
    </Paper>
  )
}
export default CountryList
