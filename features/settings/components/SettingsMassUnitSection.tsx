import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { SettingsSection } from '@/components/ui/SettingsSection'
import type { MassUnit } from '@/stores/massUnitStore'

export const SettingsMassUnitSection = ({
  massUnit,
  onSetMassUnit,
  t,
}: {
  massUnit: MassUnit
  onSetMassUnit: (value: MassUnit) => void
  t: (key: string) => string
}) => (
  <SettingsSection title={t('settings.globalUnit')} description={t('settings.massUnitDescription')}>
    <SegmentedControl<MassUnit>
      value={massUnit}
      onValueChange={onSetMassUnit}
      options={[
        { value: 'highSchool', label: t('settings.massUnitHighSchool') },
        { value: 'universityConventional', label: t('settings.massUnitUniversity') },
      ]}
    />
  </SettingsSection>
)
