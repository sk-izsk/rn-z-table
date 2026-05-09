import { AppHeader } from '@/components/nav/AppHeader'
import { AppDrawer } from '@/components/nav/AppDrawer'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { PeriodicTable } from '@/components/table/PeriodicTable'
import { useAppTranslation } from '@/i18n/localize'
import { useState } from 'react'

export default function HomeRoute() {
  const { t } = useAppTranslation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Screen>
      <AppHeader onMenuPress={() => setDrawerOpen(true)} />
      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <PageIntro
        eyebrow={t('home.eyebrow')}
        title={t('home.title')}
        description={t('home.description')}
      />
      <PeriodicTable />
    </Screen>
  )
}
