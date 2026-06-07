import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { SettingsSection } from '@/components/ui/SettingsSection'
import type { AppLanguage } from '@/i18n/types'

export const SettingsLanguageSection = ({
  language,
  onSetLanguage,
  t,
}: {
  language: AppLanguage
  onSetLanguage: (value: AppLanguage) => Promise<void>
  t: (key: string) => string
}) => (
  <SettingsSection title={t('settings.language')} description={t('settings.languageDescription')}>
    <SegmentedControl<AppLanguage>
      value={language}
      onValueChange={(value) => {
        void onSetLanguage(value)
      }}
      options={[
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'Francais' },
      ]}
    />
  </SettingsSection>
)
