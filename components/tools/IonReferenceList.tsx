import { ToolCard } from '@/components/tools/ToolCard'
import { groupIonsBySection, sectionOrder } from '@/data/ions/selectors'
import { ionsData, ION_SECTION_LABELS } from '@/data/ions/data'
import { useAppTranslation } from '@/i18n/localize'
import type { IonRecord } from '@/types/ions'
import { formatFormulaDisplay } from '@/utils/chemicalDisplay'
import { useMemo, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

const IonRow = ({ ion }: { ion: IonRecord }) => (
  <View className="rounded-[18px] border border-[#d8e5ed] bg-white px-4 py-4">
    <Text className="text-[28px] font-black tracking-[-0.5px] text-accent">
      {formatFormulaDisplay(ion.formula)}
    </Text>
    <Text className="mt-2 text-[18px] font-semibold text-ink">{ion.name}</Text>
    <View className="mt-3 flex-row gap-2">
      <View className="rounded-full border border-[#d7e4ed] bg-[#f7fbfd] px-3 py-1.5">
        <Text className="text-[12px] font-semibold text-slate-500">{ion.type}</Text>
      </View>
      <View className="rounded-full border border-[#d7e4ed] bg-[#f7fbfd] px-3 py-1.5">
        <Text className="text-[12px] font-semibold text-slate-500">{ion.category}</Text>
      </View>
    </View>
    <Text className="mt-3 text-[14px] text-slate-500">{ion.mass.toFixed(2)} g/mol</Text>
  </View>
)

export const IonReferenceList = () => {
  const { t, i18n } = useAppTranslation()
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
      <View className="mb-4 rounded-[18px] border border-[#d7e4ed] bg-white px-4 py-3">
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder={t('ions.searchPlaceholder')}
          placeholderTextColor="#8b9bae"
          className="text-[16px] text-ink"
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
