import { describe, expect, test } from 'bun:test'
import { calcMolarMass } from '@/features/chemistry/molar-mass'

describe('calcMolarMass', () => {
  test('computes molar mass and breakdown', () => {
    const result = calcMolarMass('H2O')

    expect(result.error).toBeUndefined()
    expect(result.total).toBeCloseTo(18.016, 3)
    expect(result.breakdown).toEqual([
      expect.objectContaining({ element: 'H', count: 2 }),
      expect.objectContaining({ element: 'O', count: 1 }),
    ])
  })

  test('returns unknown element errors', () => {
    expect(calcMolarMass('Xy2').error).toBe('Unknown element "Xy".')
  })
})
