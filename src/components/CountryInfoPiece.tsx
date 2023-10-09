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
      gap: theme.spacing(1)
    }}>
      <Typography variant="body2" sx={{ fontWeight: 800 }}>{label}:</Typography>
      <Typography variant="body2" sx={{ fontWeight: 300 }}>{value}</Typography>
    </Box>
  )
}

export default CountryInfoPiece