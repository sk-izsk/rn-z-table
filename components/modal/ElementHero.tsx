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
    <View className="rounded-[30px] border border-[#d9e6ee] bg-[#fffdfa] px-5 py-5 shadow-panel">
      <View className="flex-row items-start justify-between gap-4">
        <View className="min-w-0 flex-1 flex-row items-start gap-4">
          <View className="rounded-[18px] border border-[#e3ebf0] bg-white px-3 py-2">
            <Text className="text-center text-[18px] font-black text-slate-500">{massNumber}</Text>
            <Text className="text-center text-[18px] font-black text-slate-500">
              {profile.level2.protons}
            </Text>
          </View>
          <View className="min-w-0 flex-1">
            <Text className="text-[54px] font-black leading-[56px] tracking-[-1.5px] text-ink">
              {profile.symbol}
            </Text>
          </View>
          <View className="min-w-0 flex-1 pt-3">
            <Text numberOfLines={2} className="text-[18px] font-black text-ink">
              {profile.name}
            </Text>
            <Text numberOfLines={2} className="mt-1 text-[13px] font-medium text-slate-500">
              {profile.level1.type}
            </Text>
          </View>
        </View>
        <View className="flex-row gap-2">
          <NavButton disabled={!hasPrev} label="‹" onPress={onPrev} />
          <NavButton disabled={!hasNext} label="›" onPress={onNext} />
        </View>
      </View>

      <View className="mt-5 border-t border-[#e7edf2] pt-4">
        <View className="flex-row flex-wrap gap-2">
          <View className="rounded-full border border-[#d7e4ed] bg-white px-3 py-1.5">
            <Text className="font-mono text-[13px] text-slate-600">{profile.raw.config}</Text>
          </View>
          <View className="rounded-full border border-[#d7e4ed] bg-white px-3 py-1.5">
            <Text className="font-mono text-[13px] text-slate-600">
              {activeIsotope?.name ?? `${profile.symbol}-${massNumber}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
