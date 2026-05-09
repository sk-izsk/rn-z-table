import { ActionButton } from '@/components/tools/ActionButton'
import { ToolCard } from '@/components/tools/ToolCard'
import {
  buildWorksheetSet,
  type WorksheetDifficulty,
  type WorksheetReactionType,
} from '@/data/tools/worksheet'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { useAppTranslation } from '@/i18n/localize'
import { useMemo, useState } from 'react'
import { Share, Switch, Text, View } from 'react-native'

const QUESTION_COUNTS = [5, 10, 20, 30, 50] as const

const REACTION_OPTIONS: { type: WorksheetReactionType; labelKey: string }[] = [
  { type: 'synthesis', labelKey: 'worksheet.types.synthesis' },
  { type: 'decomposition', labelKey: 'worksheet.types.decomposition' },
  { type: 'singleReplacement', labelKey: 'worksheet.types.singleReplacement' },
  { type: 'doubleReplacement', labelKey: 'worksheet.types.doubleReplacement' },
  { type: 'combustion', labelKey: 'worksheet.types.combustion' },
]

const DIFFICULTY_OPTIONS: WorksheetDifficulty[] = ['easy', 'medium', 'hard']

export const WorksheetBuilder = () => {
  const { t } = useAppTranslation()
  const { colors } = useAppPalette()
  const [questionCount, setQuestionCount] = useState<number>(10)
  const [difficulty, setDifficulty] = useState<WorksheetDifficulty>('medium')
  const [includeAnswerKey, setIncludeAnswerKey] = useState(true)
  const [types, setTypes] = useState<WorksheetReactionType[]>(['synthesis', 'decomposition'])

  const items = useMemo(
    () => buildWorksheetSet({ count: questionCount, difficulty, types }),
    [difficulty, questionCount, types],
  )

  const worksheetText = useMemo(() => {
    const lines = [
      t('worksheet.exportTitle'),
      '',
      ...items.map((item, index) => `${index + 1}. ${item.prompt}`),
    ]

    if (includeAnswerKey) {
      lines.push('', t('worksheet.answerKey'), '')
      for (const [index, item] of items.entries()) {
        lines.push(`${index + 1}. ${item.answer}`)
      }
    }

    return lines.join('\n')
  }, [includeAnswerKey, items, t])

  return (
    <View className="gap-4">
      <ToolCard title={t('worksheet.title')} description={t('worksheet.description')}>
        <View className="gap-5">
          <View>
            <Text style={{ color: colors.text }} className="mb-3 text-[16px] font-semibold">
              {t('worksheet.questionCount')}
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {QUESTION_COUNTS.map((count) => (
                <ActionButton
                  key={count}
                  label={String(count)}
                  variant={count === questionCount ? 'accent' : 'ghost'}
                  onPress={() => setQuestionCount(count)}
                />
              ))}
            </View>
          </View>

          <View>
            <Text style={{ color: colors.text }} className="mb-3 text-[16px] font-semibold">
              {t('worksheet.reactionTypes')}
            </Text>
            <View className="gap-2">
              {REACTION_OPTIONS.map((option) => {
                const active = types.includes(option.type)
                return (
                  <ActionButton
                    key={option.type}
                    label={t(option.labelKey)}
                    variant={active ? 'accent' : 'ghost'}
                    onPress={() => {
                      setTypes((current) =>
                        current.includes(option.type)
                          ? current.filter((item) => item !== option.type)
                          : [...current, option.type],
                      )
                    }}
                  />
                )
              })}
            </View>
          </View>

          <View>
            <Text style={{ color: colors.text }} className="mb-3 text-[16px] font-semibold">
              {t('worksheet.difficulty')}
            </Text>
            <View className="flex-row gap-2">
              {DIFFICULTY_OPTIONS.map((option) => (
                <ActionButton
                  key={option}
                  label={t(`worksheet.difficultyOptions.${option}`)}
                  variant={option === difficulty ? 'accent' : 'ghost'}
                  onPress={() => setDifficulty(option)}
                />
              ))}
            </View>
          </View>

          <View
            style={{
              borderColor: colors.line,
              backgroundColor: colors.surfaceMuted,
            }}
            className="flex-row items-center justify-between rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-3"
          >
            <Text style={{ color: colors.text }} className="text-[16px] font-semibold">
              {t('worksheet.includeAnswerKey')}
            </Text>
            <Switch value={includeAnswerKey} onValueChange={setIncludeAnswerKey} />
          </View>
        </View>
      </ToolCard>

      <ToolCard title={t('worksheet.previewTitle')} description={t('worksheet.previewDescription')}>
        <View className="gap-3">
          {items.slice(0, Math.min(items.length, 8)).map((item, index) => (
            <Text
              key={`${item.id}-${index}`}
              style={{ color: colors.textMuted }}
              className="text-[15px] leading-6"
            >
              {index + 1}. {item.prompt}
            </Text>
          ))}
          <ActionButton
            label={t('worksheet.shareWorksheet')}
            disabled={items.length === 0 || types.length === 0}
            onPress={() => {
              void Share.share({
                title: t('worksheet.exportTitle'),
                message: worksheetText,
              })
            }}
          />
        </View>
      </ToolCard>
    </View>
  )
}
