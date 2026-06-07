import { AppHeader } from '@/components/nav/AppHeader'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { useAppTranslation } from '@/i18n/localize'
import { AnimationSettingsSection } from './components/AnimationSettingsSection'
import { SettingsLanguageSection } from './components/SettingsLanguageSection'
import { SettingsMassUnitSection } from './components/SettingsMassUnitSection'
import { SettingsThemeSection } from './components/SettingsThemeSection'
import { useSettingsScreenState } from './hooks/useSettingsScreenState'

export const SettingsScreen = () => {
  const { t } = useAppTranslation()
  const {
    animationSpeed,
    animationsPaused,
    language,
    massUnit,
    setAnimationSpeed,
    setAnimationsPaused,
    setLanguage,
    setMassUnit,
    setThemeMode,
    themeMode,
  } = useSettingsScreenState()

  return (
    <Screen>
      <AppHeader />
      <PageIntro
        eyebrow={t('settings.eyebrow')}
        title={t('settings.title')}
        description={t('settings.subtitle')}
      />
      <SettingsLanguageSection language={language} onSetLanguage={setLanguage} t={t} />
      <SettingsThemeSection onSetThemeMode={setThemeMode} t={t} themeMode={themeMode} />
      <SettingsMassUnitSection massUnit={massUnit} onSetMassUnit={setMassUnit} t={t} />
      <AnimationSettingsSection
        animationSpeed={animationSpeed}
        animationsPaused={animationsPaused}
        onAdjustSpeed={(delta) => setAnimationSpeed(animationSpeed + delta)}
        onSetAnimationsPaused={setAnimationsPaused}
        t={t}
      />
    </Screen>
  )
}
