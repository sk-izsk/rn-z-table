import { AppHeader } from '@/components/nav/AppHeader'
import { AppDrawer } from '@/components/nav/AppDrawer'
import { IonReferenceList } from '@/components/tools/IonReferenceList'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { useAppTranslation } from '@/i18n/localize'
import { useState } from 'react'

export default function IonsRoute() {
  const { t } = useAppTranslation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Screen>
      <AppHeader onMenuPress={() => setDrawerOpen(true)} />
      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <PageIntro
        eyebrow={t('ions.eyebrow')}
        title={t('ions.title')}
        description={t('ions.description')}
      />
      <IonReferenceList />
    </Screen>
  )
}
