import { AppHeader } from '@/components/nav/AppHeader'
import { WorksheetBuilder } from '@/components/tools/WorksheetBuilder'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { useAppTranslation } from '@/i18n/localize'

export default function WorksheetRoute() {
  const { t } = useAppTranslation()

  return (
    <Screen>
      <AppHeader />
      <PageIntro
        eyebrow={t('worksheet.eyebrow')}
        title={t('worksheet.title')}
        description={t('worksheet.description')}
      />
      <WorksheetBuilder />
    </Screen>
  )
}
