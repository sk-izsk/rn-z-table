import { Panel } from '@/components/ui/Panel'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { useAppTranslation } from '@/i18n/localize'

export const ElementDetailToggle = ({
  detailView,
  onSetDetailView,
}: {
  detailView: 'model' | 'details'
  onSetDetailView: (value: 'model' | 'details') => void
}) => {
  const { t } = useAppTranslation()

  return (
    <Panel className="mt-3 py-3">
      <SegmentedControl
        value={detailView}
        onValueChange={onSetDetailView}
        options={[
          { value: 'model', label: t('modal.model3d') },
          { value: 'details', label: t('modal.details') },
        ]}
      />
    </Panel>
  )
}
