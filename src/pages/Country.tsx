import { Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
// import { country as countryData } from './mockData';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useGetCountryByCodeQuery } from '../features/api/apiSlice';
function Country() {
  const navigate = useNavigate()

  const { code } = useParams(); // Get the country name from the URL parameters

  // Use the hook to fetch the country data
  const { data: country, error, isLoading } = useGetCountryByCodeQuery(code ?? '');
  // console.log('country', country);

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.log('error loading country', error)
    return <div>Error</div>
  }

  if (!country) {
    console.log('error loading country', error)
    return <div>no country</div>
  }

  return (
    <Box sx={{
      display: 'grid',
      justifyContent: 'space-around',
      gap: 2,
      p: 2
    }}>
      <Button sx={{
        display: 'flex',
        gap: 0.5,
        backgroundColor: 'background.default',
        color: 'text.primary',
        width: 120,
      }}
        onClick={() => navigate(-1)}
      >
        <KeyboardBackspaceIcon sx={{
          color: 'text.secondary',
        }} /> Back
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={country?.flags.svg} alt={`Flag of ${country?.name.common}`} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6} container>
          <Grid item xs={12} container>
            <Grid item>
              <Typography variant="h2">{country?.name.common}</Typography>
              <Typography>Native Name: {country?.name.native}</Typography>
              <Typography>Population: {country?.population}</Typography>
              <Typography>Region: {country?.region}</Typography>
              <Typography>Sub Region: {country?.subregion}</Typography>
            </Grid>
            <Grid item>
              <Typography>Capital: {country?.capital}</Typography>
              <Typography>Top Level Domain: {country?.topLevelDomain}</Typography>
              <Typography>Currencies: {country.currencies}</Typography>
              <Typography>Languages: {country.languages}</Typography>
            </Grid>
          </Grid>
          <Grid item>
            {country.borders.length ? <Typography>Border Countries: {country.borders.join(', ')}</Typography> : null}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Country