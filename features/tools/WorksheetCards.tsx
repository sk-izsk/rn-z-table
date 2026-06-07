import { ToolCard } from '@/components/tools/ToolCard'
import type {
  WorksheetDifficulty,
  WorksheetEquation,
  WorksheetReactionType,
} from '@/data/tools/worksheet'
import { WorksheetControls } from './worksheet/WorksheetControls'
import { WorksheetPreview } from './worksheet/WorksheetPreview'

export const WorksheetConfiguratorCard = ({
  difficulty,
  includeAnswerKey,
  questionCount,
  setDifficulty,
  setIncludeAnswerKey,
  setQuestionCount,
  t,
  toggleType,
  types,
}: {
  difficulty: WorksheetDifficulty
  includeAnswerKey: boolean
  questionCount: number
  setDifficulty: (value: WorksheetDifficulty) => void
  setIncludeAnswerKey: (value: boolean) => void
  setQuestionCount: (value: number) => void
  t: (key: string) => string
  toggleType: (value: WorksheetReactionType) => void
  types: WorksheetReactionType[]
}) => (
  <ToolCard title={t('worksheet.title')} description={t('worksheet.description')}>
    <WorksheetControls
      difficulty={difficulty}
      includeAnswerKey={includeAnswerKey}
      questionCount={questionCount}
      types={types}
      onSetDifficulty={setDifficulty}
      onSetIncludeAnswerKey={setIncludeAnswerKey}
      onSetQuestionCount={setQuestionCount}
      onToggleType={toggleType}
      t={t}
    />
  </ToolCard>
)

export const WorksheetPreviewCard = ({
  items,
  shareLabel,
  t,
  title,
  types,
  worksheetText,
}: {
  items: WorksheetEquation[]
  shareLabel: string
  t: (key: string) => string
  title: string
  types: WorksheetReactionType[]
  worksheetText: string
}) => (
  <ToolCard title={t('worksheet.previewTitle')} description={t('worksheet.previewDescription')}>
    <WorksheetPreview
      items={items}
      shareLabel={shareLabel}
      title={title}
      types={types}
      worksheetText={worksheetText}
    />
  </ToolCard>
)
