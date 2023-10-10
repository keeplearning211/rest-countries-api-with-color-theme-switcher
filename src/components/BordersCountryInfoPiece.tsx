import { Box, Chip, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useGetCountryByCodeQuery } from '../features/api/apiSlice'

interface BordersCountryInfoPieceProps {
  codes: string[] | undefined;
}

function BordersCountryInfoPiece({ codes }: BordersCountryInfoPieceProps) {
  if (!codes || codes.length === 0) {
    return null
  }

  return (
    <Box sx={{
      display: 'flex',
      gap: 2,
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
      <Typography variant="body1" >Border Countries:</Typography>
      <Box sx={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
      }}>
        {
          codes.map(code => (
            <CountryChip key={code} code={code} />
          ))
        }
      </Box>
    </Box>
  )
}

export default BordersCountryInfoPiece

interface CountryChipProps {
  code: string
}


function CountryChip({ code }: CountryChipProps) {
  const { data: country } = useGetCountryByCodeQuery(code)
  return (
    <Link key={code} to={`/country/${code}`} >
      <Chip label={country?.name.common} sx={{
        borderRadius: '4px',
        width: '99px',
        height: '30px'
      }} />
    </Link>
  )
}

