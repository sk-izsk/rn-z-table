import { describe, expect, test } from 'bun:test'
import { balanceEquation } from '../utils/balancer.ts'

describe('balanceEquation', () => {
  test('balances water formation', () => {
    const result = balanceEquation('H2 + O2 -> H2O')

    expect(result.error).toBeUndefined()
    expect(result.balanced).toBe('2H2 + O2 → 2H2O')
    expect(result.coefficients).toEqual([2, 1, 2])
  })

  test('returns validation error for malformed input', () => {
    const result = balanceEquation('H2 + O2 H2O')

    expect(result.error).toBe('Use -> to separate reactants and products.')
  })
})
