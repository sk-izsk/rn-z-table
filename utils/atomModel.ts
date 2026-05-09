import type { Element } from '@/data/elements/elements'

export const SHELL_NAMES = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'] as const

const SUPERSCRIPT_DIGITS: Record<string, string> = {
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
}

const NOBLE_GAS_SHELLS: Record<string, number[]> = {
  '[He]': [2],
  '[Ne]': [2, 8],
  '[Ar]': [2, 8, 8],
  '[Kr]': [2, 8, 18, 8],
  '[Xe]': [2, 8, 18, 18, 8],
  '[Rn]': [2, 8, 18, 32, 18, 8],
}

export const SHELL_COLORS = [
  '#f4bd69',
  '#e1ca63',
  '#d6b84d',
  '#a6d9af',
  '#8ebbef',
  '#bcb2ee',
  '#f3abc1',
] as const

export const ELECTRON_COLORS = [
  '#cf7b27',
  '#c49d16',
  '#bf8a16',
  '#138d68',
  '#256cc7',
  '#6552bf',
  '#cb5c95',
] as const

const toPlainDigits = (value: string): string =>
  value
    .split('')
    .map((char) => SUPERSCRIPT_DIGITS[char] ?? char)
    .join('')

export const configToShells = (config: string): number[] => {
  let base: number[] = []
  let rest = config

  for (const [symbol, shells] of Object.entries(NOBLE_GAS_SHELLS)) {
    if (config.startsWith(symbol)) {
      base = [...shells]
      rest = config.slice(symbol.length).trim()
      break
    }
  }

  const counts = [...base]
  const orbitalPattern = /(\d)[spdf]([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/gu
  let match: RegExpExecArray | null

  while ((match = orbitalPattern.exec(rest)) !== null) {
    const shell = Number(match[1])
    const electrons = Number(toPlainDigits(match[2]))

    while (counts.length < shell) {
      counts.push(0)
    }

    counts[shell - 1] += electrons
  }

  while (counts.length > 0 && counts[counts.length - 1] === 0) {
    counts.pop()
  }

  return counts.length > 0 ? counts : [1]
}

export const getNeutronCount = (mass: number, atomicNumber: number): number =>
  Math.max(0, Math.round(mass) - atomicNumber)

export type AtomRenderModel = {
  element: Element
  shells: number[]
  neutronCount: number
  shellRadii: number[]
}

export type NucleusParticle = {
  x: number
  y: number
  type: 'proton' | 'neutron'
}

export const buildShellRadii = (shellCount: number): number[] =>
  Array.from({ length: shellCount }, (_, index) => 52 + index * 34)

export const buildAtomRenderModel = (
  element: Element,
  neutronOverride?: number,
): AtomRenderModel => {
  const shells = configToShells(element.config)

  return {
    element,
    shells,
    neutronCount: neutronOverride ?? getNeutronCount(element.mass, element.n),
    shellRadii: buildShellRadii(shells.length),
  }
}

export const buildElectronAngles = (count: number): number[] => {
  if (count <= 0) {
    return []
  }

  return Array.from({ length: count }, (_, index) => (index / count) * Math.PI * 2)
}

export const buildNucleusParticles = (
  protonCount: number,
  neutronCount: number,
): NucleusParticle[] => {
  const total = Math.min(56, protonCount + neutronCount)

  if (total <= 0) {
    return []
  }

  const protonSlots = Math.round((protonCount / Math.max(protonCount + neutronCount, 1)) * total)

  return Array.from({ length: total }, (_, index) => {
    const angle = index * 2.399963229728653
    const radius = 4 + Math.sqrt(index) * 4.2
    const mixIndex = (index * 5) % total

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      type: mixIndex < protonSlots ? 'proton' : 'neutron',
    }
  })
}
