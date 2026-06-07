import { useAppTranslation } from '@/i18n/localize'
import { useMemo } from 'react'
import { WorksheetBuilderContent } from './WorksheetBuilderContent'
import { buildWorksheetText } from './worksheet/buildWorksheetText'
import { useWorksheetBuilder } from './worksheet/useWorksheetBuilder'

export const WorksheetBuilderFeature = () => {
  const { t } = useAppTranslation()
  const {
    difficulty,
    includeAnswerKey,
    items,
    questionCount,
    setDifficulty,
    setIncludeAnswerKey,
    setQuestionCount,
    toggleType,
    types,
  } = useWorksheetBuilder()

  const worksheetText = useMemo(
    () =>
      buildWorksheetText({
        answerKeyLabel: t('worksheet.answerKey'),
        exportTitle: t('worksheet.exportTitle'),
        includeAnswerKey,
        items,
      }),
    [includeAnswerKey, items, t],
  )

  return (
    <WorksheetBuilderContent
      difficulty={difficulty}
      includeAnswerKey={includeAnswerKey}
      items={items}
      questionCount={questionCount}
      setDifficulty={setDifficulty}
      setIncludeAnswerKey={setIncludeAnswerKey}
      setQuestionCount={setQuestionCount}
      shareLabel={t('worksheet.shareWorksheet')}
      t={t}
      title={t('worksheet.exportTitle')}
      toggleType={toggleType}
      types={types}
      worksheetText={worksheetText}
    />
  )
}
