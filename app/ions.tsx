import { AppHeader } from '@/components/nav/AppHeader'
import { RouteTabs } from '@/components/nav/RouteTabs'
import { IonReferenceList } from '@/components/tools/IonReferenceList'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { useAppTranslation } from '@/i18n/localize'

export default function IonsRoute() {
  const { t } = useAppTranslation()

  return (
    <Screen>
      <AppHeader />
      <RouteTabs />
      <PageIntro
        eyebrow={t('ions.eyebrow')}
        title={t('ions.title')}
        description={t('ions.description')}
      />
      <IonReferenceList />
    </Screen>
  )
}
