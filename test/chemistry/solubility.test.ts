import { describe, expect, test } from 'bun:test'
import { SOLUBILITY_DATA } from '@/data/tools/solubility'
import { CODE_STYLES } from '@/features/tools/solubility/constants'

describe('solubility mappings', () => {
  test('maps lookup results correctly', () => {
    expect(SOLUBILITY_DATA['Ag⁺']['Cl⁻']).toBe('I')
    expect(SOLUBILITY_DATA['Na⁺']['NO₃⁻']).toBe('S')
  })

  test('keeps result labels aligned with codes', () => {
    expect(CODE_STYLES.I.label).toBe('Insoluble')
    expect(CODE_STYLES.Sl.label).toBe('Slightly soluble')
  })
})
