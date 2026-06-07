import type { Element } from '@/data/elements/elements'
import type { ElementIsotope } from '@/types/elementProfile'
import { Text, View } from 'react-native'

const AtomPanelBadge = ({ value }: { value: string }) => (
  <View className="rounded-full border border-[#d3e2eb] bg-white px-3 py-1.5 dark:border-line-dark dark:bg-panel-muted-dark">
    <Text className="font-mono text-[13px] text-slate-600 dark:text-[#95abbb]">{value}</Text>
  </View>
)

export const AtomPanelHeader = ({
  element,
  isotope,
  shellModelLabel,
}: {
  element: Element
  isotope: ElementIsotope | null
  shellModelLabel: string
}) => (
  <View className="border-b border-[#e2edf3] px-4 py-3 dark:border-line-dark">
    <View className="flex-row items-center justify-between">
      <View className="flex-row gap-2">
        <AtomPanelBadge value={element.config} />
        <AtomPanelBadge value={isotope?.name ?? `${element.sym}-${Math.round(element.mass)}`} />
      </View>
      <Text className="text-[12px] font-semibold uppercase tracking-[3px] text-slate-400 dark:text-[#95abbb]">
        {shellModelLabel}
      </Text>
    </View>
  </View>
)
