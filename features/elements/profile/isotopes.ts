import {
  ISOTOPE_NOTES,
  KEY_RADIOACTIVE_MASS_NUMBERS,
  NOTABLE_RADIOACTIVE_MASS_NUMBERS,
  STABLE_MASS_NUMBERS,
} from '@/data/elements/isotopes'
import type { Element } from '@/data/elements/elements'
import type { ElementProfile } from '@/types/elementProfile'

const createIsotopeRecord = ({
  element,
  massNumber,
  note,
  percent,
}: {
  element: Element
  massNumber: number
  note?: string
  percent: string
}) => {
  const neutronCount = massNumber - element.n

  return {
    name: `${element.sym}-${massNumber}`,
    massNumber,
    neutronCount,
    neutron: `${neutronCount}n`,
    percent,
    note,
  }
}

const createFallbackIsotope = (element: Element) => {
  const massNumber = Math.round(element.mass)
  const neutronCount = Math.max(0, massNumber - element.n)

  return {
    name: `${element.sym}-${massNumber}`,
    massNumber,
    neutronCount,
    neutron: `${neutronCount}n`,
    percent: 'Radioactive',
    note: undefined as string | undefined,
  }
}

export const buildIsotopes = (element: Element): ElementProfile['level2']['isotopes'] => {
  const stableMasses = STABLE_MASS_NUMBERS[element.n] ?? []
  const hasStableMasses = stableMasses.length > 0
  const masses = hasStableMasses ? stableMasses : (KEY_RADIOACTIVE_MASS_NUMBERS[element.n] ?? [])

  if (masses.length === 0) {
    return [createFallbackIsotope(element)]
  }

  const stableEntries = masses.map((massNumber) =>
    createIsotopeRecord({
      element,
      massNumber,
      note: ISOTOPE_NOTES[`${element.sym}-${massNumber}`] as string | undefined,
      percent: hasStableMasses ? 'Stable' : 'Radioactive/Trace',
    }),
  )

  if (!hasStableMasses) {
    return stableEntries
  }

  const notableRadioactive = (NOTABLE_RADIOACTIVE_MASS_NUMBERS[element.n] ?? []).map((massNumber) =>
    createIsotopeRecord({
      element,
      massNumber,
      note: ISOTOPE_NOTES[`${element.sym}-${massNumber}`] as string | undefined,
      percent: 'Radioactive',
    }),
  )

  return [...stableEntries, ...notableRadioactive]
}
