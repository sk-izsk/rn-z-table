import type { ElementProfile } from '@/types/elementProfile'
import { Text, View } from 'react-native'

export const ElementHeroIdentity = ({
  massNumber,
  profile,
}: {
  massNumber: number
  profile: ElementProfile
}) => (
  <View className="min-w-0 flex-1 flex-row items-start gap-4">
    <View className="rounded-[18px] border border-[#e3ebf0] bg-white px-3 py-2 dark:border-line-dark dark:bg-panel-muted-dark">
      <Text className="text-center text-[18px] font-black text-slate-500 dark:text-[#95abbb]">
        {massNumber}
      </Text>
      <Text className="text-center text-[18px] font-black text-slate-500 dark:text-[#95abbb]">
        {profile.level2.protons}
      </Text>
    </View>
    <View className="min-w-0 flex-1">
      <Text className="text-[54px] font-black leading-[56px] tracking-[-1.5px] text-ink dark:text-ink-dark">
        {profile.symbol}
      </Text>
    </View>
    <View className="min-w-0 flex-1 pt-3">
      <Text numberOfLines={2} className="text-[18px] font-black text-ink dark:text-ink-dark">
        {profile.name}
      </Text>
      <Text numberOfLines={2} className="mt-1 text-[13px] font-medium text-slate-500 dark:text-[#95abbb]">
        {profile.level1.type}
      </Text>
    </View>
  </View>
)
