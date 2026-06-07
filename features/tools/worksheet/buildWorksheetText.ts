import type { WorksheetEquation } from '@/data/tools/worksheet'

export const buildWorksheetText = ({
  answerKeyLabel,
  exportTitle,
  includeAnswerKey,
  items,
}: {
  answerKeyLabel: string
  exportTitle: string
  includeAnswerKey: boolean
  items: WorksheetEquation[]
}) => {
  const lines = [exportTitle, '', ...items.map((item, index) => `${index + 1}. ${item.prompt}`)]

  if (includeAnswerKey) {
    lines.push('', answerKeyLabel, '')

    for (const [index, item] of items.entries()) {
      lines.push(`${index + 1}. ${item.answer}`)
    }
  }

  return lines.join('\n')
}
