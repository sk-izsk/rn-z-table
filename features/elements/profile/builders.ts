import { ELEMENT_L3_DATA } from '@/data/elements/element-l3-data'
import type { Element } from '@/data/elements/elements'
import type { ElementLocaleRecord } from '@/i18n/types'
import type { ElementProfile } from '@/types/elementProfile'
import {
  COMMON_OXIDATION_BY_CATEGORY,
  LEVEL1_OVERRIDES,
  TYPE_BY_CATEGORY,
  VALENCE_BY_GROUP,
} from './constants'
import { displayGroup, formatMass, formatNullable, inferBlock, pickCommonIons } from './formatters'
import { buildIsotopes } from './isotopes'

export const toElementLevel4 = (
  el: Element,
  locale?: ElementLocaleRecord,
): ElementProfile['level4'] => ({
  history: {
    discoveryYear:
      locale?.history?.discoveryYear ?? (el.discovered ? String(el.discovered) : 'Unknown'),
    discoveredBy: locale?.history?.discoveredBy ?? el.discoveredBy ?? 'Unknown',
    namedBy: locale?.history?.namedBy ?? 'Unknown',
  },
  stseContext: locale?.stse ?? ['Chemistry education context'],
  uses: locale?.uses ?? ['Educational reference'],
  hazards: locale?.hazards ?? ['Refer to standard material safety data'],
})

const buildLevel1 = ({
  element,
  group,
  locale,
  phaseAtSTP,
  type,
}: {
  element: Element
  group: number | null
  locale?: ElementLocaleRecord
  phaseAtSTP: Element['phase']
  type: string
}): ElementProfile['level1'] => ({
  type,
  groupPeriod: `${group ?? '-'} / ${element.period}`,
  phaseAtSTP,
  valenceElectrons: group ? (VALENCE_BY_GROUP[group] ?? 'Variable') : 'Variable',
  electronBlock: inferBlock(element.config),
  commonIons: pickCommonIons(element, locale),
})

const buildLevel2 = (element: Element): ElementProfile['level2'] => ({
  mass: {
    highSchool: formatMass(element.mass),
    universityConventional: formatMass(element.mass),
  },
  protons: element.n,
  electronsNeutral: element.n,
  isotopes: buildIsotopes(element),
})

const buildLevel3 = (element: Element): ElementProfile['level3'] => {
  const level3 = ELEMENT_L3_DATA[element.n]
  const electronegativity =
    level3?.physical.electronegativity ?? (element.en === null ? 'N/A' : String(element.en))

  return {
    electronic: {
      configuration: element.config,
      oxidationStates: {
        common: level3?.oxidationStates.common ?? COMMON_OXIDATION_BY_CATEGORY[element.cat] ?? [],
        possible: level3?.oxidationStates.possible ?? [],
      },
    },
    physical: {
      electronegativity,
      firstIonization: level3?.physical.firstIonization ?? 'N/A',
      density: level3?.physical.density ?? formatNullable(element.density, ' g/cm3'),
      meltingPoint: level3?.physical.meltingPoint ?? formatNullable(element.mp, ' degC'),
      boilingPoint: level3?.physical.boilingPoint ?? formatNullable(element.bp, ' degC'),
      electronAffinity: level3?.physical.electronAffinity ?? 'N/A',
      atomicRadius: level3?.physical.atomicRadius ?? 'N/A',
      specificHeat: level3?.physical.specificHeat ?? 'N/A',
    },
  }
}

export const toElementProfile = (
  element: Element,
  locale?: ElementLocaleRecord,
): ElementProfile => {
  const group = displayGroup(element)
  const level1Override = LEVEL1_OVERRIDES[element.n]
  const phaseAtSTP = level1Override?.phaseAtSTP ?? element.phase
  const type = level1Override?.type ?? TYPE_BY_CATEGORY[element.cat]

  const profile = {
    id: element.n,
    symbol: element.sym,
    name: locale?.name ?? element.name,
    category: element.cat,
    period: element.period,
    group,
    phaseAtSTP,
    electronConfiguration: element.config,
    raw: element,
    level1: buildLevel1({ element, group, locale, phaseAtSTP, type }),
    level2: buildLevel2(element),
    level3: buildLevel3(element),
  } as Omit<ElementProfile, 'level4'> as ElementProfile

  Object.defineProperty(profile, 'level4', {
    configurable: true,
    enumerable: true,
    get: () => toElementLevel4(element, locale),
  })

  return profile
}
