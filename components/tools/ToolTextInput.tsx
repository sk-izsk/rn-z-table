import { TextInput } from 'react-native'

type ToolTextInputProps = {
  value: string
  onChangeText: (value: string) => void
  placeholder: string
}

export const ToolTextInput = ({ value, onChangeText, placeholder }: ToolTextInputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#8b9bae"
      autoCapitalize="none"
      autoCorrect={false}
      className="rounded-[16px] border border-[#d8e5ed] bg-white px-4 py-3 text-[16px] text-ink"
    />
  )
}
