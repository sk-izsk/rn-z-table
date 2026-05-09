import { useResolvedTheme } from '@/hooks/store/useThemeStore'
import { darkColors, lightColors } from '@/styles/colors'

export const useAppPalette = () => {
  const resolvedTheme = useResolvedTheme()
  const colors = resolvedTheme === 'dark' ? darkColors : lightColors

  return {
    resolvedTheme,
    colors,
  }
}
