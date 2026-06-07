import { describe, expect, test } from 'bun:test'
import { buildWorksheetSet } from '@/data/tools/worksheet'
import { buildWorksheetText } from '@/features/tools/worksheet/buildWorksheetText'

describe('worksheet generation', () => {
  test('filters by type and difficulty', () => {
    const items = buildWorksheetSet({
      count: 3,
      difficulty: 'easy',
      types: ['combustion'],
    })

    expect(items).toHaveLength(3)
    expect(items.every((item) => item.type === 'combustion')).toBe(true)
    expect(items.every((item) => item.difficulty === 'easy')).toBe(true)
  })

  test('builds export text with answer key', () => {
    const items = buildWorksheetSet({
      count: 2,
      difficulty: 'easy',
      types: ['synthesis'],
    })

    const text = buildWorksheetText({
      answerKeyLabel: 'Answer Key',
      exportTitle: 'Worksheet',
      includeAnswerKey: true,
      items,
    })

    expect(text).toContain('Worksheet')
    expect(text).toContain('Answer Key')
    expect(text).toContain('1. H2 + O2 -> H2O')
  })
})
