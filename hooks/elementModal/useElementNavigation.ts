import { elements } from '@/data/elements/elements'
import { useRouter } from 'expo-router'
import { useMemo } from 'react'

export const useElementNavigation = (atomicNumber: number | undefined) => {
  const router = useRouter()

  const currentIndex = useMemo(
    () => elements.findIndex((element) => element.n === atomicNumber),
    [atomicNumber],
  )

  const prevElement = currentIndex > 0 ? elements[currentIndex - 1] : null
  const nextElement =
    currentIndex >= 0 && currentIndex < elements.length - 1 ? elements[currentIndex + 1] : null

  return {
    prevElement,
    nextElement,
    hasPrev: Boolean(prevElement),
    hasNext: Boolean(nextElement),
    navigatePrev: () => {
      if (prevElement) {
        router.replace(`/element/${prevElement.sym}`)
      }
    },
    navigateNext: () => {
      if (nextElement) {
        router.replace(`/element/${nextElement.sym}`)
      }
    },
  }
}
