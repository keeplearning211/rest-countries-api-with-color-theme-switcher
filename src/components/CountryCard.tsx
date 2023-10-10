// components/CountryCard.tsx
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material'
import { CountryGeneral } from '../type'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface CountryCardProps {
  country: CountryGeneral;
}

function CountryCard({ country }: CountryCardProps) {
  const theme = useTheme()

  return (
    <Card
      sx={{
        width: {
          sx: '100%',
          md: theme.spacing(33)
        },
        maxWidth: '264px',
        height: {
          sx: 'auto',
          md: theme.spacing(41.5)
        },
        padding: theme.spacing(0),
        backgroundColor: 'background.default',
        borderRadius: theme.spacing(1),
      }}
    >
      <CardContent
        sx={{
          padding: 0,
          cursor: 'pointer',
        }}>
        <LazyLoadImage src={country.flags.svg} alt={country.name.common} loading="lazy" style={{ width: '100%', height: 158, objectFit: 'cover' }} />
        <Box
          sx={{
            padding: theme.spacing(3, 3),
            display: 'grid',
            gap: theme.spacing(2)
          }}>
          <Typography component="p" sx={{ fontSize: '1.125rem', fontWeight: '600' }}>
            {country.name.common}
          </Typography>
          <Box sx={{
            display: 'grid',
            gap: theme.spacing(0.5),
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
  )
}

export default CountryCard