import { CategoryFilters } from '@/components/table/CategoryFilters'
import { SearchInput } from '@/components/ui/SearchInput'
import type { ElementCategory } from '@/data/elements/elements'

export const PeriodicTableToolbar = ({
  activeCategory,
  matchCount,
  onChangeText,
  onClear,
  onFilter,
  placeholder,
  value,
}: {
  activeCategory: ElementCategory | null
  matchCount: number
  onChangeText: (value: string) => void
  onClear: () => void
  onFilter: (category: ElementCategory) => void
  placeholder: string
  value: string
}) => (
  <>
    <SearchInput value={value} onChangeText={onChangeText} placeholder={placeholder} />
    <CategoryFilters
      activeCategory={activeCategory}
      matchCount={matchCount}
      onFilter={onFilter}
      onClear={onClear}
    />
  </>
)
