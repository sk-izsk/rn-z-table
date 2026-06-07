import { WorksheetConfiguratorCard, WorksheetPreviewCard } from './WorksheetCards'
import { WorksheetBuilderContentProps } from './worksheet/types'

export const WorksheetBuilderContent = ({
  difficulty,
  includeAnswerKey,
  items,
  questionCount,
  setDifficulty,
  setIncludeAnswerKey,
  setQuestionCount,
  shareLabel,
  toggleType,
  t,
  title,
  types,
  worksheetText,
}: WorksheetBuilderContentProps) => (
  <>
    <WorksheetConfiguratorCard
      difficulty={difficulty}
      includeAnswerKey={includeAnswerKey}
      questionCount={questionCount}
      setDifficulty={setDifficulty}
      setIncludeAnswerKey={setIncludeAnswerKey}
      setQuestionCount={setQuestionCount}
      t={t}
      toggleType={toggleType}
      types={types}
    />
    <WorksheetPreviewCard
      items={items}
      shareLabel={shareLabel}
      t={t}
      title={title}
      types={types}
      worksheetText={worksheetText}
    />
  </>
)
