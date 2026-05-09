import type { AppLanguage } from './types'
import { SUPPORTED_LANGUAGES } from './types'

export const DEFAULT_LANGUAGE: AppLanguage = 'en'
export const APP_LANGUAGE_STORAGE_KEY = 'ztable_language_v1'
export const APP_THEME_STORAGE_KEY = 'ztable_theme_v1'
export const APP_MASS_UNIT_STORAGE_KEY = 'ztable_mass_unit_v1'
export const APP_ANIMATION_STORAGE_KEY = 'ztable_animation_v1'

export const RTL_LANGUAGES = new Set<AppLanguage>()

export const isSupportedLanguage = (value: string): value is AppLanguage => {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(value)
}
