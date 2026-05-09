import { Ionicons } from '@expo/vector-icons'
import { TextInput, View } from 'react-native'

type SearchInputProps = {
  value: string
  placeholder: string
  onChangeText: (value: string) => void
}

export const SearchInput = ({ value, placeholder, onChangeText }: SearchInputProps) => {
  return (
    <View className="mb-4 flex-row items-center rounded-2xl border border-[#d5e3ec] bg-white px-4 py-3">
      <Ionicons name="search" size={18} color="#708295" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8a99aa"
        autoCapitalize="none"
        autoCorrect={false}
        className="ml-3 flex-1 text-[16px] text-ink"
        accessibilityLabel={placeholder}
      />
    </View>
  )
}
