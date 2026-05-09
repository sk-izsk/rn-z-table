import { useAppPalette } from '@/hooks/store/useAppPalette'
import { TextInput } from 'react-native'

type ToolTextInputProps = {
  value: string
  onChangeText: (value: string) => void
  placeholder: string
}

export const ToolTextInput = ({ value, onChangeText, placeholder }: ToolTextInputProps) => {
  const { colors } = useAppPalette()

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.textMuted}
      autoCapitalize="none"
      autoCorrect={false}
      style={{
        borderColor: colors.line,
        backgroundColor: colors.surface,
        color: colors.text,
      }}
      className="rounded-[16px] border border-[#d8e5ed] bg-white px-4 py-3 text-[16px] text-ink"
    />
  )
}
