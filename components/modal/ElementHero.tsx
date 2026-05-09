import type { ElementProfile } from '@/types/elementProfile'
import type { ElementIsotope } from '@/types/elementProfile'
import { Pressable, Text, View } from 'react-native'

type ElementHeroProps = {
  profile: ElementProfile
  activeIsotope: ElementIsotope | null
  hasPrev: boolean
  hasNext: boolean
  onPrev: () => void
  onNext: () => void
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
}: ElementHeroProps) => {
  const massNumber = activeIsotope?.massNumber ?? Math.round(profile.raw.mass)

  return (
    <View className="rounded-[28px] border border-[#d9e6ee] bg-[#fffdfa] px-5 py-5 shadow-panel">
      <View className="flex-row items-start justify-between">
        <View className="flex-row items-start gap-4">
          <View className="pt-1">
            <Text className="text-[18px] font-black text-slate-500">{massNumber}</Text>
            <Text className="text-[18px] font-black text-slate-500">{profile.level2.protons}</Text>
          </View>
          <View>
            <Text className="text-[54px] font-black leading-[56px] tracking-[-1.5px] text-ink">
              {profile.symbol}
            </Text>
          </View>
          <View className="pt-3">
            <Text className="text-[18px] font-black text-ink">{profile.name}</Text>
            <Text className="mt-1 text-[13px] font-medium text-slate-500">
              {profile.level1.type}
            </Text>
          </View>
        </View>
        <View className="flex-row gap-2">
          <NavButton disabled={!hasPrev} label="‹" onPress={onPrev} />
          <NavButton disabled={!hasNext} label="›" onPress={onNext} />
        </View>
      </View>
    </View>
  )
}
