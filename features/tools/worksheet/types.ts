import type {
  WorksheetDifficulty,
  WorksheetEquation,
  WorksheetReactionType,
} from '@/data/tools/worksheet'

export type WorksheetBuilderContentProps = {
  difficulty: WorksheetDifficulty
  includeAnswerKey: boolean
  items: WorksheetEquation[]
  questionCount: number
  setDifficulty: (value: WorksheetDifficulty) => void
  setIncludeAnswerKey: (value: boolean) => void
  setQuestionCount: (value: number) => void
  shareLabel: string
  t: (key: string) => string
  title: string
  toggleType: (value: WorksheetReactionType) => void
  types: WorksheetReactionType[]
  worksheetText: string
}
