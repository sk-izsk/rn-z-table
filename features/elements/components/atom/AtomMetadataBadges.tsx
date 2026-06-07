import type { Element } from '@/data/elements/elements'
import type { ElementIsotope } from '@/types/elementProfile'
import { Text, View } from 'react-native'

export const AtomMetadataBadges = ({
  config,
  element,
  isotope,
  neutronCount,
}: {
  config: string
  element: Element
  isotope: ElementIsotope | null | undefined
  neutronCount: number
}) => (
  <>
    <View className="absolute left-4 top-4 rounded-full border border-[#d7e4ed] bg-white/92 px-3 py-1.5">
      <Text className="font-mono text-[13px] text-slate-600">{config}</Text>
    </View>
    <View className="absolute right-4 top-4 rounded-full border border-[#d7e4ed] bg-white/92 px-3 py-1.5">
      <Text className="font-mono text-[13px] text-slate-600">
        {isotope?.name ?? `${element.sym}-${Math.round(element.mass)}`}
      </Text>
    </View>
    <View className="absolute bottom-4 left-4 rounded-full border border-[#d7e4ed] bg-white/90 px-3 py-1.5">
      <Text className="text-[12px] font-semibold uppercase tracking-[2px] text-slate-500">
        {element.n}p · {neutronCount}n
      </Text>
    </View>
  </>
)
