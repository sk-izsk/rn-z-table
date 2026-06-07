import type { Element } from '@/data/elements/elements'

export const VALENCE_BY_GROUP: Record<number, string> = {
  1: '1',
  2: '2',
  13: '3',
  14: '4',
  15: '5',
  16: '6',
  17: '7',
  18: '8',
}

export const COMMON_OXIDATION_BY_CATEGORY: Record<string, string[]> = {
  alkali: ['+1'],
  alkaline: ['+2'],
  halogen: ['-1', '+1', '+5', '+7'],
  noble: ['0'],
  nonmetal: ['-3', '-2', '-1', '+4', '+6'],
  transition: ['+2', '+3'],
  post: ['+1', '+3'],
  metalloid: ['+3', '+4'],
  lanthanide: ['+3'],
  actinide: ['+3', '+4', '+5'],
}

export const TYPE_BY_CATEGORY: Record<Element['cat'], string> = {
  alkali: 'Alkali Metal',
  alkaline: 'Alkaline Earth Metal',
  transition: 'Transition Metal',
  post: 'Post-transition Metal',
  metalloid: 'Metalloid',
  nonmetal: 'Nonmetal',
  halogen: 'Halogen',
  noble: 'Noble Gas',
  lanthanide: 'Lanthanide',
  actinide: 'Actinide',
}

type Level1Overrides = {
  type?: string
  phaseAtSTP?: Element['phase']
}

export const LEVEL1_OVERRIDES: Record<number, Level1Overrides> = {
  104: { type: 'Unknown', phaseAtSTP: 'Unknown' },
  105: { type: 'Unknown', phaseAtSTP: 'Unknown' },
  106: { type: 'Unknown', phaseAtSTP: 'Unknown' },
  107: { type: 'Unknown', phaseAtSTP: 'Unknown' },
  108: { type: 'Unknown', phaseAtSTP: 'Unknown' },
  109: { type: 'Unknown', phaseAtSTP: 'Unknown' },
  110: { type: 'Unknown', phaseAtSTP: 'Unknown' },
  111: { type: 'Unknown', phaseAtSTP: 'Unknown' },
}
