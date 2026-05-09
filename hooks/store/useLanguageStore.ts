import { useLanguageStore } from '@/stores/languageStore'

export const useLanguage = () => useLanguageStore((state) => state.language)
export const useSetLanguage = () => useLanguageStore((state) => state.setLanguage)
