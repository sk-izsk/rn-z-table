import { Chip } from '@/components/ui/Chip'
import { Panel } from '@/components/ui/Panel'
import { CATEGORY_ENTRIES } from '@/data/periodicTableData'
import { CATEGORY_COLORS, type ElementCategory } from '@/data/elements/elements'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { useAppTranslation } from '@/i18n/localize'
import { ScrollView, Text, View } from 'react-native'

type CategoryFiltersProps = {
  activeCategory: ElementCategory | null
  matchCount: number
  onFilter: (category: ElementCategory) => void
  onClear: () => void
}

export const CategoryFilters = ({
  activeCategory,
  matchCount,
  onFilter,
  onClear,
}: CategoryFiltersProps) => {
  const { t } = useAppTranslation()
  const { colors } = useAppPalette()

  return (
    <View className="mb-4">
      <View className="mb-2 flex-row items-center justify-between">
        <Text
          style={{ color: colors.textMuted }}
          className="text-xs font-bold uppercase tracking-[4px]"
        >
          {t('home.filters')}
        </Text>
        {activeCategory ? (
          <Text onPress={onClear} className="text-xs font-semibold text-accent">
            {t('home.clear')}
          </Text>
        ) : null}
      </View>

      <Panel className="px-3 py-3">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Chip label={t('home.allElements')} active={activeCategory === null} onPress={onClear} />
          {CATEGORY_ENTRIES.map(([category, label]) => (
            <Chip
              key={category}
              label={label}
              color={CATEGORY_COLORS[category]}
              active={activeCategory === category}
              onPress={() => onFilter(category)}
            />
          ))}
        </ScrollView>
      </Panel>

      {activeCategory ? (
        <View
          style={{
            borderColor: colors.line,
            backgroundColor: colors.surfaceMuted,
          }}
          className="mt-2 rounded-[18px] border border-[#d6e5ed] bg-white/75 px-4 py-3"
        >
          <Text style={{ color: colors.textMuted }} className="text-[13px] leading-5">
            {t('home.mobileHintPrefix')} {matchCount} {t('home.mobileHintSuffix')}
          </Text>
        </View>
      ) : null}
    </View>
  )
}
