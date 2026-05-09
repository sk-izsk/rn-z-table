import { elementCellSize, ElementCell } from '@/components/table/ElementCell'
import { CategoryFilters } from '@/components/table/CategoryFilters'
import { Panel } from '@/components/ui/Panel'
import { SearchInput } from '@/components/ui/SearchInput'
import { ACTINIDES, LANTHANIDES, MAIN_GRID_CELLS } from '@/data/periodicTableData'
import { type Element, type ElementCategory } from '@/data/elements/elements'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { useLocalizedElementRecords } from '@/hooks/useLocalizedElementRecords'
import {
  useFilterCategory,
  useSearchQuery,
  useSetFilterCategory,
  useSetSearchQuery,
} from '@/hooks/store/useTableStore'
import { useAppTranslation } from '@/i18n/localize'
import { matchesElementQuery } from '@/utils/tableSearch'
import { useRouter } from 'expo-router'
import { memo, useCallback, useMemo } from 'react'
import { ScrollView, Text, View } from 'react-native'

const { width: cellWidth, height: cellHeight, gap } = elementCellSize
const gridWidth = 18 * cellWidth + 17 * gap
const gridHeight = 7 * cellHeight + 6 * gap

const PlaceholderCell = memo(({ label }: { label?: string }) => {
  const { colors } = useAppPalette()

  return (
    <View
      style={{
        width: cellWidth,
        height: cellHeight,
        backgroundColor: label ? colors.surfaceMuted : 'transparent',
      }}
      className="items-center justify-center rounded-[14px]"
    >
      {label ? (
        <Text style={{ color: colors.textMuted }} className="text-[12px] font-semibold">
          {label}
        </Text>
      ) : null}
    </View>
  )
})
PlaceholderCell.displayName = 'PlaceholderCell'

const SeriesRow = memo(
  ({
    title,
    elements,
    matchedNumbers,
    hasFilter,
    onPressElement,
  }: {
    title: string
    elements: Element[]
    matchedNumbers: Set<number>
    hasFilter: boolean
    onPressElement: (element: Element) => void
  }) => (
    <View className="mt-4">
      <Text className="mb-2 text-xs font-bold uppercase tracking-[4px] text-slate-500">
        {title}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-1.5 pr-1">
          {elements.map((element) => {
            const isMatch = matchedNumbers.has(element.n)
            return (
              <ElementCell
                key={element.n}
                element={element}
                dimmed={hasFilter && !isMatch}
                highlighted={hasFilter && isMatch}
                onPress={onPressElement}
              />
            )
          })}
        </View>
      </ScrollView>
    </View>
  ),
)
SeriesRow.displayName = 'SeriesRow'

export const PeriodicTable = () => {
  const router = useRouter()
  const { t } = useAppTranslation()
  const { colors } = useAppPalette()
  const searchQuery = useSearchQuery()
  const setSearchQuery = useSetSearchQuery()
  const filterCategory = useFilterCategory()
  const setFilterCategory = useSetFilterCategory()
  const localizedElements = useLocalizedElementRecords()

  const hasFilter = Boolean(filterCategory) || searchQuery.trim().length > 0

  const matchedElementNumbers = useMemo(() => {
    if (!hasFilter) {
      return new Set<number>()
    }

    return new Set(
      MAIN_GRID_CELLS.flatMap((cell) => {
        if (cell.kind !== 'element') {
          return []
        }

        const locale = localizedElements[String(cell.element.n)]
        const matchesQuery = matchesElementQuery(cell.element, searchQuery, locale)
        const matchesCategory = !filterCategory || cell.element.cat === filterCategory

        return matchesQuery && matchesCategory ? [cell.element.n] : []
      }).concat(
        [...LANTHANIDES, ...ACTINIDES]
          .filter((element) => {
            const locale = localizedElements[String(element.n)]
            const matchesQuery = matchesElementQuery(element, searchQuery, locale)
            const matchesCategory = !filterCategory || element.cat === filterCategory
            return matchesQuery && matchesCategory
          })
          .map((element) => element.n),
      ),
    )
  }, [filterCategory, hasFilter, localizedElements, searchQuery])

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
      <SearchInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={t('home.searchPlaceholder')}
      />

      <CategoryFilters
        activeCategory={filterCategory}
        matchCount={matchedElementNumbers.size}
        onFilter={handleFilter}
        onClear={() => setFilterCategory(null)}
      />

      <Panel className="overflow-hidden px-4 py-4">
        <View
          style={{ backgroundColor: colors.accentSoft }}
          className="absolute left-[-24] top-[-12] h-28 w-32 rounded-full opacity-60"
        />
        <View
          style={{ backgroundColor: colors.surfaceMuted }}
          className="absolute right-[-36] top-12 h-36 w-36 rounded-full opacity-80"
        />
        <View className="mb-3 flex-row items-center justify-between">
          <Text
            style={{ color: colors.textMuted }}
            className="text-xs font-bold uppercase tracking-[4px]"
          >
            {t('home.matrix')}
          </Text>
          <Text style={{ color: colors.textMuted }} className="text-sm">
            118 {t('home.indexed')}
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 14 }}
        >
          <View style={{ width: gridWidth }} className="pr-2">
            <View
              style={{
                width: gridWidth,
                height: gridHeight,
                borderColor: colors.line,
                backgroundColor: colors.surfaceMuted,
              }}
              className="relative rounded-[24px] border p-2"
            >
              {MAIN_GRID_CELLS.map((cell) => {
                const left = 8 + (cell.col - 1) * (cellWidth + gap)
                const top = 8 + (cell.row - 1) * (cellHeight + gap)

                if (cell.kind === 'placeholder') {
                  return (
                    <View key={cell.key} style={{ position: 'absolute', left, top }}>
                      <PlaceholderCell label={cell.label} />
                    </View>
                  )
                }

                const isMatch = matchedElementNumbers.has(cell.element.n)

                return (
                  <View key={cell.key} style={{ position: 'absolute', left, top }}>
                    <ElementCell
                      element={cell.element}
                      dimmed={hasFilter && !isMatch}
                      highlighted={hasFilter && isMatch}
                      onPress={handleSelectElement}
                    />
                  </View>
                )
              })}
            </View>

            <SeriesRow
              title={`${t('home.seriesLanthanides')} (${t('home.seriesRangeLanthanides')})`}
              elements={LANTHANIDES}
              matchedNumbers={matchedElementNumbers}
              hasFilter={hasFilter}
              onPressElement={handleSelectElement}
            />
            <SeriesRow
              title={`${t('home.seriesActinides')} (${t('home.seriesRangeActinides')})`}
              elements={ACTINIDES}
              matchedNumbers={matchedElementNumbers}
              hasFilter={hasFilter}
              onPressElement={handleSelectElement}
            />
          </View>
        </ScrollView>
      </Panel>
    </View>
  )
}
