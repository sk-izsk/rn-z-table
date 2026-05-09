import { DEFAULT_LANGUAGE } from '@/i18n/config'
import { enUI } from '@/i18n/ui/en'
import { frUI } from '@/i18n/ui/fr'
import i18n, { type i18n as I18nInstance } from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'

const resources = {
  en: {
    translation: enUI,
  },
  fr: {
    translation: frUI,
  },
} as const

let initPromise: Promise<I18nInstance> | null = null

export const ensureI18nReady = async (): Promise<I18nInstance> => {
  if (i18n.isInitialized) {
    return i18n
  }

  if (!initPromise) {
    initPromise = i18n.use(initReactI18next).init({
      resources,
      lng: DEFAULT_LANGUAGE,
      fallbackLng: DEFAULT_LANGUAGE,
      compatibilityJSON: 'v4',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    }).then(() => i18n)
  }

  return initPromise ?? i18n
}

export const setAppLanguage = async (language: string): Promise<void> => {
  await ensureI18nReady()
  if (i18n.language !== language) {
    await i18n.changeLanguage(language)
  }
}

export const useAppTranslation = useTranslation

export { i18n }
