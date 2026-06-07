import {
  useAnimationSpeed,
  useAnimationsPaused,
  useSetAnimationSpeed,
  useSetAnimationsPaused,
} from '@/hooks/store/useAnimationStore'
import { useLanguage, useSetLanguage } from '@/hooks/store/useLanguageStore'
import { useMassUnit, useSetMassUnit } from '@/hooks/store/useSettingsStore'
import { useSetThemeMode, useThemeMode } from '@/hooks/store/useThemeStore'

export const useSettingsScreenState = () => ({
  language: useLanguage(),
  setLanguage: useSetLanguage(),
  themeMode: useThemeMode(),
  setThemeMode: useSetThemeMode(),
  massUnit: useMassUnit(),
  setMassUnit: useSetMassUnit(),
  animationSpeed: useAnimationSpeed(),
  setAnimationSpeed: useSetAnimationSpeed(),
  animationsPaused: useAnimationsPaused(),
  setAnimationsPaused: useSetAnimationsPaused(),
})
