import { Ionicons } from '@expo/vector-icons'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { TextInput, View } from 'react-native'

type SearchInputProps = {
  value: string
  placeholder: string
  onChangeText: (value: string) => void
}

export const SearchInput = ({ value, placeholder, onChangeText }: SearchInputProps) => {
  const { colors } = useAppPalette()

  return (
    <View
      style={{
        borderColor: colors.line,
        backgroundColor: colors.surface,
      }}
      className="mb-4 flex-row items-center rounded-2xl border border-[#d5e3ec] bg-white px-4 py-3"
    >
      <Ionicons name="search" size={18} color={colors.textMuted} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        autoCapitalize="none"
        autoCorrect={false}
        style={{ color: colors.text }}
        className="ml-3 flex-1 text-[16px]"
        accessibilityLabel={placeholder}
      />
    </View>
  )
}
