import { LEVELS } from '@/utils/elementModalUtils'
import { Pressable, Text, View } from 'react-native'

type DetailPagerProps = {
  activeCard: number
  onPrev: () => void
  onNext: () => void
  onSelect: (index: number) => void
}

export const DetailPager = ({ activeCard, onPrev, onNext, onSelect }: DetailPagerProps) => {
  return (
    <View className="mt-4 flex-row items-center justify-center gap-3">
      <Pressable
        onPress={onPrev}
        disabled={activeCard === 0}
        className={`h-9 w-9 items-center justify-center rounded-full border ${
          activeCard === 0 ? 'border-[#dfe8ee] bg-[#f6fafc]' : 'border-[#cfe0ea] bg-white'
        }`}
      >
        <Text className={activeCard === 0 ? 'text-slate-300' : 'text-slate-500'}>{'<'}</Text>
      </Pressable>
      {LEVELS.map((level, index) => {
        const active = index === activeCard
        return (
          <Pressable
            key={level}
            onPress={() => onSelect(index)}
            className={`h-3 w-3 rounded-full ${active ? 'bg-accent' : 'bg-[#d9e4eb]'}`}
          />
        )
      })}
      <Pressable
        onPress={onNext}
        disabled={activeCard === LEVELS.length - 1}
        className={`h-9 w-9 items-center justify-center rounded-full border ${
          activeCard === LEVELS.length - 1
            ? 'border-[#dfe8ee] bg-[#f6fafc]'
            : 'border-[#cfe0ea] bg-white'
        }`}
      >
        <Text className={activeCard === LEVELS.length - 1 ? 'text-slate-300' : 'text-slate-500'}>
          {'>'}
        </Text>
      </Pressable>
    </View>
  )
}
