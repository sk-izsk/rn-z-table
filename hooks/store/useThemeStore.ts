import { useColorScheme } from 'react-native'
import { useThemeStore } from '@/stores/themeStore'

export const useThemeMode = () => useThemeStore((state) => state.themeMode)
export const useSetThemeMode = () => useThemeStore((state) => state.setThemeMode)

export const useResolvedTheme = (): 'light' | 'dark' => {
  const systemTheme = useColorScheme()
  const themeMode = useThemeMode()

  if (themeMode === 'system') {
    return systemTheme === 'dark' ? 'dark' : 'light'
  }

  return themeMode
}
