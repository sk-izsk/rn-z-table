import { APP_ANIMATION_STORAGE_KEY } from '@/i18n/config'
import { zustandStorage } from '@/lib/async-storage'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AnimationStoreState {
  animationSpeed: number
  animationsPaused: boolean
  setAnimationSpeed: (speed: number) => void
  setAnimationsPaused: (paused: boolean) => void
}

const clampAnimationSpeed = (speed: number): number => Math.max(0.1, Math.min(2, speed))

export const useAnimationStore = create<AnimationStoreState>()(
  persist(
    (set) => ({
      animationSpeed: 0.3,
      animationsPaused: false,
      setAnimationSpeed: (animationSpeed) =>
        set({ animationSpeed: clampAnimationSpeed(animationSpeed) }),
      setAnimationsPaused: (animationsPaused) => set({ animationsPaused }),
    }),
    {
      name: APP_ANIMATION_STORAGE_KEY,
      storage: zustandStorage,
      partialize: (state) => ({
        animationSpeed: state.animationSpeed,
        animationsPaused: state.animationsPaused,
      }),
    },
  ),
)
