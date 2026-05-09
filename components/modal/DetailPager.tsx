import { LEVELS } from '@/utils/elementModalUtils'
import { useAppPalette } from '@/hooks/store/useAppPalette'
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
  const { colors } = useAppPalette()

  return (
    <View className="mt-3 px-1">
      <View className="mb-2 flex-row items-center justify-between">
        <Text
          style={{ color: colors.textMuted }}
          className="text-[11px] font-bold uppercase tracking-[3px]"
        >
          {t('modal.cardPager')}
        </Text>
        <Text style={{ color: colors.textMuted }} className="text-[12px] font-semibold">
          {activeCard + 1} / {LEVELS.length}
        </Text>
      </View>
      <View
        style={{
          borderColor: colors.line,
          backgroundColor: colors.surface,
        }}
        className="flex-row items-center justify-center gap-3 rounded-[22px] border px-4 py-3"
      >
        <Pressable
          onPress={onPrev}
          disabled={activeCard === 0}
          style={{
            borderColor: colors.line,
            backgroundColor: activeCard === 0 ? colors.surfaceMuted : colors.surface,
            opacity: activeCard === 0 ? 0.55 : 1,
          }}
          className="h-9 w-9 items-center justify-center rounded-full border"
        >
          <Text style={{ color: colors.textMuted }}>{'<'}</Text>
        </Pressable>
        {LEVELS.map((level, index) => {
          const active = index === activeCard
          return (
            <Pressable
              key={level}
              onPress={() => onSelect(index)}
              style={{ backgroundColor: active ? colors.accent : colors.line }}
              className="h-3 w-3 rounded-full"
            />
          )
        })}
        <Pressable
          onPress={onNext}
          disabled={activeCard === LEVELS.length - 1}
          style={{
            borderColor: colors.line,
            backgroundColor:
              activeCard === LEVELS.length - 1 ? colors.surfaceMuted : colors.surface,
            opacity: activeCard === LEVELS.length - 1 ? 0.55 : 1,
          }}
          className="h-9 w-9 items-center justify-center rounded-full border"
        >
          <Text style={{ color: colors.textMuted }}>{'>'}</Text>
        </Pressable>
      </View>
    </View>
  )
}
