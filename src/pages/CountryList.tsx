import { Box, Paper, Theme } from "@mui/material"
import makeStyles from '@mui/styles/makeStyles';
import CountrySearch from "../components/CountrySearch";
import CountryFilter from "../components/CountryFilter";
import CountryCard from "../components/CountryCard";
import countries from "./mockData";
import { Link } from "react-router-dom";

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
    gap: 16,
    flexWrap: "wrap",
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
            <Link to={`/country/${country.name}`} key={country.name}>
              <CountryCard country={country} />
            </Link>
          ))
        }
      </Box>
    </Paper>
  )
}
export default CountryList
