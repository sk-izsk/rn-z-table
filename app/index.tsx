import { AppHeader } from '@/components/nav/AppHeader'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { PeriodicTable } from '@/components/table/PeriodicTable'

const HomeRoute = () => (
  <Screen>
    <AppHeader />
    <PageIntro
      eyebrow="Table Matrix"
      title="Periodic Table"
      description="Searchable mobile table, localized filters, and dense native grid aligned with the source app."
    />
    <PeriodicTable />
  </Screen>
)

export default HomeRoute
