import '../global.css'

import { AppStack } from '@/features/app/AppStack'
import { useAppBootstrap } from '@/features/app/useAppBootstrap'
import { useThemeMode } from '@/hooks/store/useThemeStore'
import * as SplashScreen from 'expo-splash-screen'
import { useColorScheme as useNativeWindColorScheme } from 'nativewind'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-reanimated'

SplashScreen.preventAutoHideAsync().catch(() => undefined)

const ThemeModeSync = () => {
  const themeMode = useThemeMode()
  const { setColorScheme } = useNativeWindColorScheme()

  useEffect(() => {
    setColorScheme(themeMode)
  }, [setColorScheme, themeMode])

  return <AppStack />
}

const RootLayout = () => {
  const ready = useAppBootstrap()

  if (!ready) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeModeSync />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout
