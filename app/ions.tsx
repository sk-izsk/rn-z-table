import { AppHeader } from '@/components/nav/AppHeader'
import { IonReferenceList } from '@/components/tools/IonReferenceList'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { useAppTranslation } from '@/i18n/localize'

const IonsRoute = () => {
  const { t } = useAppTranslation()

  return (
    <Screen>
      <AppHeader />
      <PageIntro
        eyebrow={t('ions.eyebrow')}
        title={t('ions.title')}
        description={t('ions.description')}
      />
      <IonReferenceList />
    </Screen>
  )
}

export default IonsRoute
