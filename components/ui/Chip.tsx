import { useAppPalette } from '@/hooks/store/useAppPalette'
import { Pressable, Text, View } from 'react-native'

type ChipProps = {
  label: string
  active?: boolean
  color?: string
  onPress?: () => void
}

export const Chip = ({ label, active = false, color, onPress }: ChipProps) => {
  const { colors } = useAppPalette()

  return (
    <Pressable
      onPress={onPress}
      style={{
        borderColor: active ? colors.accent : colors.line,
        backgroundColor: active ? colors.accentSoft : colors.surface,
      }}
      className={`mr-2 flex-row items-center rounded-xl border px-3 py-2 ${
        active ? 'border-accent bg-[#d8eef5]' : 'border-[#d6e5ed] bg-white'
      }`}
    >
      {color ? (
        <View style={{ backgroundColor: color }} className="mr-2 h-2.5 w-2.5 rounded-full" />
      ) : null}
      <Text
        style={{ color: active ? colors.text : colors.textMuted }}
        className={active ? 'font-semibold text-ink' : 'font-medium text-slate-500'}
      >
        {label}
      </Text>
    </Pressable>
  )
}
