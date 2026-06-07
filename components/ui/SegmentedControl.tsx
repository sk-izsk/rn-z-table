import { Pressable, Text, View } from 'react-native'

type Option<T extends string> = {
  label: string
  value: T
}

type SegmentedControlProps<T extends string> = {
  options: Option<T>[]
  value: T
  onValueChange: (value: T) => void
}

export const SegmentedControl = <T extends string>({
  options,
  value,
  onValueChange,
}: SegmentedControlProps<T>) => {
  return (
    <View className="flex-row rounded-[24px] border border-[#d6e5ed] bg-white p-1 shadow-panel dark:border-line-dark dark:bg-panel-muted-dark">
      {options.map((option) => {
        const active = option.value === value
        return (
          <Pressable
            key={option.value}
            onPress={() => onValueChange(option.value)}
            className={`flex-1 rounded-[20px] px-4 py-3 ${active ? 'bg-accent' : 'bg-transparent'}`}
          >
            <Text
              className={`text-center text-[16px] font-semibold ${active ? 'text-white' : 'text-slate-500 dark:text-[#95abbb]'}`}
            >
              {option.label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}
