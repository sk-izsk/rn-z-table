import { Pressable, Text } from 'react-native'

type ActionButtonProps = {
  label: string
  onPress: () => void
  disabled?: boolean
  variant?: 'accent' | 'ghost'
}

export const ActionButton = ({
  label,
  onPress,
  disabled = false,
  variant = 'accent',
}: ActionButtonProps) => (
  <Pressable
    disabled={disabled}
    onPress={onPress}
    className={`items-center justify-center rounded-[16px] px-4 py-3 ${
      disabled
        ? 'bg-[#dce7ed]'
        : variant === 'accent'
          ? 'bg-accent'
          : 'border border-[#cfe0ea] bg-white'
    }`}
  >
    <Text
      className={`text-[15px] font-semibold ${disabled ? 'text-slate-400' : variant === 'accent' ? 'text-white' : 'text-slate-600'}`}
    >
      {label}
    </Text>
  </Pressable>
)
