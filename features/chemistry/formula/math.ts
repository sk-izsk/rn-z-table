export const gcd = (a: number, b: number): number => {
  const x = Math.abs(Math.trunc(a))
  const y = Math.abs(Math.trunc(b))

  return y === 0 ? x : gcd(y, x % y)
}

export const lcm = (a: number, b: number): number => {
  if (a === 0 || b === 0) {
    return 0
  }

  return Math.abs(a * b) / gcd(a, b)
}
