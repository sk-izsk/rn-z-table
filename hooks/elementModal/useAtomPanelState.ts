import { useCallback, useState } from 'react'

export const useAtomPanelState = () => {
  const [paused, setPaused] = useState(false)
  const [topView, setTopView] = useState(false)

  const reset = useCallback(() => {
    setPaused(false)
    setTopView(false)
  }, [])

  return {
    paused,
    topView,
    togglePaused: () => setPaused((current) => !current),
    toggleTopView: () => setTopView((current) => !current),
    reset,
  }
}
