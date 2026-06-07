import { ACTINIDES, LANTHANIDES, MAIN_GRID_CELLS } from '@/data/periodicTableData'
import type { ElementCategory } from '@/data/elements/elements'
import { useLocalizedElementRecords } from '@/hooks/useLocalizedElementRecords'
import { matchesElementQuery } from '@/utils/tableSearch'
import { useMemo } from 'react'

export const usePeriodicTableMatches = ({
  filterCategory,
  searchQuery,
}: {
  filterCategory: ElementCategory | null
  searchQuery: string
}) => {
  const localizedElements = useLocalizedElementRecords()
  const hasFilter = Boolean(filterCategory) || searchQuery.trim().length > 0

  const matchedElementNumbers = useMemo(() => {
    if (!hasFilter) {
      return new Set<number>()
    }

    const seriesElements = [...LANTHANIDES, ...ACTINIDES]
    const matchedNumbers = MAIN_GRID_CELLS.flatMap((cell) => {
      if (cell.kind !== 'element') {
        return []
      }

      const locale = localizedElements[String(cell.element.n)]
      const matchesQuery = matchesElementQuery(cell.element, searchQuery, locale)
      const matchesCategory = !filterCategory || cell.element.cat === filterCategory
      return matchesQuery && matchesCategory ? [cell.element.n] : []
    })

    for (const element of seriesElements) {
      const locale = localizedElements[String(element.n)]
      const matchesQuery = matchesElementQuery(element, searchQuery, locale)
      const matchesCategory = !filterCategory || element.cat === filterCategory

      if (matchesQuery && matchesCategory) {
        matchedNumbers.push(element.n)
      }
    }

    return new Set(matchedNumbers)
  }, [filterCategory, hasFilter, localizedElements, searchQuery])

  return {
    hasFilter,
    matchedElementNumbers,
  }
}
