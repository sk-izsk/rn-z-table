import { AppHeader } from '@/components/nav/AppHeader'
import { AppDrawer } from '@/components/nav/AppDrawer'
import { WorksheetBuilder } from '@/components/tools/WorksheetBuilder'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { useAppTranslation } from '@/i18n/localize'
import { useState } from 'react'

export default function WorksheetRoute() {
  const { t } = useAppTranslation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Screen>
      <AppHeader onMenuPress={() => setDrawerOpen(true)} />
      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <PageIntro
        eyebrow={t('worksheet.eyebrow')}
        title={t('worksheet.title')}
        description={t('worksheet.description')}
      />
      <WorksheetBuilder />
    </Screen>
  )
}
