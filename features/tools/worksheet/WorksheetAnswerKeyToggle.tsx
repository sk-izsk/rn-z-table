import { Switch, Text, View } from 'react-native'

export const WorksheetAnswerKeyToggle = ({
  includeAnswerKey,
  label,
  onSetIncludeAnswerKey,
}: {
  includeAnswerKey: boolean
  label: string
  onSetIncludeAnswerKey: (value: boolean) => void
}) => (
  <View className="flex-row items-center justify-between rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-3">
    <Text className="text-[16px] font-semibold text-ink">{label}</Text>
    <Switch value={includeAnswerKey} onValueChange={onSetIncludeAnswerKey} />
  </View>
)
