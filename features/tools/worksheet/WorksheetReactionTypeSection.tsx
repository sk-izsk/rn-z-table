import { ActionButton } from '@/components/tools/ActionButton'
import { ToolOptionSection } from '@/features/tools/components/ToolOptionSection'
import type { WorksheetReactionType } from '@/data/tools/worksheet'
import { View } from 'react-native'
import { REACTION_OPTIONS } from './constants'

export const WorksheetReactionTypeSection = ({
  onToggleType,
  t,
  title,
  types,
}: {
  onToggleType: (value: WorksheetReactionType) => void
  t: (key: string) => string
  title: string
  types: WorksheetReactionType[]
}) => (
  <ToolOptionSection title={title}>
    <View className="gap-2">
      {REACTION_OPTIONS.map((option) => {
        const active = types.includes(option.type)
        return (
          <ActionButton
            key={option.type}
            label={t(option.labelKey)}
            variant={active ? 'accent' : 'ghost'}
            onPress={() => onToggleType(option.type)}
          />
        )
      })}
    </View>
  </ToolOptionSection>
)
