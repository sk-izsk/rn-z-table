import { bootstrapI18n } from '@/lib/i18n-bootstrap'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export const useAppBootstrap = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let mounted = true

    bootstrapI18n()
      .catch(() => undefined)
      .finally(() => {
        if (!mounted) {
          return
        }

        setReady(true)
        SplashScreen.hideAsync().catch(() => undefined)
      })

    return () => {
      mounted = false
    }
  }, [])

  return ready
}
