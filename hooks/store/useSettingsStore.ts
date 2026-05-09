import { useMassUnitStore } from '@/stores/massUnitStore'

export const useMassUnit = () => useMassUnitStore((state) => state.massUnit)
export const useSetMassUnit = () => useMassUnitStore((state) => state.setMassUnit)
