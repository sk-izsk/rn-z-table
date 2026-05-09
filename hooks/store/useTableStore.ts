import { useElementSelectionStore } from '@/stores/elementSelectionStore'
import { useFilterStore } from '@/stores/filterStore'
import { useSearchStore } from '@/stores/searchStore'

export const useSelectedElement = () => useElementSelectionStore((state) => state.selectedElement)
export const useSetSelectedElement = () =>
  useElementSelectionStore((state) => state.setSelectedElement)
export const useFilterCategory = () => useFilterStore((state) => state.filterCategory)
export const useSetFilterCategory = () => useFilterStore((state) => state.setFilterCategory)
export const useSearchQuery = () => useSearchStore((state) => state.searchQuery)
export const useSetSearchQuery = () => useSearchStore((state) => state.setSearchQuery)
