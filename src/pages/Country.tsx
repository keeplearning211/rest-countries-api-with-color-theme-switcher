import { Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { country as countryData } from './mockData';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function Country() {
  const country = countryData
  const navigate = useNavigate()

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
          <img src={country.flag} alt={`Flag of ${country.name}`} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2">{country.name}</Typography>
          <Typography>Native Name: {country.nativeName}</Typography>
          <Typography>Population: {country.population}</Typography>
          <Typography>Region: {country.region}</Typography>
          <Typography>Sub Region: {country.subregion}</Typography>
          <Typography>Capital: {country.capital}</Typography>
          <Typography>Top Level Domain: {country.topLevelDomain}</Typography>
          <Typography>Currencies: {country.currencies.map(currency => currency.name).join(', ')}</Typography>
          <Typography>Languages: {country.languages.map(language => language.name).join(', ')}</Typography>
          <Typography>Border Countries: {country.borders.join(', ')}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Country