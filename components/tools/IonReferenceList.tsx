import { ToolCard } from '@/components/tools/ToolCard'
import { groupIonsBySection, sectionOrder } from '@/data/ions/selectors'
import { ionsData, ION_SECTION_LABELS } from '@/data/ions/data'
import { useAppPalette } from '@/hooks/store/useAppPalette'
import { useAppTranslation } from '@/i18n/localize'
import type { IonRecord } from '@/types/ions'
import { formatFormulaDisplay } from '@/utils/chemicalDisplay'
import { useMemo, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

const IonRow = ({ ion }: { ion: IonRecord }) => {
  const { colors } = useAppPalette()

  return (
    <View
      style={{
        borderColor: colors.line,
        backgroundColor: colors.surface,
      }}
      className="rounded-[18px] border border-[#d8e5ed] bg-white px-4 py-4"
    >
      <Text style={{ color: colors.accent }} className="text-[28px] font-black tracking-[-0.5px]">
        {formatFormulaDisplay(ion.formula)}
      </Text>
      <Text style={{ color: colors.text }} className="mt-2 text-[18px] font-semibold">
        {ion.name}
      </Text>
      <View className="mt-3 flex-row gap-2">
        {[ion.type, ion.category].map((label) => (
          <View
            key={label}
            style={{
              borderColor: colors.line,
              backgroundColor: colors.surfaceMuted,
            }}
            className="rounded-full border border-[#d7e4ed] bg-[#f7fbfd] px-3 py-1.5"
          >
            <Text style={{ color: colors.textMuted }} className="text-[12px] font-semibold">
              {label}
            </Text>
          </View>
        ))}
      </View>
      <Text style={{ color: colors.textMuted }} className="mt-3 text-[14px]">
        {ion.mass.toFixed(2)} g/mol
      </Text>
    </View>
  )
}

export const IonReferenceList = () => {
  const { t, i18n } = useAppTranslation()
  const { colors } = useAppPalette()
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) {
      return ionsData
    }

    return ionsData.filter((ion) => {
      return (
        ion.name.toLowerCase().includes(normalized) ||
        ion.formula.toLowerCase().includes(normalized) ||
        ion.type.toLowerCase().includes(normalized) ||
        ion.category.toLowerCase().includes(normalized)
      )
    })
  }, [query])

  const grouped = useMemo(() => groupIonsBySection(filtered), [filtered])

  return (
    <View>
      <View
        style={{
          borderColor: colors.line,
          backgroundColor: colors.surface,
        }}
        className="mb-4 rounded-[18px] border border-[#d7e4ed] bg-white px-4 py-3"
      >
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder={t('ions.searchPlaceholder')}
          placeholderTextColor={colors.textMuted}
          style={{ color: colors.text }}
          className="text-[16px]"
        />
      </View>

      {sectionOrder().map((sectionKey) => {
        const items = grouped[sectionKey]
        if (items.length === 0) {
          return null
        }

        const title =
          i18n.language === 'fr' ? t(`ions.sections.${sectionKey}`) : ION_SECTION_LABELS[sectionKey]

        return (
          <ToolCard
            key={sectionKey}
            title={title}
            description={`${items.length} ${t('ions.itemsReady')}`}
          >
            <View className="gap-3">
              {items.map((ion) => (
                <Pressable key={ion.id}>
                  <IonRow ion={ion} />
                </Pressable>
              ))}
            </View>
          </ToolCard>
        )
      })}
    </View>
  )
}
