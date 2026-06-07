import { ActionButton } from '@/components/tools/ActionButton'
import type { WorksheetEquation, WorksheetReactionType } from '@/data/tools/worksheet'
import { Share, Text, View } from 'react-native'

export const WorksheetPreview = ({
  items,
  shareLabel,
  title,
  types,
  worksheetText,
}: {
  items: WorksheetEquation[]
  shareLabel: string
  title: string
  types: WorksheetReactionType[]
  worksheetText: string
}) => (
  <View className="gap-3">
    {items.slice(0, Math.min(items.length, 8)).map((item, index) => (
      <Text key={`${item.id}-${index}`} className="text-[15px] leading-6 text-slate-600">
        {index + 1}. {item.prompt}
      </Text>
    ))}
    <ActionButton
      label={shareLabel}
      disabled={items.length === 0 || types.length === 0}
      onPress={() => {
        void Share.share({
          title,
          message: worksheetText,
        })
      }}
    />
  </View>
)
