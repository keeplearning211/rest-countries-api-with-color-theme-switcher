import { Box, Typography, useTheme } from '@mui/material'

interface InfoPieceProps {
  label: string;
  value: string | undefined;
}

function CountryInfoPiece({ label, value }: InfoPieceProps) {
  const theme = useTheme()
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(0.5)
    }}>
      <Typography variant="body1">{label}:</Typography>
      <Typography variant="body1" sx={{ fontWeight: 300 }}>{value}</Typography>
    </Box>
  )
}

export default CountryInfoPiece