import { Text, View } from 'react-native'

export const ElementCardSection = ({ label, value }: { label: string; value: string }) => (
  <View className="border-b border-[#e6eef3] py-3">
    <Text className="text-[11px] font-bold uppercase tracking-[3px] text-slate-400">{label}</Text>
    <Text className="mt-1 text-[17px] font-semibold text-ink">{value}</Text>
  </View>
)
