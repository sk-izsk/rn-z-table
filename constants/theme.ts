import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native'
import { darkColors, lightColors } from '@/styles/colors'

export const Colors = {
  light: {
    text: lightColors.text,
    background: lightColors.background,
    tint: lightColors.accent,
    icon: lightColors.textMuted,
    tabIconDefault: lightColors.textMuted,
    tabIconSelected: lightColors.accent,
  },
  dark: {
    text: darkColors.text,
    background: darkColors.background,
    tint: darkColors.accent,
    icon: darkColors.textMuted,
    tabIconDefault: darkColors.textMuted,
    tabIconSelected: darkColors.accent,
  },
} as const

export const appThemes = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: lightColors.accent,
      background: lightColors.background,
      card: lightColors.surface,
      text: lightColors.text,
      border: lightColors.line,
      notification: lightColors.accent,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: darkColors.accent,
      background: darkColors.background,
      card: darkColors.surface,
      text: darkColors.text,
      border: darkColors.line,
      notification: darkColors.accent,
    },
  },
} satisfies Record<'light' | 'dark', Theme>

export const brand = {
  title: 'ZTable',
  subtitle: 'Chemistry Console',
} as const
