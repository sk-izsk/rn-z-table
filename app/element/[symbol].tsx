import { AppHeader } from '@/components/nav/AppHeader'
import { PageIntro } from '@/components/ui/PageIntro'
import { Panel } from '@/components/ui/Panel'
import { Screen } from '@/components/ui/Screen'
import { useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native'

export default function ElementDetailRoute() {
  const { symbol } = useLocalSearchParams<{ symbol: string }>()

  return (
    <Screen>
      <AppHeader />
      <PageIntro
        eyebrow="Element Detail"
        title={symbol?.toUpperCase() ?? 'Element'}
        description="Route exists. Multi-card detail flow, atom renderer, and scroll affordance system come in next phase."
      />
      <Panel>
        <Text className="text-[16px] leading-6 text-slate-600">
          Native detail route is now reserved behind Expo Router modal presentation.
        </Text>
      </Panel>
    </Screen>
  )
}
