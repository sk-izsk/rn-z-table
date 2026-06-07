import type { Element, ElementCategory } from '@/data/elements/elements'
import {
  useFilterCategory,
  useSearchQuery,
  useSetFilterCategory,
  useSetSearchQuery,
} from '@/hooks/store/useTableStore'
import { useAppTranslation } from '@/i18n/localize'
import { useRouter } from 'expo-router'
import { useCallback } from 'react'
import { View } from 'react-native'
import { PeriodicTablePanel } from './components/PeriodicTablePanel'
import { PeriodicTableToolbar } from './components/PeriodicTableToolbar'
import { usePeriodicTableMatches } from './hooks/usePeriodicTableMatches'

const usePeriodicTableControls = () => {
  const searchQuery = useSearchQuery()
  const setSearchQuery = useSetSearchQuery()
  const filterCategory = useFilterCategory()
  const setFilterCategory = useSetFilterCategory()

  return {
    searchQuery,
    setSearchQuery,
    filterCategory,
    setFilterCategory,
  }
}

export const PeriodicTableFeature = () => {
  const router = useRouter()
  const { t } = useAppTranslation()
  const { searchQuery, setSearchQuery, filterCategory, setFilterCategory } =
    usePeriodicTableControls()
  const { hasFilter, matchedElementNumbers } = usePeriodicTableMatches({
    filterCategory,
    searchQuery,
  })

  const handleSelectElement = useCallback(
    (element: Element) => {
      router.push(`/element/${element.sym}`)
    },
    [router],
  )

  const handleFilter = useCallback(
    (category: ElementCategory) => {
      setFilterCategory(category)
    },
    [setFilterCategory],
  )

  return (
    <View>
      <PeriodicTableToolbar
        activeCategory={filterCategory}
        matchCount={matchedElementNumbers.size}
        onChangeText={setSearchQuery}
        onClear={() => setFilterCategory(null)}
        onFilter={handleFilter}
        placeholder={t('home.searchPlaceholder')}
        value={searchQuery}
      />
      <PeriodicTablePanel
        indexedLabel={t('home.indexed')}
        matrixLabel={t('home.matrix')}
        lanthanidesLabel={t('home.seriesLanthanides')}
        actinidesLabel={t('home.seriesActinides')}
        lanthanidesRangeLabel={t('home.seriesRangeLanthanides')}
        actinidesRangeLabel={t('home.seriesRangeActinides')}
        matchedElementNumbers={matchedElementNumbers}
        hasFilter={hasFilter}
        onPressElement={handleSelectElement}
      />
    </View>
  )
}
