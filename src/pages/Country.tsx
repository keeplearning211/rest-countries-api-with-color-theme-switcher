import { Typography, Button, Box } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
// import { country as countryData } from './mockData';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useGetCountryByCodeQuery } from '../features/api/apiSlice'
import CountryInfoPiece from '../components/CountryInfoPiece'
import BordersCountryInfoPiece from '../components/BordersCountryInfoPiece'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { baseUrl } from '../AppWithRouter'

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
    <Box component="main" sx={{
      display: 'grid',
      justifyContent: 'start',
      gap: { xs: 2, lg: 10 },
      p: { xs: 4, md: '74px 78px' },
    }}>
      <Button sx={{
        display: 'flex',
        gap: 1,
        backgroundColor: 'background.default',
        color: 'text.primary',
        width: 136,
        padding: '6px 12px 6px 8px'
      }}
        onClick={() => navigate(`${baseUrl}`)}
      >
        <KeyboardBackspaceIcon sx={{
          color: 'text.secondary',
        }} /> Back
      </Button>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'unset', lg: '563px auto' },
        gap: { xs: 4, lg: 17.75 },
        alignItems: 'center'
      }} >
        <Box sx={{ display: 'flex', width: { xs: '100%', md: '500px' }, height: { lg: '400px' } }}>
          <LazyLoadImage src={country?.flags.svg} alt={`Flag of ${country?.name.common}`} style={{ width: '100%' }} />
        </Box>
        <Box data-test-name="info-group"
          sx={{
            display: 'grid',
            pt: { xs: 1, lg: '62px' },
            gap: { xs: '54px', lg: '17px' },
            minHeight: '400px',
          }} >
          <Typography sx={{ fontSize: '2rem', fontWeight: 800, lineHeight: 0 }} >{country?.name.common}</Typography>
          <Box data-test-name="info-piece-group"
            sx={{
              display: 'grid',
              gap: { xs: 2, lg: '76px' },
              gridTemplateColumns: { xs: 'unset', md: '1fr 1fr' }
            }}>
            <Box data-test-name="info-peace-group-1"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                gap: '8px',
                height: 170,
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
              gap: '8px',
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

