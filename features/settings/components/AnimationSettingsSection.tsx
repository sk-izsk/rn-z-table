import { SettingsSection } from '@/components/ui/SettingsSection'
import { Pressable, Switch, Text, View } from 'react-native'

export const AnimationSettingsSection = ({
  animationSpeed,
  animationsPaused,
  onAdjustSpeed,
  onSetAnimationsPaused,
  t,
}: {
  animationSpeed: number
  animationsPaused: boolean
  onAdjustSpeed: (delta: number) => void
  onSetAnimationsPaused: (value: boolean) => void
  t: (key: string) => string
}) => (
  <SettingsSection
    title={t('settings.animationTitle')}
    description={t('settings.animationDescription')}
  >
    <View className="gap-4">
      <View className="flex-row items-center justify-between rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-3 dark:border-line-dark dark:bg-panel-muted-dark">
        <Text className="text-[16px] font-semibold text-ink dark:text-ink-dark">
          {t('settings.animationSpeed')}: {animationSpeed.toFixed(2)}x
        </Text>
        <View className="flex-row gap-2">
          <Pressable
            className="rounded-full border border-[#cfe0ea] bg-white px-3 py-2 dark:border-line-dark dark:bg-panel-dark"
            onPress={() => onAdjustSpeed(-0.1)}
          >
            <Text className="font-semibold text-slate-600 dark:text-[#95abbb]">-</Text>
          </Pressable>
          <Pressable
            className="rounded-full border border-[#cfe0ea] bg-white px-3 py-2 dark:border-line-dark dark:bg-panel-dark"
            onPress={() => onAdjustSpeed(0.1)}
          >
            <Text className="font-semibold text-slate-600 dark:text-[#95abbb]">+</Text>
          </Pressable>
        </View>
      </View>

      <View className="flex-row items-center justify-between rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-3 dark:border-line-dark dark:bg-panel-muted-dark">
        <Text className="text-[16px] font-semibold text-ink dark:text-ink-dark">
          {t('settings.pauseAnimations')}
        </Text>
        <Switch value={animationsPaused} onValueChange={onSetAnimationsPaused} />
      </View>
    </View>
  </SettingsSection>
)
