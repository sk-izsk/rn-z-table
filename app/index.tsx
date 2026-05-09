import { AppHeader } from '@/components/nav/AppHeader'
import { RouteTabs } from '@/components/nav/RouteTabs'
import { Panel } from '@/components/ui/Panel'
import { PageIntro } from '@/components/ui/PageIntro'
import { Screen } from '@/components/ui/Screen'
import { elements } from '@/data/elements/elements'
import { useAppTranslation } from '@/i18n/localize'
import { Text, View } from 'react-native'

export default function HomeRoute() {
  const { t } = useAppTranslation()

  return (
    <Screen>
      <AppHeader />
      <PageIntro
        eyebrow="Table Matrix"
        title="Periodic Table"
        description="Foundation wired. Next phase builds searchable native grid, localized filters, and full detail route."
      />
      <Panel>
        <View className="flex-row items-center justify-between">
          <Text className="text-xs font-bold uppercase tracking-[4px] text-slate-500">
            {t('nav.table')}
          </Text>
          <Text className="text-sm text-slate-500">{elements.length} elements indexed</Text>
        </View>
        <Text className="mt-4 text-[16px] leading-6 text-slate-600">
          Expo shell now points at chemistry app routes, not starter tabs. Domain data compiles from
          copied JSON and utility modules.
        </Text>
        <RouteTabs />
      </Panel>
    </Screen>
  )
}
