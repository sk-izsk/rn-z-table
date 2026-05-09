import { APP_LANGUAGE_STORAGE_KEY, DEFAULT_LANGUAGE, isSupportedLanguage } from '@/i18n/config'
import { ensureI18nReady, setAppLanguage } from '@/i18n/localize'
import { readPersistedStoreState } from '@/lib/async-storage'

type PersistedLanguageState = {
  language?: string
}

let bootstrapPromise: Promise<void> | null = null

export const bootstrapI18n = async (): Promise<void> => {
  if (!bootstrapPromise) {
    bootstrapPromise = (async () => {
      await ensureI18nReady()
      const persisted =
        await readPersistedStoreState<PersistedLanguageState>(APP_LANGUAGE_STORAGE_KEY)
      const language = persisted?.language
      const nextLanguage = language && isSupportedLanguage(language) ? language : DEFAULT_LANGUAGE
      await setAppLanguage(nextLanguage)
    })()
  }

  await bootstrapPromise
}
