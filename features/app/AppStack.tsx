import { appThemes } from '@/constants/theme'
import { useResolvedTheme } from '@/hooks/store/useThemeStore'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from '@react-navigation/native'

const stackScreenOptions = (resolvedTheme: 'light' | 'dark') => ({
  headerShown: false,
  contentStyle: {
    backgroundColor: appThemes[resolvedTheme].colors.background,
  },
})

export const AppStack = () => {
  const resolvedTheme = useResolvedTheme()

  return (
    <ThemeProvider value={appThemes[resolvedTheme]}>
      <Stack screenOptions={stackScreenOptions(resolvedTheme)}>
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
  )
}
