import type { ElementProfile } from '@/types/elementProfile'
import type { ElementIsotope } from '@/types/elementProfile'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { Pressable, Text, View } from 'react-native'

type ElementHeroProps = {
  profile: ElementProfile
  activeIsotope: ElementIsotope | null
  hasPrev: boolean
  hasNext: boolean
  onPrev: () => void
  onNext: () => void
  onClose: () => void
}

const NavButton = ({
  disabled,
  label,
  onPress,
}: {
  disabled: boolean
  label: string
  onPress: () => void
}) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    className={`h-12 w-12 items-center justify-center rounded-xl border ${
      disabled ? 'border-[#e4edf2] bg-[#f5f8fa]' : 'border-[#cfe0ea] bg-white'
    }`}
  >
    <Text className={disabled ? 'text-slate-300' : 'text-slate-600'}>{label}</Text>
  </Pressable>
)

export const ElementHero = ({
  profile,
  activeIsotope,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
  onClose,
}: ElementHeroProps) => {
  const massNumber = activeIsotope?.massNumber ?? Math.round(profile.raw.mass)
  const { colors } = useAppPalette()

  return (
    <View
      style={{
        borderColor: colors.line,
        backgroundColor: colors.surface,
      }}
      className="rounded-[30px] border px-5 py-5 shadow-panel"
    >
      <View className="mb-4 flex-row items-start justify-between gap-3">
        <View className="min-w-0 flex-1 flex-row items-start gap-3">
          <View
            style={{
              borderColor: colors.line,
              backgroundColor: colors.surfaceMuted,
            }}
            className="rounded-[18px] border px-3 py-2"
          >
            <Text
              style={{ color: colors.textMuted }}
              className="text-center text-[18px] font-black"
            >
              {massNumber}
            </Text>
            <Text
              style={{ color: colors.textMuted }}
              className="text-center text-[18px] font-black"
            >
              {profile.level2.protons}
            </Text>
          </View>
          <View className="pt-1">
            <Text
              style={{ color: colors.text }}
              className="text-[54px] font-black leading-[56px] tracking-[-1.5px]"
            >
              {profile.symbol}
            </Text>
          </View>
          <View className="min-w-0 flex-1 pt-3">
            <Text
              numberOfLines={2}
              style={{ color: colors.text }}
              className="text-[17px] font-black"
            >
              {profile.name}
            </Text>
            <Text
              numberOfLines={2}
              style={{ color: colors.textMuted }}
              className="mt-1 text-[13px] font-medium"
            >
              {profile.level1.type}
            </Text>
          </View>
        </View>
        <View className="flex-row gap-2">
          <NavButton disabled={!hasPrev} label="‹" onPress={onPrev} />
          <NavButton disabled={!hasNext} label="›" onPress={onNext} />
          <NavButton disabled={false} label="×" onPress={onClose} />
        </View>
      </View>

      <View style={{ borderTopColor: colors.line }} className="border-t pt-4">
        <View className="flex-row flex-wrap gap-2">
          <View
            style={{
              borderColor: colors.line,
              backgroundColor: colors.surfaceMuted,
            }}
            className="rounded-full border px-3 py-1.5"
          >
            <Text style={{ color: colors.textMuted }} className="font-mono text-[13px]">
              {profile.raw.config}
            </Text>
          </View>
          <View
            style={{
              borderColor: colors.line,
              backgroundColor: colors.surfaceMuted,
            }}
            className="rounded-full border px-3 py-1.5"
          >
            <Text style={{ color: colors.textMuted }} className="font-mono text-[13px]">
              {activeIsotope?.name ?? `${profile.symbol}-${massNumber}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
