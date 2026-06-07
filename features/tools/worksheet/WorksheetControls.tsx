import type { WorksheetDifficulty, WorksheetReactionType } from '@/data/tools/worksheet'
import { View } from 'react-native'
import { WorksheetAnswerKeyToggle } from './WorksheetAnswerKeyToggle'
import { WorksheetDifficultySection } from './WorksheetDifficultySection'
import { WorksheetQuestionCountSection } from './WorksheetQuestionCountSection'
import { WorksheetReactionTypeSection } from './WorksheetReactionTypeSection'

export const WorksheetControls = ({
  difficulty,
  includeAnswerKey,
  questionCount,
  types,
  onSetDifficulty,
  onSetIncludeAnswerKey,
  onSetQuestionCount,
  onToggleType,
  t,
}: {
  difficulty: WorksheetDifficulty
  includeAnswerKey: boolean
  questionCount: number
  types: WorksheetReactionType[]
  onSetDifficulty: (value: WorksheetDifficulty) => void
  onSetIncludeAnswerKey: (value: boolean) => void
  onSetQuestionCount: (value: number) => void
  onToggleType: (value: WorksheetReactionType) => void
  t: (key: string) => string
}) => (
  <View className="gap-5">
    <WorksheetQuestionCountSection
      onSetQuestionCount={onSetQuestionCount}
      questionCount={questionCount}
      title={t('worksheet.questionCount')}
    />
    <WorksheetReactionTypeSection
      onToggleType={onToggleType}
      t={t}
      title={t('worksheet.reactionTypes')}
      types={types}
    />
    <WorksheetDifficultySection
      difficulty={difficulty}
      onSetDifficulty={onSetDifficulty}
      t={t}
      title={t('worksheet.difficulty')}
    />
    <WorksheetAnswerKeyToggle
      includeAnswerKey={includeAnswerKey}
      label={t('worksheet.includeAnswerKey')}
      onSetIncludeAnswerKey={onSetIncludeAnswerKey}
    />
  </View>
)
