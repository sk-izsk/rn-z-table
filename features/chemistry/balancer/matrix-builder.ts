import { fraction } from './fractions'

export const buildElementMatrix = ({
  compounds,
  counts,
  reactantCount,
}: {
  compounds: string[]
  counts: Map<string, Record<string, number>>
  reactantCount: number
}) => {
  const elements = Array.from(
    new Set(compounds.flatMap((compound) => Object.keys(counts.get(compound) ?? {}))),
  )

  return {
    elements,
    matrix: elements.map((element) =>
      compounds.map((compound, index) => {
        const count = counts.get(compound)?.[element] ?? 0
        return fraction(index < reactantCount ? count : -count)
      }),
    ),
  }
}
