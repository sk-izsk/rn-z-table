import { ElementCell } from '@/components/table/ElementCell'
import type { Element } from '@/data/elements/elements'
import { memo } from 'react'
import { ScrollView, Text, View } from 'react-native'

export const TableSeriesRow = memo(
  ({
    title,
    elements,
    matchedNumbers,
    hasFilter,
    onPressElement,
  }: {
    title: string
    elements: Element[]
    matchedNumbers: Set<number>
    hasFilter: boolean
    onPressElement: (element: Element) => void
  }) => (
    <View className="mt-4">
      <Text className="mb-2 text-xs font-bold uppercase tracking-[4px] text-slate-500">
        {title}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-1.5 pr-1">
          {elements.map((element) => {
            const isMatch = matchedNumbers.has(element.n)
            return (
              <ElementCell
                key={element.n}
                element={element}
                dimmed={hasFilter && !isMatch}
                highlighted={hasFilter && isMatch}
                onPress={onPressElement}
              />
            )
          })}
        </View>
      </ScrollView>
    </View>
  ),
)

TableSeriesRow.displayName = 'TableSeriesRow'
