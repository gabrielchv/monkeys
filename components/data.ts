export const monkeyHappyness = (pct: number) => {
  if (pct <= (100 / 6) * 1) return 't1'
  if (pct <= (100 / 6) * 2 && pct >= (100 / 6) * 1) return 't2'
  if (pct <= (100 / 6) * 3 && pct >= (100 / 6) * 2) return 'n1'
  if (pct <= (100 / 6) * 4 && pct >= (100 / 6) * 3) return 'n2'
  if (pct <= (100 / 6) * 5 && pct >= (100 / 6) * 4) return 'f1'
  if (pct >= (100 / 6) * 5) return 'f2'
}
