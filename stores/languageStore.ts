import { APP_LANGUAGE_STORAGE_KEY, DEFAULT_LANGUAGE, isSupportedLanguage } from '@/i18n/config'
import type { AppLanguage } from '@/i18n/types'
import { zustandStorage } from '@/lib/async-storage'
import { setAppLanguage } from '@/i18n/localize'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface LanguageStoreState {
  language: AppLanguage
  setLanguage: (language: AppLanguage) => Promise<void>
}

export const useLanguageStore = create<LanguageStoreState>()(
  persist(
    (set) => ({
      language: DEFAULT_LANGUAGE,
      setLanguage: async (language) => {
        if (!isSupportedLanguage(language)) {
          return
        }

        await setAppLanguage(language)
        set({ language })
      },
    }),
    {
      name: APP_LANGUAGE_STORAGE_KEY,
      storage: zustandStorage,
      partialize: (state) => ({ language: state.language }),
      merge: (persisted, current) => {
        const nextState = { ...current, ...(persisted as Partial<LanguageStoreState>) }
        return {
          ...nextState,
          language: isSupportedLanguage(nextState.language) ? nextState.language : DEFAULT_LANGUAGE,
        }
      },
    },
  ),
)
