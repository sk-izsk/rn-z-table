import { useCallback, useEffect, useState } from 'react'
import type { ElementIsotope } from '@/types/elementProfile'
import { LEVELS } from '@/utils/elementModalUtils'

export const useCardState = (elementNumber: number | undefined) => {
  const [activeCard, setActiveCard] = useState(0)
  const [selectedIsotope, setSelectedIsotope] = useState<ElementIsotope | null>(null)

  useEffect(() => {
    setActiveCard(0)
    setSelectedIsotope(null)
  }, [elementNumber])

  const goToCard = useCallback((nextCard: number) => {
    if (nextCard < 0 || nextCard >= LEVELS.length) {
      return
    }

    setActiveCard(nextCard)
  }, [])

  const goPrevCard = useCallback(() => {
    setActiveCard((current) => Math.max(0, current - 1))
  }, [])

  const goNextCard = useCallback(() => {
    setActiveCard((current) => Math.min(LEVELS.length - 1, current + 1))
  }, [])

  return {
    activeCard,
    selectedIsotope,
    setSelectedIsotope,
    goToCard,
    goPrevCard,
    goNextCard,
  }
}
