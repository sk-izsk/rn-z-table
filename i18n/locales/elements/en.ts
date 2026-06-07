import type { ElementLocaleRecord } from '../../types'
import section1to18 from './en-sections/1-18'
import section19to36 from './en-sections/19-36'
import section37to54 from './en-sections/37-54'
import section55to70 from './en-sections/55-70'
import section71to86 from './en-sections/71-86'
import section87to102 from './en-sections/87-102'
import section103to118 from './en-sections/103-118'

const en: Record<string, ElementLocaleRecord> = {
  ...section1to18,
  ...section19to36,
  ...section37to54,
  ...section55to70,
  ...section71to86,
  ...section87to102,
  ...section103to118,
}

export default en
