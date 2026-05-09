import { elementsBySymbol } from '@/data/elements/elements'
import { useLocalizedElementRecords } from '@/hooks/useLocalizedElementRecords'
import { toElementProfile } from '@/utils/elementProfile'
import { normalizeElementSearchParam } from '@/utils/elementModalUtils'
import { useMemo } from 'react'

const normalizeSymbolKey = (symbol: unknown): string => {
  const normalized = normalizeElementSearchParam(symbol)?.toLowerCase() ?? ''
  return normalized.charAt(0).toUpperCase() + normalized.slice(1)
}

export const useElementProfile = (symbol: unknown) => {
  const localizedElements = useLocalizedElementRecords()
  const element = elementsBySymbol[normalizeSymbolKey(symbol)]

  const profile = useMemo(() => {
    if (!element) {
      return null
    }

    return toElementProfile(element, localizedElements[String(element.n)])
  }, [element, localizedElements])

  return {
    element,
    profile,
  }
}
