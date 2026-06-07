import { Text, View } from 'react-native'

export const AtomPanelStatus = ({
  motionLabel,
  motionValue,
  neutronCount,
  neutronsLabel,
  nucleusLabel,
  protonCount,
  protonsLabel,
}: {
  motionLabel: string
  motionValue: string
  neutronCount: number
  neutronsLabel: string
  nucleusLabel: string
  protonCount: number
  protonsLabel: string
}) => (
  <View className="mb-4 flex-row items-center justify-between">
    <View>
      <Text className="text-[12px] font-bold uppercase tracking-[3px] text-slate-400">
        {nucleusLabel}
      </Text>
      <Text className="mt-1 text-[16px] font-semibold text-ink">
        {protonCount} {protonsLabel} · {neutronCount} {neutronsLabel}
      </Text>
    </View>
    <View>
      <Text className="text-[12px] font-bold uppercase tracking-[3px] text-slate-400">
        {motionLabel}
      </Text>
      <Text className="mt-1 text-right text-[16px] font-semibold text-ink">{motionValue}</Text>
    </View>
  </View>
)
