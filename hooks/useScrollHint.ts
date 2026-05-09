import { useCallback, useMemo, useState } from 'react'
import type { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'

const EDGE_TOLERANCE = 12

export const useScrollHint = () => {
  const [layoutHeight, setLayoutHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setLayoutHeight(event.nativeEvent.layout.height)
  }, [])

  const onContentSizeChange = useCallback((_: number, height: number) => {
    setContentHeight(height)
  }, [])

  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setHasInteracted(true)
    setScrollY(event.nativeEvent.contentOffset.y)
  }, [])

  const canScroll = contentHeight > layoutHeight + EDGE_TOLERANCE
  const atBottom = scrollY + layoutHeight >= contentHeight - EDGE_TOLERANCE

  const showHint = useMemo(() => canScroll && !atBottom, [atBottom, canScroll])
  const hintStrength = useMemo(() => (hasInteracted ? 0.65 : 1), [hasInteracted])

  return {
    showHint,
    hintStrength,
    canScroll,
    onLayout,
    onContentSizeChange,
    onScroll,
  }
}
