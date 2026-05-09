import { APP_MASS_UNIT_STORAGE_KEY } from '@/i18n/config'
import { zustandStorage } from '@/lib/async-storage'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type MassUnit = 'highSchool' | 'universityConventional'

interface MassUnitStoreState {
  massUnit: MassUnit
  setMassUnit: (unit: MassUnit) => void
}

export const useMassUnitStore = create<MassUnitStoreState>()(
  persist(
    (set) => ({
      massUnit: 'highSchool',
      setMassUnit: (massUnit) => set({ massUnit }),
    }),
    {
      name: APP_MASS_UNIT_STORAGE_KEY,
      storage: zustandStorage,
      partialize: (state) => ({ massUnit: state.massUnit }),
    },
  ),
)
