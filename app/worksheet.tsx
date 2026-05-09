import { AppHeader } from '@/components/nav/AppHeader'
import { PageIntro } from '@/components/ui/PageIntro'
import { Panel } from '@/components/ui/Panel'
import { Screen } from '@/components/ui/Screen'
import { Text } from 'react-native'

export default function WorksheetRoute() {
  return (
    <Screen>
      <AppHeader />
      <PageIntro
        eyebrow="Print Lab"
        title="Worksheet Generator"
        description="Native flow will generate equations, package answer key, then export through share/save actions."
      />
      <Panel>
        <Text className="text-[16px] leading-6 text-slate-600">
          Browser-only PDF path stays out. Native export service comes later behind worksheet screen
          boundary.
        </Text>
      </Panel>
    </Screen>
  )
}
