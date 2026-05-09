import { AppHeader } from '@/components/nav/AppHeader'
import { AppDrawer } from '@/components/nav/AppDrawer'
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
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { useAppTranslation } from '@/i18n/localize'
import type { AppLanguage } from '@/i18n/types'
import type { MassUnit } from '@/stores/massUnitStore'
import type { ThemeMode } from '@/stores/themeStore'
import { useState } from 'react'
import { Pressable, Switch, Text, View } from 'react-native'

export default function SettingsRoute() {
  const { t } = useAppTranslation()
  const { colors } = useAppPalette()
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
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Screen>
      <AppHeader onMenuPress={() => setDrawerOpen(true)} />
      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
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
          <View
            style={{
              borderColor: colors.line,
              backgroundColor: colors.surfaceMuted,
            }}
            className="flex-row items-center justify-between rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-3"
          >
            <Text style={{ color: colors.text }} className="text-[16px] font-semibold">
              {t('settings.animationSpeed')}: {animationSpeed.toFixed(2)}x
            </Text>
            <View className="flex-row gap-2">
              <Pressable
                style={{
                  borderColor: colors.line,
                  backgroundColor: colors.surface,
                }}
                className="rounded-full border border-[#cfe0ea] bg-white px-3 py-2"
                onPress={() => setAnimationSpeed(animationSpeed - 0.1)}
              >
                <Text style={{ color: colors.textMuted }} className="font-semibold">
                  -
                </Text>
              </Pressable>
              <Pressable
                style={{
                  borderColor: colors.line,
                  backgroundColor: colors.surface,
                }}
                className="rounded-full border border-[#cfe0ea] bg-white px-3 py-2"
                onPress={() => setAnimationSpeed(animationSpeed + 0.1)}
              >
                <Text style={{ color: colors.textMuted }} className="font-semibold">
                  +
                </Text>
              </Pressable>
            </View>
          </View>

          <View
            style={{
              borderColor: colors.line,
              backgroundColor: colors.surfaceMuted,
            }}
            className="flex-row items-center justify-between rounded-[18px] border border-[#d9e6ee] bg-[#f6fbfd] px-4 py-3"
          >
            <Text style={{ color: colors.text }} className="text-[16px] font-semibold">
              {t('settings.pauseAnimations')}
            </Text>
            <Switch value={animationsPaused} onValueChange={setAnimationsPaused} />
          </View>
        </View>
      </SettingsSection>
    </Screen>
  )
}
