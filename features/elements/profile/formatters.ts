import type { Element } from '@/data/elements/elements'
import type { ElementLocaleRecord } from '@/i18n/types'
import { COMMON_OXIDATION_BY_CATEGORY } from './constants'

export const formatMass = (mass: number) => mass.toFixed(3).replace(/\.000$/u, '')

export const formatNullable = (value: number | null, unit: string) => {
  if (value === null) {
    return 'N/A'
  }

  return `${value}${unit}`
}

export const inferBlock = (config: string): string => {
  const norm = config.replace(
    /[⁰¹²³⁴⁵⁶⁷⁸⁹]/gu,
    (c) =>
      ({
        '⁰': '0',
        '¹': '1',
        '²': '2',
        '³': '3',
        '⁴': '4',
        '⁵': '5',
        '⁶': '6',
        '⁷': '7',
        '⁸': '8',
        '⁹': '9',
      })[c] ?? c,
  )

  if (/\df\d/u.test(norm)) {
    return 'f'
  }
  if (/\dd\d/u.test(norm)) {
    return 'd'
  }
  if (/\dp\d/u.test(norm)) {
    return 'p'
  }

  return 's'
}

const inferIons = (el: Element): string => {
  const common = COMMON_OXIDATION_BY_CATEGORY[el.cat] ?? []
  if (common.length === 0) {
    return 'No common ions'
  }

  return common.map((state) => `${el.sym}${state}`).join(', ')
}

export const displayGroup = (el: Element): number | null => {
  if (el.group !== null) {
    return el.group
  }
  if (el.cat === 'lanthanide' || el.cat === 'actinide') {
    return 3
  }

  return null
}

export const pickCommonIons = (el: Element, locale?: ElementLocaleRecord): string => {
  const localeIons = locale?.ions?.trim()
  const hasLocaleIons = Boolean(localeIons)
  const localeSuppressesIons = localeIons === 'No common ions'

  if (!hasLocaleIons || localeSuppressesIons) {
    return inferIons(el)
  }

  return localeIons ?? inferIons(el)
}
