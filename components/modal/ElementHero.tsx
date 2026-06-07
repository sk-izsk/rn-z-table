import { ElementHeroBadges } from '@/features/elements/components/ElementHeroBadges'
import { ElementHeroIdentity } from '@/features/elements/components/ElementHeroIdentity'
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
      disabled
        ? 'border-[#e4edf2] bg-[#f5f8fa] dark:border-line-dark dark:bg-panel-muted-dark'
        : 'border-[#cfe0ea] bg-white dark:border-line-dark dark:bg-panel-dark'
    }`}
  >
    <Text className={disabled ? 'text-slate-300 dark:text-[#4d6473]' : 'text-slate-600 dark:text-[#95abbb]'}>
      {label}
    </Text>
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
    <View className="rounded-[30px] border border-[#d9e6ee] bg-[#fffdfa] px-5 py-5 shadow-panel dark:border-line-dark dark:bg-panel-dark">
      <View className="flex-row items-start justify-between gap-4">
        <ElementHeroIdentity massNumber={massNumber} profile={profile} />
        <View className="flex-row gap-2">
          <NavButton disabled={!hasPrev} label="‹" onPress={onPrev} />
          <NavButton disabled={!hasNext} label="›" onPress={onNext} />
        </View>
      </View>
      <ElementHeroBadges activeIsotope={activeIsotope} massNumber={massNumber} profile={profile} />
    </View>
  )
}
