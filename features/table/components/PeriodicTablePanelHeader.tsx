import { Text, View } from 'react-native'

export const PeriodicTablePanelHeader = ({
  indexedLabel,
  matrixLabel,
}: {
  indexedLabel: string
  matrixLabel: string
}) => (
  <View className="mb-3 flex-row items-center justify-between">
    <Text className="text-xs font-bold uppercase tracking-[4px] text-slate-500 dark:text-[#95abbb]">
      {matrixLabel}
    </Text>
    <Text className="text-sm text-slate-500 dark:text-[#95abbb]">118 {indexedLabel}</Text>
  </View>
)
