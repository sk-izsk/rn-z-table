import { parseChemicalFormula } from '@/features/chemistry/formula'
import { buildElementMatrix } from './matrix-builder'
import { solveNullSpace } from './solver'

export interface BalanceResult {
  balanced?: string
  coefficients?: number[]
  error?: string
}

const parseSide = (
  side: string,
): { ok: true; compounds: string[] } | { ok: false; error: string } => {
  if (!side.trim()) {
    return { ok: true, compounds: [] }
  }

  const compounds = side.split('+').map((compound) => compound.trim())
  if (compounds.some((compound) => compound.length === 0)) {
    return { ok: false, error: 'Remove empty compounds around plus signs.' }
  }

  return { ok: true, compounds }
}

const toFormulaCounts = (compounds: string[]) => {
  const counts = new Map<string, Record<string, number>>()

  for (const compound of compounds) {
    const parsed = parseChemicalFormula(compound)
    if (!parsed.ok) {
      return { ok: false as const, error: parsed.error }
    }
    counts.set(compound, parsed.counts)
  }

  return { ok: true as const, counts }
}

const formatBalancedSide = (compounds: string[], coefficients: number[]): string =>
  compounds
    .map((compound, index) => `${coefficients[index] === 1 ? '' : coefficients[index]}${compound}`)
    .join(' + ')

const parseEquationInput = (input: string) => {
  const sides = input.split(/->|→|=/u).map((side) => side.trim())
  if (sides.length !== 2) {
    return { ok: false as const, error: 'Use -> to separate reactants and products.' }
  }

  const reactantSide = parseSide(sides[0])
  if (!reactantSide.ok) {
    return { ok: false as const, error: reactantSide.error }
  }

  const productSide = parseSide(sides[1])
  if (!productSide.ok) {
    return { ok: false as const, error: productSide.error }
  }

  if (reactantSide.compounds.length === 0 || productSide.compounds.length === 0) {
    return { ok: false as const, error: 'Both sides of the equation need at least one compound.' }
  }

  return {
    ok: true as const,
    reactants: reactantSide.compounds,
    products: productSide.compounds,
  }
}

export const balanceEquation = (input: string): BalanceResult => {
  const parsedEquation = parseEquationInput(input)
  if (!parsedEquation.ok) {
    return { error: parsedEquation.error }
  }

  const { products, reactants } = parsedEquation
  const compounds = [...reactants, ...products]
  const parsed = toFormulaCounts(compounds)
  if (!parsed.ok) {
    return { error: parsed.error }
  }

  const { elements, matrix } = buildElementMatrix({
    compounds,
    counts: parsed.counts,
    reactantCount: reactants.length,
  })
  if (elements.length === 0) {
    return { error: 'No elements found.' }
  }

  const coefficients = solveNullSpace(matrix)
  if (!coefficients) {
    return { error: 'Could not balance equation.' }
  }

  const balanced = `${formatBalancedSide(
    reactants,
    coefficients.slice(0, reactants.length),
  )} → ${formatBalancedSide(products, coefficients.slice(reactants.length))}`

  return { balanced, coefficients }
}
