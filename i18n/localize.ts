import { DEFAULT_LANGUAGE } from '@/i18n/config'
import { enUI } from '@/i18n/ui/en'
import { frUI } from '@/i18n/ui/fr'
import { createInstance, type i18n as I18nInstance } from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'

const resources = {
  en: {
    translation: enUI,
  },
  fr: {
    translation: frUI,
  },
} as const

const i18next = createInstance()

let initPromise: Promise<I18nInstance> | null = null

export const ensureI18nReady = (): Promise<I18nInstance> => {
  if (i18next.isInitialized) {
    return Promise.resolve(i18next)
  }

  if (!initPromise) {
    initPromise = i18next
      .use(initReactI18next)
      .init({
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
      })
      .then(() => i18next)
  }

  return initPromise ?? i18next
}

export const setAppLanguage = async (language: string): Promise<void> => {
  await ensureI18nReady()
  if (i18next.language !== language) {
    await i18next.changeLanguage(language)
  }
}

export const useAppTranslation = useTranslation

export { i18next as i18n }
