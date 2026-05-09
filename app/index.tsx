import { AppHeader } from '@/components/nav/AppHeader'
import { RouteTabs } from '@/components/nav/RouteTabs'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { PeriodicTable } from '@/components/table/PeriodicTable'
import { useAppTranslation } from '@/i18n/localize'

export default function HomeRoute() {
  const { t } = useAppTranslation()

  return (
    <Screen>
      <AppHeader />
      <RouteTabs />
      <PageIntro
        eyebrow={t('home.eyebrow')}
        title={t('home.title')}
        description={t('home.description')}
      />
      <PeriodicTable />
    </Screen>
  )
}
