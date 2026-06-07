import type { WorksheetDifficulty, WorksheetReactionType } from '@/data/tools/worksheet'

export const QUESTION_COUNTS = [5, 10, 20, 30, 50] as const

export const REACTION_OPTIONS: { type: WorksheetReactionType; labelKey: string }[] = [
  { type: 'synthesis', labelKey: 'worksheet.types.synthesis' },
  { type: 'decomposition', labelKey: 'worksheet.types.decomposition' },
  { type: 'singleReplacement', labelKey: 'worksheet.types.singleReplacement' },
  { type: 'doubleReplacement', labelKey: 'worksheet.types.doubleReplacement' },
  { type: 'combustion', labelKey: 'worksheet.types.combustion' },
]

export const DIFFICULTY_OPTIONS: WorksheetDifficulty[] = ['easy', 'medium', 'hard']
