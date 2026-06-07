import { gcdBigInt, lcmBigInt, negate, type Fraction } from './fractions'
import { buildNullSpaceBasis, combineBasis, toRref, type Matrix } from './matrix'

const MAX_FREE_VARIABLE_WEIGHT = 12

const fractionsToIntegerCoefficients = (values: Fraction[]): number[] | undefined => {
  const denominatorLcm = values.reduce((acc, value) => lcmBigInt(acc, value.denominator), 1n)
  const scaled = values.map((value) => value.numerator * (denominatorLcm / value.denominator))
  const sign = scaled.some((value) => value < 0n) && !scaled.some((value) => value > 0n) ? -1n : 1n
  const normalized = scaled.map((value) => value * sign)

  if (normalized.some((value) => value <= 0n)) {
    return undefined
  }

  const divisor = normalized.reduce((acc, value) => gcdBigInt(acc, value), normalized[0] ?? 1n)
  const reduced = normalized.map((value) => value / divisor)

  if (reduced.some((value) => value > BigInt(Number.MAX_SAFE_INTEGER))) {
    return undefined
  }

  return reduced.map(Number)
}

const tryIntegerCoefficients = (solution: Fraction[]): number[] | undefined => {
  const coefficients = fractionsToIntegerCoefficients(solution)
  if (coefficients) {
    return coefficients
  }

  const flipped = fractionsToIntegerCoefficients(solution.map(negate))
  if (flipped) {
    return flipped
  }

  return undefined
}

const freeVariableWeights = Array.from(
  { length: MAX_FREE_VARIABLE_WEIGHT },
  (_, index) => index + 1,
).flatMap((weight) => [weight, -weight])

const searchBasisCombinations = ({
  basis,
  index,
  weights,
}: {
  basis: Matrix
  index: number
  weights: number[]
}): number[] | undefined => {
  if (index === basis.length) {
    return tryIntegerCoefficients(combineBasis({ basis, weights }))
  }

  for (const weight of freeVariableWeights) {
    weights[index] = weight
    const coefficients = searchBasisCombinations({ basis, index: index + 1, weights })
    if (coefficients) {
      return coefficients
    }
  }

  return undefined
}

export const solveNullSpace = (matrix: Matrix): number[] | undefined => {
  const rref = toRref(matrix)
  const basis = buildNullSpaceBasis(rref)

  if (basis.length === 0) {
    return undefined
  }

  for (const solution of basis) {
    const coefficients = tryIntegerCoefficients(solution)
    if (coefficients) {
      return coefficients
    }
  }

  return searchBasisCombinations({
    basis,
    index: 0,
    weights: Array.from({ length: basis.length }, () => 1),
  })
}
