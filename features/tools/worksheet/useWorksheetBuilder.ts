import {
  buildWorksheetSet,
  type WorksheetDifficulty,
  type WorksheetReactionType,
} from '@/data/tools/worksheet'
import { useMemo, useState } from 'react'

const DEFAULT_TYPES: WorksheetReactionType[] = ['synthesis', 'decomposition']

export const useWorksheetBuilder = () => {
  const [questionCount, setQuestionCount] = useState<number>(10)
  const [difficulty, setDifficulty] = useState<WorksheetDifficulty>('medium')
  const [includeAnswerKey, setIncludeAnswerKey] = useState(true)
  const [types, setTypes] = useState<WorksheetReactionType[]>(DEFAULT_TYPES)

  const items = useMemo(
    () => buildWorksheetSet({ count: questionCount, difficulty, types }),
    [difficulty, questionCount, types],
  )

  const toggleType = (type: WorksheetReactionType) => {
    setTypes((current) =>
      current.includes(type) ? current.filter((item) => item !== type) : [...current, type],
    )
  }

  return {
    questionCount,
    setQuestionCount,
    difficulty,
    setDifficulty,
    includeAnswerKey,
    setIncludeAnswerKey,
    types,
    toggleType,
    items,
  }
}
