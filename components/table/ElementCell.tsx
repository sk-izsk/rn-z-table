import { CATEGORY_COLORS, type Element } from '@/data/elements/elements'
import { memo } from 'react'
import { Pressable, Text, View } from 'react-native'

type ElementCellProps = {
  element: Element
  dimmed?: boolean
  highlighted?: boolean
  onPress: (element: Element) => void
}

const CELL_WIDTH = 56
const CELL_HEIGHT = 68

const ElementCellComponent = ({
  element,
  dimmed = false,
  highlighted = false,
  onPress,
}: ElementCellProps) => {
  return (
    <Pressable
      onPress={() => onPress(element)}
      accessibilityRole="button"
      accessibilityLabel={`${element.name}, ${element.sym}, atomic number ${element.n}`}
      style={{
        width: CELL_WIDTH,
        height: CELL_HEIGHT,
        backgroundColor: CATEGORY_COLORS[element.cat],
        opacity: dimmed ? 0.22 : 1,
        borderWidth: highlighted ? 2 : 0,
        borderColor: highlighted ? '#155f79' : 'transparent',
      }}
      className="overflow-hidden rounded-[14px] p-2"
    >
      <View className="absolute inset-0 bg-white/10" />
      <Text className="text-[10px] font-semibold text-white">{element.n}</Text>
      <Text className="mt-0.5 text-[22px] font-black leading-6 text-white">{element.sym}</Text>
      <Text className="mt-auto text-[10px] font-medium text-white/95" numberOfLines={1}>
        {element.name}
      </Text>
    </Pressable>
  )
}

export const ElementCell = memo(
  ElementCellComponent,
  (prev, next) =>
    prev.element === next.element &&
    prev.dimmed === next.dimmed &&
    prev.highlighted === next.highlighted &&
    prev.onPress === next.onPress,
)

export const elementCellSize = {
  width: CELL_WIDTH,
  height: CELL_HEIGHT,
  gap: 6,
} as const
