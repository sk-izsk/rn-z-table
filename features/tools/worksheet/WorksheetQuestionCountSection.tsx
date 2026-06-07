import { ActionButton } from '@/components/tools/ActionButton'
import { ToolOptionSection } from '@/features/tools/components/ToolOptionSection'
import { View } from 'react-native'
import { QUESTION_COUNTS } from './constants'

export const WorksheetQuestionCountSection = ({
  onSetQuestionCount,
  questionCount,
  title,
}: {
  onSetQuestionCount: (value: number) => void
  questionCount: number
  title: string
}) => (
  <ToolOptionSection title={title}>
    <View className="flex-row flex-wrap gap-2">
      {QUESTION_COUNTS.map((count) => (
        <ActionButton
          key={count}
          label={String(count)}
          variant={count === questionCount ? 'accent' : 'ghost'}
          onPress={() => onSetQuestionCount(count)}
        />
      ))}
    </View>
  </ToolOptionSection>
)
