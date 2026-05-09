import { LEVELS } from '@/utils/elementModalUtils'
import { useAppTranslation } from '@/i18n/localize'
import { Pressable, Text, View } from 'react-native'

type DetailPagerProps = {
  activeCard: number
  onPrev: () => void
  onNext: () => void
  onSelect: (index: number) => void
}

export const DetailPager = ({ activeCard, onPrev, onNext, onSelect }: DetailPagerProps) => {
  const { t } = useAppTranslation()

  return (
    <View className="mt-4 rounded-[22px] border border-[#d9e6ee] bg-white/88 px-4 py-3">
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="text-[11px] font-bold uppercase tracking-[3px] text-slate-400">
          {t('modal.cardPager')}
        </Text>
        <Text className="text-[12px] font-semibold text-slate-500">
          {activeCard + 1} / {LEVELS.length}
        </Text>
      </View>
      <View className="flex-row items-center justify-center gap-3">
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
    </View>
  )
}
