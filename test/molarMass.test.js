import { describe, expect, test } from 'bun:test'
import { calcMolarMass } from '../utils/molarMass.ts'

describe('calcMolarMass', () => {
  test('calculates water molar mass', () => {
    const result = calcMolarMass('H2O')

    expect(result.error).toBeUndefined()
    expect(result.total).toBeCloseTo(18.015, 2)
    expect(result.breakdown).toHaveLength(2)
  })

  test('returns error for unknown element', () => {
    const result = calcMolarMass('Xy2')

    expect(result.error).toContain('Unknown element')
  })
})
