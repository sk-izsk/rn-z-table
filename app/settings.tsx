import { AppHeader } from '@/components/nav/AppHeader'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { SettingsSection } from '@/components/ui/SettingsSection'
import {
  useAnimationSpeed,
  useAnimationsPaused,
  useSetAnimationSpeed,
  useSetAnimationsPaused,
} from '@/hooks/store/useAnimationStore'
import { useLanguage, useSetLanguage } from '@/hooks/store/useLanguageStore'
import { useMassUnit, useSetMassUnit } from '@/hooks/store/useSettingsStore'
import { useSetThemeMode, useThemeMode } from '@/hooks/store/useThemeStore'
import { useAppTranslation } from '@/i18n/localize'
import type { AppLanguage } from '@/i18n/types'
import type { MassUnit } from '@/stores/massUnitStore'
import type { ThemeMode } from '@/stores/themeStore'
import { Pressable, Switch, Text, View } from 'react-native'

export default function SettingsRoute() {
  const { t } = useAppTranslation()
  const language = useLanguage()
  const setLanguage = useSetLanguage()
  const themeMode = useThemeMode()
  const setThemeMode = useSetThemeMode()
  const massUnit = useMassUnit()
  const setMassUnit = useSetMassUnit()
  const animationSpeed = useAnimationSpeed()
  const setAnimationSpeed = useSetAnimationSpeed()
  const animationsPaused = useAnimationsPaused()
  const setAnimationsPaused = useSetAnimationsPaused()

  return (
    <Screen>
      <AppHeader />
      <PageIntro
        eyebrow={t('settings.eyebrow')}
        title={t('settings.title')}
        description={t('settings.subtitle')}
      />
      <SettingsSection
        title={t('settings.language')}
        description={t('settings.languageDescription')}
      >
        <SegmentedControl<AppLanguage>
          value={language}
          onValueChange={(value) => {
            void setLanguage(value)
          }}
          options={[
            { value: 'en', label: 'English' },
            { value: 'fr', label: 'Francais' },
          ]}
        />
      </SettingsSection>

      <SettingsSection title={t('settings.theme')} description={t('settings.themeDescription')}>
        <SegmentedControl<ThemeMode>
          value={themeMode}
          onValueChange={setThemeMode}
          options={[
            { value: 'system', label: t('settings.system') },
            { value: 'light', label: t('common.light') },
            { value: 'dark', label: t('common.dark') },
          ]}
        />
      </SettingsSection>

      <SettingsSection
        title={t('settings.globalUnit')}
        description={t('settings.massUnitDescription')}
      >
        <SegmentedControl<MassUnit>
          value={massUnit}
          onValueChange={setMassUnit}
          options={[
            { value: 'highSchool', label: t('settings.massUnitHighSchool') },
            { value: 'universityConventional', label: t('settings.massUnitUniversity') },
          ]}
        />
      </SettingsSection>

      <SettingsSection
        title={t('settings.animationTitle')}
        description={t('settings.animationDescription')}
      >
        <View className="gap-4">
          <View className="flex-row items-center justify-between rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-3">
            <Text className="text-[16px] font-semibold text-ink">
              {t('settings.animationSpeed')}: {animationSpeed.toFixed(2)}x
            </Text>
            <View className="flex-row gap-2">
              <Pressable
                className="rounded-full border border-[#cfe0ea] bg-white px-3 py-2"
                onPress={() => setAnimationSpeed(animationSpeed - 0.1)}
              >
                <Text className="font-semibold text-slate-600">-</Text>
              </Pressable>
              <Pressable
                className="rounded-full border border-[#cfe0ea] bg-white px-3 py-2"
                onPress={() => setAnimationSpeed(animationSpeed + 0.1)}
              >
                <Text className="font-semibold text-slate-600">+</Text>
              </Pressable>
            </View>
          </View>

          <View className="flex-row items-center justify-between rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-3">
            <Text className="text-[16px] font-semibold text-ink">
              {t('settings.pauseAnimations')}
            </Text>
            <Switch value={animationsPaused} onValueChange={setAnimationsPaused} />
          </View>
        </View>
      </SettingsSection>
    </Screen>
  )
}
