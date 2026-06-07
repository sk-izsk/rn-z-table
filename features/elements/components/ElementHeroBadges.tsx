import type { ElementIsotope, ElementProfile } from '@/types/elementProfile'
import { Text, View } from 'react-native'

const HeroBadge = ({ value }: { value: string }) => (
  <View className="rounded-full border border-[#d7e4ed] bg-white px-3 py-1.5 dark:border-line-dark dark:bg-panel-muted-dark">
    <Text className="font-mono text-[13px] text-slate-600 dark:text-[#95abbb]">{value}</Text>
  </View>
)

export const ElementHeroBadges = ({
  activeIsotope,
  massNumber,
  profile,
}: {
  activeIsotope: ElementIsotope | null
  massNumber: number
  profile: ElementProfile
}) => (
  <View className="mt-5 border-t border-[#e7edf2] pt-4 dark:border-line-dark">
    <View className="flex-row flex-wrap gap-2">
      <HeroBadge value={profile.raw.config} />
      <HeroBadge value={activeIsotope?.name ?? `${profile.symbol}-${massNumber}`} />
    </View>
  </View>
)
