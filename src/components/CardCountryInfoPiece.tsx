import { Box, Typography, useTheme } from '@mui/material'
import { formatNumber } from '../app/ultils'

interface InfoPieceProps {
  label: string;
  value: string | number | undefined;
}

function CardCountryInfoPiece({ label, value }: InfoPieceProps) {
  const theme = useTheme()
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(0.5)
    }}>
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>{label}:</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 300 }}>{formatNumber(value)}</Typography>
    </Box>
  )
}

export default CardCountryInfoPiece