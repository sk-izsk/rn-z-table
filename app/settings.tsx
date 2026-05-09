import { AppHeader } from '@/components/nav/AppHeader'
import { PageIntro } from '@/components/ui/PageIntro'
import { Panel } from '@/components/ui/Panel'
import { Screen } from '@/components/ui/Screen'
import { useAnimationSpeed, useAnimationsPaused } from '@/hooks/store/useAnimationStore'
import { useLanguage } from '@/hooks/store/useLanguageStore'
import { useMassUnit } from '@/hooks/store/useSettingsStore'
import { useThemeMode } from '@/hooks/store/useThemeStore'
import { Text, View } from 'react-native'

export default function SettingsRoute() {
  const language = useLanguage()
  const themeMode = useThemeMode()
  const massUnit = useMassUnit()
  const animationSpeed = useAnimationSpeed()
  const animationsPaused = useAnimationsPaused()

  return (
    <Screen>
      <AppHeader />
      <PageIntro
        eyebrow="Console Setup"
        title="Settings"
        description="Persisted settings stores now use AsyncStorage and are ready for native controls."
      />
      <Panel>
        <View className="gap-3">
          <Text className="text-sm text-slate-500">Language: {language}</Text>
          <Text className="text-sm text-slate-500">Theme: {themeMode}</Text>
          <Text className="text-sm text-slate-500">Mass unit: {massUnit}</Text>
          <Text className="text-sm text-slate-500">
            Animation speed: {animationSpeed.toFixed(2)}x
          </Text>
          <Text className="text-sm text-slate-500">
            Animations paused: {animationsPaused ? 'yes' : 'no'}
          </Text>
        </View>
      </Panel>
    </Screen>
  )
}
