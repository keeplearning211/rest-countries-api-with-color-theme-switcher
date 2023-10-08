// components/CountryCard.tsx
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { CountryGeneral } from '../type'

interface CountryCardProps {
  country: CountryGeneral;
}

function CountryCard({ country }: CountryCardProps) {
  const theme = useTheme()

  // const clickHandler = () => {
  //   console.log('countryName', country.name);
  // }

  return (
    <Card
      sx={{
        width: {
          sx: '100%',
          md: theme.spacing(33)
        },
        height: {
          sx: 'auto',
          md: theme.spacing(46.75)
        },
        padding: theme.spacing(0),
        backgroundColor: 'background.default',
        borderRadius: theme.spacing(1),
      }}
    // onClick={clickHandler}
    >
      <CardContent
        sx={{
          padding: 0,
          cursor: 'pointer',
        }}>
        <img src={country.flags.svg} alt={country.name.common} style={{ width: '100%', height: 158 }} />
        <Box
          sx={{
            padding: theme.spacing(3, 2.5),
            display: 'grid',
            gap: theme.spacing(3)
          }}>
          <Typography variant="h5" component="div">
            {country.name.common}
          </Typography>
          <Box sx={{
            display: 'grid',
            gap: theme.spacing(1),
          }}>

            <Typography variant="body2" color="text.secondary">
              Population: {country.population}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Region: {country.region}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Capital: {country.capital}
            </Typography>
          </Box>

        </Box>
      </CardContent>
    </Card>
  );
}

export default CountryCard;