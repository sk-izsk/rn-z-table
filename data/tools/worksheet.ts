export type WorksheetReactionType =
  | 'synthesis'
  | 'decomposition'
  | 'singleReplacement'
  | 'doubleReplacement'
  | 'combustion'

export type WorksheetDifficulty = 'easy' | 'medium' | 'hard'

export type WorksheetEquation = {
  id: string
  type: WorksheetReactionType
  difficulty: WorksheetDifficulty
  prompt: string
  answer: string
}

export const WORKSHEET_EQUATIONS: WorksheetEquation[] = [
  {
    id: 'syn_1',
    type: 'synthesis',
    difficulty: 'easy',
    prompt: 'H2 + O2 -> H2O',
    answer: '2H2 + O2 -> 2H2O',
  },
  {
    id: 'syn_2',
    type: 'synthesis',
    difficulty: 'easy',
    prompt: 'N2 + H2 -> NH3',
    answer: 'N2 + 3H2 -> 2NH3',
  },
  {
    id: 'syn_3',
    type: 'synthesis',
    difficulty: 'medium',
    prompt: 'Fe + O2 -> Fe2O3',
    answer: '4Fe + 3O2 -> 2Fe2O3',
  },
  {
    id: 'syn_4',
    type: 'synthesis',
    difficulty: 'medium',
    prompt: 'Al + O2 -> Al2O3',
    answer: '4Al + 3O2 -> 2Al2O3',
  },
  {
    id: 'decomp_1',
    type: 'decomposition',
    difficulty: 'easy',
    prompt: 'H2O2 -> H2O + O2',
    answer: '2H2O2 -> 2H2O + O2',
  },
  {
    id: 'decomp_2',
    type: 'decomposition',
    difficulty: 'easy',
    prompt: 'KClO3 -> KCl + O2',
    answer: '2KClO3 -> 2KCl + 3O2',
  },
  {
    id: 'decomp_3',
    type: 'decomposition',
    difficulty: 'medium',
    prompt: 'CaCO3 -> CaO + CO2',
    answer: 'CaCO3 -> CaO + CO2',
  },
  {
    id: 'decomp_4',
    type: 'decomposition',
    difficulty: 'medium',
    prompt: 'Na2CO3 -> Na2O + CO2',
    answer: 'Na2CO3 -> Na2O + CO2',
  },
  {
    id: 'single_1',
    type: 'singleReplacement',
    difficulty: 'easy',
    prompt: 'Zn + HCl -> ZnCl2 + H2',
    answer: 'Zn + 2HCl -> ZnCl2 + H2',
  },
  {
    id: 'single_2',
    type: 'singleReplacement',
    difficulty: 'medium',
    prompt: 'Fe + CuSO4 -> FeSO4 + Cu',
    answer: 'Fe + CuSO4 -> FeSO4 + Cu',
  },
  {
    id: 'single_3',
    type: 'singleReplacement',
    difficulty: 'medium',
    prompt: 'Cl2 + KI -> KCl + I2',
    answer: 'Cl2 + 2KI -> 2KCl + I2',
  },
  {
    id: 'single_4',
    type: 'singleReplacement',
    difficulty: 'hard',
    prompt: 'Al + Fe2O3 -> Al2O3 + Fe',
    answer: '2Al + Fe2O3 -> Al2O3 + 2Fe',
  },
  {
    id: 'double_1',
    type: 'doubleReplacement',
    difficulty: 'easy',
    prompt: 'AgNO3 + NaCl -> AgCl + NaNO3',
    answer: 'AgNO3 + NaCl -> AgCl + NaNO3',
  },
  {
    id: 'double_2',
    type: 'doubleReplacement',
    difficulty: 'medium',
    prompt: 'BaCl2 + Na2SO4 -> BaSO4 + NaCl',
    answer: 'BaCl2 + Na2SO4 -> BaSO4 + 2NaCl',
  },
  {
    id: 'double_3',
    type: 'doubleReplacement',
    difficulty: 'medium',
    prompt: 'Pb(NO3)2 + KI -> PbI2 + KNO3',
    answer: 'Pb(NO3)2 + 2KI -> PbI2 + 2KNO3',
  },
  {
    id: 'double_4',
    type: 'doubleReplacement',
    difficulty: 'hard',
    prompt: 'Al2(SO4)3 + Ca(OH)2 -> Al(OH)3 + CaSO4',
    answer: 'Al2(SO4)3 + 3Ca(OH)2 -> 2Al(OH)3 + 3CaSO4',
  },
  {
    id: 'comb_1',
    type: 'combustion',
    difficulty: 'easy',
    prompt: 'CH4 + O2 -> CO2 + H2O',
    answer: 'CH4 + 2O2 -> CO2 + 2H2O',
  },
  {
    id: 'comb_2',
    type: 'combustion',
    difficulty: 'medium',
    prompt: 'C2H6 + O2 -> CO2 + H2O',
    answer: '2C2H6 + 7O2 -> 4CO2 + 6H2O',
  },
  {
    id: 'comb_3',
    type: 'combustion',
    difficulty: 'medium',
    prompt: 'C3H8 + O2 -> CO2 + H2O',
    answer: 'C3H8 + 5O2 -> 3CO2 + 4H2O',
  },
  {
    id: 'comb_4',
    type: 'combustion',
    difficulty: 'hard',
    prompt: 'C4H10 + O2 -> CO2 + H2O',
    answer: '2C4H10 + 13O2 -> 8CO2 + 10H2O',
  },
]

const DIFFICULTY_ORDER: WorksheetDifficulty[] = ['easy', 'medium', 'hard']

const difficultyAllowed = (
  candidate: WorksheetDifficulty,
  selected: WorksheetDifficulty,
): boolean => DIFFICULTY_ORDER.indexOf(candidate) <= DIFFICULTY_ORDER.indexOf(selected)

export const buildWorksheetSet = ({
  count,
  difficulty,
  types,
}: {
  count: number
  difficulty: WorksheetDifficulty
  types: WorksheetReactionType[]
}): WorksheetEquation[] => {
  const filtered = WORKSHEET_EQUATIONS.filter(
    (equation) =>
      types.includes(equation.type) && difficultyAllowed(equation.difficulty, difficulty),
  )

  if (filtered.length === 0) {
    return []
  }

  return Array.from({ length: count }, (_, index) => filtered[index % filtered.length])
}
