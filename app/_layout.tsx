import '../global.css'

import { appThemes } from '@/constants/theme'
import { bootstrapI18n } from '@/lib/i18n-bootstrap'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '@react-navigation/native'
import { useResolvedTheme } from '@/hooks/store/useThemeStore'
import 'react-native-reanimated'

SplashScreen.preventAutoHideAsync().catch(() => undefined)

export default function RootLayout() {
  const [ready, setReady] = useState(false)
  const resolvedTheme = useResolvedTheme()

  useEffect(() => {
    let mounted = true

    bootstrapI18n()
      .catch(() => undefined)
      .finally(() => {
        if (!mounted) {
          return
        }
        setReady(true)
        SplashScreen.hideAsync().catch(() => undefined)
      })

    return () => {
      mounted = false
    }
  }, [])

  if (!ready) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider value={appThemes[resolvedTheme]}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: appThemes[resolvedTheme].colors.background,
              },
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="tools" />
            <Stack.Screen name="ions" />
            <Stack.Screen name="worksheet" />
            <Stack.Screen name="settings" />
            <Stack.Screen
              name="element/[symbol]"
              options={{
                presentation: 'modal',
                animation: 'slide_from_bottom',
              }}
            />
          </Stack>
          <StatusBar style={resolvedTheme === 'dark' ? 'light' : 'dark'} />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
