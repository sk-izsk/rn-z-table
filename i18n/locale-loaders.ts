import type { AppLanguage, ElementLocaleRecord, IonLocaleRecord } from './types'

const elementLocaleCache: Partial<Record<AppLanguage, Record<string, ElementLocaleRecord>>> = {}
const ionLocaleCache: Partial<Record<AppLanguage, Record<string, IonLocaleRecord>>> = {}

const elementLoaders: Record<AppLanguage, () => Promise<Record<string, ElementLocaleRecord>>> = {
  en: async () => (await import('./locales/elements/en')).default,
  fr: async () => (await import('./locales/elements/fr')).default,
}

const ionLoaders: Record<AppLanguage, () => Promise<Record<string, IonLocaleRecord>>> = {
  en: () => Promise.resolve({}),
  fr: async () => (await import('./locales/ions/fr')).default,
}

const mergeElementRecord = (
  base: ElementLocaleRecord | undefined,
  override: ElementLocaleRecord,
): ElementLocaleRecord => ({
  ...base,
  ...override,
  history:
    base?.history || override.history
      ? {
          ...base?.history,
          ...override.history,
        }
      : undefined,
  stse: override.stse ?? base?.stse,
  uses: override.uses ?? base?.uses,
  hazards: override.hazards ?? base?.hazards,
})

const mergeElementLocales = (
  base: Record<string, ElementLocaleRecord>,
  override: Record<string, ElementLocaleRecord>,
): Record<string, ElementLocaleRecord> => {
  const merged: Record<string, ElementLocaleRecord> = { ...base }

  for (const [key, record] of Object.entries(override)) {
    merged[key] = mergeElementRecord(base[key], record)
  }

  return merged
}

export const loadElementLocale = async (
  language: AppLanguage,
): Promise<Record<string, ElementLocaleRecord>> => {
  if (!elementLocaleCache[language]) {
    const locale = await elementLoaders[language]()
    if (language === 'en') {
      elementLocaleCache.en = locale
    } else {
      const englishLocale = elementLocaleCache.en ?? (await elementLoaders.en())
      elementLocaleCache.en = englishLocale
      elementLocaleCache[language] = mergeElementLocales(englishLocale, locale)
    }
  }

  return elementLocaleCache[language] ?? {}
}

export const loadIonLocale = async (
  language: AppLanguage,
): Promise<Record<string, IonLocaleRecord>> => {
  if (!ionLocaleCache[language]) {
    ionLocaleCache[language] = await ionLoaders[language]()
  }

  return ionLocaleCache[language] ?? {}
}
