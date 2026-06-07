import { useScrollHint } from '@/hooks/useScrollHint'
import { useRef } from 'react'
import { ScrollView, useWindowDimensions } from 'react-native'

export const useElementDetailPager = () => {
  const { width } = useWindowDimensions()
  const cardWidth = Math.max(280, width - 36)
  const pagerRef = useRef<ScrollView | null>(null)
  const verticalScrollRef = useRef<ScrollView | null>(null)

  return {
    cardWidth,
    pagerRef,
    verticalScrollRef,
    ...useScrollHint(),
  }
}
