import { ActionButton } from '@/components/tools/ActionButton'
import { ToolOptionSection } from '@/features/tools/components/ToolOptionSection'
import type { WorksheetDifficulty } from '@/data/tools/worksheet'
import { View } from 'react-native'
import { DIFFICULTY_OPTIONS } from './constants'

export const WorksheetDifficultySection = ({
  difficulty,
  onSetDifficulty,
  t,
  title,
}: {
  difficulty: WorksheetDifficulty
  onSetDifficulty: (value: WorksheetDifficulty) => void
  t: (key: string) => string
  title: string
}) => (
  <ToolOptionSection title={title}>
    <View className="flex-row gap-2">
      {DIFFICULTY_OPTIONS.map((option) => (
        <ActionButton
          key={option}
          label={t(`worksheet.difficultyOptions.${option}`)}
          variant={option === difficulty ? 'accent' : 'ghost'}
          onPress={() => onSetDifficulty(option)}
        />
      ))}
    </View>
  </ToolOptionSection>
)
