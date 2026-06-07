import type { ElementIsotope } from '@/types/elementProfile'
import { toSuperscript } from '@/utils/elementModalUtils'
import { Pressable, Text, View } from 'react-native'

export const ElementIsotopeButton = ({
  isotope,
  onPress,
  selected,
  symbol,
}: {
  isotope: ElementIsotope
  onPress: () => void
  selected: boolean
  symbol: string
}) => (
  <Pressable
    onPress={onPress}
    className={`mb-2 rounded-[18px] border px-4 py-3 ${selected ? 'border-accent bg-[#d9edf5]' : 'border-[#d6e5ed] bg-white'}`}
  >
    <View className="flex-row items-center justify-between">
      <Text className="text-[18px] font-black text-ink">
        {toSuperscript(isotope.massNumber)}
        {symbol}
      </Text>
      <Text className="text-[12px] font-semibold uppercase tracking-[2px] text-slate-500">
        {isotope.percent}
      </Text>
    </View>
    <Text className="mt-1 text-[13px] text-slate-500">
      {isotope.neutron} {isotope.note ? `· ${isotope.note}` : ''}
    </Text>
  </Pressable>
)
