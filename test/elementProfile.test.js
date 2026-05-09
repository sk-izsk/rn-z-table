import { describe, expect, test } from 'bun:test'
import { elementsBySymbol } from '../data/elements/elements.ts'
import { toElementProfile } from '../utils/elementProfile.ts'

describe('toElementProfile', () => {
  test('builds chlorine profile with localized overrides', () => {
    const chlorine = elementsBySymbol.Cl
    const profile = toElementProfile(chlorine, {
      name: 'Chlorine',
      ions: 'Cl-',
      history: {
        discoveryYear: '1774',
        discoveredBy: 'Carl Wilhelm Scheele',
        namedBy: 'Humphry Davy',
      },
      uses: ['Bleach'],
      hazards: ['Toxic gas'],
      stse: ['Water treatment'],
    })

    expect(profile.symbol).toBe('Cl')
    expect(profile.level1.type).toBe('Halogen')
    expect(profile.level2.protons).toBe(17)
    expect(profile.level3.electronic.configuration).toContain('3p')
    expect(profile.level4.history.discoveryYear).toBe('1774')
  })

  test('falls back for heavy elements', () => {
    const rutherfordium = elementsBySymbol.Rf
    const profile = toElementProfile(rutherfordium)

    expect(profile.symbol).toBe('Rf')
    expect(profile.level1.type.length).toBeGreaterThan(0)
  })
})
