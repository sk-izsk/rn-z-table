import { AppHeader } from '@/components/nav/AppHeader'
import { PageIntro } from '@/components/ui/PageIntro'
import { Panel } from '@/components/ui/Panel'
import { Screen } from '@/components/ui/Screen'
import { ionsData } from '@/data/ions/data'
import { Text } from 'react-native'

export default function IonsRoute() {
  return (
    <Screen>
      <AppHeader />
      <PageIntro
        eyebrow="Reference Deck"
        title="Common Ions"
        description="Grouped ion reference will use native lists and locale overlays from copied data."
      />
      <Panel>
        <Text className="text-[16px] leading-6 text-slate-600">
          {ionsData.length} ions ready in root data layer. Next phase wires grouped sections and
          localized labels.
        </Text>
      </Panel>
    </Screen>
  )
}
