import { SHELL_NAMES } from '@/utils/atomModel'
import { Text, View } from 'react-native'
import { AtomPanelFooterProps } from './AtomPanelFooter'

const ShellChip = ({ electrons, label }: { electrons: number; label: string }) => (
  <View className="rounded-full border border-[#d7e4ed] bg-white px-3 py-1.5">
    <Text className="text-[12px] font-semibold text-slate-600">
      {label} · {electrons}e
    </Text>
  </View>
)

export const AtomPanelShellList = ({ shells }: Pick<AtomPanelFooterProps, 'shells'>) => (
  <View className="mb-4 flex-row flex-wrap gap-2">
    {shells.map((count, index) => (
      <ShellChip
        key={`${SHELL_NAMES[index] ?? index}-${count}`}
        label={SHELL_NAMES[index] ?? `S${index + 1}`}
        electrons={count}
      />
    ))}
  </View>
)
