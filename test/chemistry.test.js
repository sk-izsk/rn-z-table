import { describe, expect, test } from 'bun:test'
import { gcd, lcm, parseChemicalFormula } from '../utils/chemistry.ts'

describe('parseChemicalFormula', () => {
  test('parses simple formula counts', () => {
    expect(parseChemicalFormula('H2O')).toEqual({
      ok: true,
      counts: { H: 2, O: 1 },
    })
  })

  test('parses nested group counts', () => {
    expect(parseChemicalFormula('Al2(SO4)3')).toEqual({
      ok: true,
      counts: { Al: 2, S: 3, O: 12 },
    })
  })

  test('rejects invalid tokens', () => {
    const result = parseChemicalFormula('Na@Cl')
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.error).toContain('Invalid token')
    }
  })
})

describe('number helpers', () => {
  test('computes gcd', () => {
    expect(gcd(24, 18)).toBe(6)
  })

  test('computes lcm', () => {
    expect(lcm(12, 18)).toBe(36)
  })
})
