import { useAppPalette } from '@/hooks/store/useAppPalette'
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
}: ActionButtonProps) => {
  const { colors } = useAppPalette()

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={{
        borderColor: variant === 'ghost' ? colors.line : undefined,
        backgroundColor: disabled
          ? colors.line
          : variant === 'accent'
            ? colors.accent
            : colors.surface,
      }}
      className={`items-center justify-center rounded-[16px] px-4 py-3 ${
        variant === 'ghost' ? 'border' : ''
      } ${disabled ? 'bg-[#dce7ed]' : variant === 'accent' ? 'bg-accent' : 'bg-white'}`}
    >
      <Text
        style={{
          color: disabled ? colors.textMuted : variant === 'accent' ? '#ffffff' : colors.textMuted,
        }}
        className={`text-[15px] font-semibold ${disabled ? 'text-slate-400' : variant === 'accent' ? 'text-white' : 'text-slate-600'}`}
      >
        {label}
      </Text>
    </Pressable>
  )
}
