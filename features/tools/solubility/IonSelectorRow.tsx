import { ActionButton } from '@/components/tools/ActionButton'
import { ScrollView, Text, View } from 'react-native'

export const IonSelectorRow = <T extends string>({
  activeValue,
  items,
  label,
  onSelect,
}: {
  activeValue: T
  items: readonly T[]
  label: string
  onSelect: (value: T) => void
}) => (
  <View>
    <Text className="mb-2 text-[12px] font-bold uppercase tracking-[3px] text-slate-400">
      {label}
    </Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row gap-2 pr-2">
        {items.map((item) => (
          <ActionButton
            key={item}
            label={item}
            variant={item === activeValue ? 'accent' : 'ghost'}
            onPress={() => onSelect(item)}
          />
        ))}
      </View>
    </ScrollView>
  </View>
)
