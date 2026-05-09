import { useCallback, useState } from 'react'

export const useAtomPanelState = () => {
  const [topView, setTopView] = useState(false)

  const reset = useCallback(() => {
    setTopView(false)
  }, [])

  return {
    topView,
    toggleTopView: () => setTopView((current) => !current),
    reset,
  }
}
