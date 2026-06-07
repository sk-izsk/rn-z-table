import { describe, expect, test } from 'bun:test'
import { parseChemicalFormula } from '@/features/chemistry/formula'

describe('parseChemicalFormula', () => {
  test('parses grouped formulas with subscripts', () => {
    expect(parseChemicalFormula('Al2(SO4)3')).toEqual({
      ok: true,
      counts: {
        Al: 2,
        S: 3,
        O: 12,
      },
    })
  })

  test('normalizes unicode subscripts', () => {
    expect(parseChemicalFormula('H₂O')).toEqual({
      ok: true,
      counts: {
        H: 2,
        O: 1,
      },
    })
  })

  test('returns an error for malformed input', () => {
    expect(parseChemicalFormula('Ca(OH')).toEqual({
      ok: false,
      error: 'Missing ")" in formula.',
    })
  })
})
