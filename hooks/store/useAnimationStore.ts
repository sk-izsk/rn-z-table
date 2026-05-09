import { useAnimationStore } from '@/stores/animationStore'

export const useAnimationSpeed = () => useAnimationStore((state) => state.animationSpeed)
export const useAnimationsPaused = () => useAnimationStore((state) => state.animationsPaused)
export const useSetAnimationSpeed = () => useAnimationStore((state) => state.setAnimationSpeed)
export const useSetAnimationsPaused = () => useAnimationStore((state) => state.setAnimationsPaused)
