import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { SettingsSection } from '@/components/ui/SettingsSection'
import type { ThemeMode } from '@/stores/themeStore'

export const SettingsThemeSection = ({
  onSetThemeMode,
  t,
  themeMode,
}: {
  onSetThemeMode: (value: ThemeMode) => void
  t: (key: string) => string
  themeMode: ThemeMode
}) => (
  <SettingsSection title={t('settings.theme')} description={t('settings.themeDescription')}>
    <SegmentedControl<ThemeMode>
      value={themeMode}
      onValueChange={onSetThemeMode}
      options={[
        { value: 'system', label: t('settings.system') },
        { value: 'light', label: t('common.light') },
        { value: 'dark', label: t('common.dark') },
      ]}
    />
  </SettingsSection>
)
