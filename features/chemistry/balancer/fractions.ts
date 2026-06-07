export type Fraction = {
  numerator: bigint
  denominator: bigint
}

export const zero = (): Fraction => ({ numerator: 0n, denominator: 1n })

export const one = (): Fraction => ({ numerator: 1n, denominator: 1n })

export const gcdBigInt = (a: bigint, b: bigint): bigint => {
  const x = a < 0n ? -a : a
  const y = b < 0n ? -b : b

  return y === 0n ? x : gcdBigInt(y, x % y)
}

export const lcmBigInt = (a: bigint, b: bigint): bigint => {
  if (a === 0n || b === 0n) {
    return 0n
  }

  return (a / gcdBigInt(a, b)) * b
}

export const fraction = (
  numerator: number | bigint,
  denominator: number | bigint = 1n,
): Fraction => {
  let nextNumerator = BigInt(numerator)
  let nextDenominator = BigInt(denominator)

  if (nextDenominator === 0n) {
    throw new Error('Fraction denominator cannot be zero.')
  }

  if (nextDenominator < 0n) {
    nextNumerator = -nextNumerator
    nextDenominator = -nextDenominator
  }

  const divisor = gcdBigInt(nextNumerator, nextDenominator)
  return {
    numerator: nextNumerator / divisor,
    denominator: nextDenominator / divisor,
  }
}

export const isZero = (value: Fraction): boolean => value.numerator === 0n

export const add = (a: Fraction, b: Fraction): Fraction =>
  fraction(a.numerator * b.denominator + b.numerator * a.denominator, a.denominator * b.denominator)

export const subtract = (a: Fraction, b: Fraction): Fraction =>
  fraction(a.numerator * b.denominator - b.numerator * a.denominator, a.denominator * b.denominator)

export const multiply = (a: Fraction, b: Fraction): Fraction =>
  fraction(a.numerator * b.numerator, a.denominator * b.denominator)

export const divide = (a: Fraction, b: Fraction): Fraction =>
  fraction(a.numerator * b.denominator, a.denominator * b.numerator)

export const negate = (value: Fraction): Fraction => fraction(-value.numerator, value.denominator)
