import type { FormulaCounts } from './types'

export const addCount = ({
  counts,
  symbol,
  count,
}: {
  counts: FormulaCounts
  symbol: string
  count: number
}): void => {
  counts[symbol] = (counts[symbol] ?? 0) + count
}

export const mergeCounts = ({
  target,
  source,
  multiplier,
}: {
  target: FormulaCounts
  source: FormulaCounts
  multiplier: number
}): void => {
  for (const [symbol, count] of Object.entries(source)) {
    addCount({ counts: target, symbol, count: count * multiplier })
  }
}
