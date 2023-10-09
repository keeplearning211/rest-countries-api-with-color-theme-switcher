import { Typography, Button, Box } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
// import { country as countryData } from './mockData';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useGetCountryByCodeQuery } from '../features/api/apiSlice'
import CountryInfoPiece from '../components/CountryInfoPiece'
import BordersCountryInfoPiece from '../components/BordersCountryInfoPiece'
function Country() {
  const navigate = useNavigate()
  const { code } = useParams()
  const { data: country, error, isLoading } = useGetCountryByCodeQuery(code ?? '')

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>
  if (error) {
    console.log('get country error', error)
    return <div>Error</div>
  }

  return (
    <Box sx={{
      display: 'grid',
      justifyContent: 'space-around',
      gap: 12,
      p: { xs: 4, md: 8 },
      pt: 8,
    }}>
      <Button sx={{
        display: 'flex',
        gap: 0.5,
        backgroundColor: 'background.default',
        color: 'text.primary',
        width: 120,
      }}
        onClick={() => navigate('/')}
      >
        <KeyboardBackspaceIcon sx={{
          color: 'text.secondary',
        }} /> Back
      </Button>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'unset', md: '1fr 1fr' },
        gap: { xs: 4, md: 16 },
        alignItems: 'center'
      }} >
        <Box>
          <img src={country?.flags.svg} alt={`Flag of ${country?.name.common}`} style={{ width: '100%' }} />
        </Box>
        <Box data-test-name="info-group"
          sx={{
            display: 'grid',
            pt: '48px',
            gap: { xs: 3, md: 'unset' },
            minHeight: '400px',
          }} >
          <Typography sx={{ fontSize: '24px' }} variant="h1">{country?.name.common}</Typography>
          <Box data-test-name="info-piece-group"
            sx={{
              display: 'grid',
              gap: '8px',
              gridTemplateColumns: { xs: 'unset', md: '1fr 1fr' }
            }}>
            <Box data-test-name="info-peace-group-1"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
              <CountryInfoPiece label="Native Name" value={country?.name.native} />
              <CountryInfoPiece label="Population" value={country?.population.toString()} />
              <CountryInfoPiece label="Region" value={country?.region} />
              <CountryInfoPiece label="Sub Region" value={country?.subregion} />
              <CountryInfoPiece label="Capital" value={country?.capital} />
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <CountryInfoPiece label="Top Level Domain" value={country?.topLevelDomain} />
              <CountryInfoPiece label="Currencies" value={country?.currencies.join(', ')} />
              <CountryInfoPiece label="Languages" value={country?.languages} />
            </Box>
          </Box>
          <Box >
            <BordersCountryInfoPiece codes={country?.borders} />
          </Box>
        </Box>
      </Box>
    </Box >

  )
}

export default Country

