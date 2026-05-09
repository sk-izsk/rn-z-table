import { AppHeader } from '@/components/nav/AppHeader'
import { PageIntro } from '@/components/ui/PageIntro'
import { Panel } from '@/components/ui/Panel'
import { Screen } from '@/components/ui/Screen'
import { Text } from 'react-native'

export default function ToolsRoute() {
  return (
    <Screen>
      <AppHeader />
      <PageIntro
        eyebrow="Lab Console"
        title="Chemistry Tools"
        description="Molar mass, equation balancing, and solubility lookup land in next implementation phase."
      />
      <Panel>
        <Text className="text-[16px] leading-6 text-slate-600">
          Logic modules already exist in `utils/`. UI still needs native adapters and async compute
          boundary for balancer.
        </Text>
      </Panel>
    </Screen>
  )
}
