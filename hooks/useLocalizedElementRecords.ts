import { loadElementLocale } from '@/i18n/locale-loaders'
import type { ElementLocaleRecord } from '@/i18n/types'
import { useLanguage } from '@/hooks/store/useLanguageStore'
import { useEffect, useState } from 'react'

export const useLocalizedElementRecords = () => {
  const language = useLanguage()
  const [records, setRecords] = useState<Record<string, ElementLocaleRecord>>({})

  useEffect(() => {
    let mounted = true

    loadElementLocale(language).then((nextRecords) => {
      if (mounted) {
        setRecords(nextRecords)
      }
    })

    return () => {
      mounted = false
    }
  }, [language])

  return records
}
