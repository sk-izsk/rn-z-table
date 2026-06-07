import type { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { Panel } from '@/components/ui/Panel'
import { ScrollHint } from '@/components/ui/ScrollHint'
import type { ElementProfile } from '@/types/elementProfile'
import { View } from 'react-native'
import { ElementHistoryScroll } from './ElementStaticCards'

export const ElementHistoryCard = ({
  activeCard,
  cardWidth,
  hintStrength,
  onContentSizeChange,
  onLayout,
  onScroll,
  profile,
  scrollRef,
  showHint,
  t,
}: {
  activeCard: number
  cardWidth: number
  hintStrength: number
  onContentSizeChange: (width: number, height: number) => void
  onLayout: (event: LayoutChangeEvent) => void
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  profile: ElementProfile
  scrollRef: React.RefObject<any>
  showHint: boolean
  t: (key: string) => string
}) => (
  <View style={{ width: cardWidth }}>
    <View className="relative">
      <Panel className="mb-0 min-h-[420px]">
        <ElementHistoryScroll
          onContentSizeChange={onContentSizeChange}
          onLayout={onLayout}
          onScroll={onScroll}
          profile={profile}
          scrollRef={scrollRef}
          t={t}
        />
      </Panel>
      <ScrollHint
        visible={showHint && activeCard === 3}
        strength={hintStrength}
        onPress={() => scrollRef.current?.scrollTo({ y: 220, animated: true })}
      />
    </View>
  </View>
)
