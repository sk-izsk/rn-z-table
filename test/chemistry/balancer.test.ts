import { describe, expect, test } from 'bun:test'
import { balanceEquation } from '@/features/chemistry/balancer'

describe('balanceEquation', () => {
  test('balances standard equations', () => {
    expect(balanceEquation('Fe + O2 -> Fe2O3')).toEqual({
      balanced: '4Fe + 3O2 → 2Fe2O3',
      coefficients: [4, 3, 2],
    })
  })

  test('supports polyatomic groups', () => {
    expect(balanceEquation('Al2(SO4)3 + Ca(OH)2 -> Al(OH)3 + CaSO4')).toEqual({
      balanced: 'Al2(SO4)3 + 3Ca(OH)2 → 2Al(OH)3 + 3CaSO4',
      coefficients: [1, 3, 2, 3],
    })
  })

  test('rejects invalid separators', () => {
    expect(balanceEquation('H2 + O2')).toEqual({
      error: 'Use -> to separate reactants and products.',
    })
  })
})
