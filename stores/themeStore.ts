import { APP_THEME_STORAGE_KEY } from '@/i18n/config'
import { zustandStorage } from '@/lib/async-storage'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'system' | 'light' | 'dark'

interface ThemeStoreState {
  themeMode: ThemeMode
  setThemeMode: (themeMode: ThemeMode) => void
}

export const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set) => ({
      themeMode: 'system',
      setThemeMode: (themeMode) => set({ themeMode }),
    }),
    {
      name: APP_THEME_STORAGE_KEY,
      storage: zustandStorage,
      partialize: (state) => ({ themeMode: state.themeMode }),
    },
  ),
)
