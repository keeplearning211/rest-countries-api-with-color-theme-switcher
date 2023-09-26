import { Box, Paper, Theme } from "@mui/material"
import makeStyles from '@mui/styles/makeStyles';
import CountrySearch from "../components/CountrySearch";
import CountryFilter from "../components/CountryFilter";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    minHeight: "90vh",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    padding: theme.spacing(2, 4),
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
  }
}));

function CountryList() {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Box className={classes.box}>
        <CountrySearch />
        <CountryFilter />
      </Box>
    </Paper>
  )
}
export default CountryList
