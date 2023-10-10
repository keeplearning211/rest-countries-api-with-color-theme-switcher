export function formatNumber(val: number | string | undefined): string | undefined | number {
  if (val === undefined) return val

  const num = parseFloat(val as string)
  if (isNaN(num)) return val

  return new Intl.NumberFormat('en-US').format(num)
}