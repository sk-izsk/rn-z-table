import { routes } from '@/constants/routes'
import { useAppTranslation } from '@/i18n/localize'
import { Ionicons } from '@expo/vector-icons'
import { Link, usePathname } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

const items = [
  { href: routes.home, key: 'table', icon: 'grid' },
  { href: routes.ions, key: 'ions', icon: 'flask' },
  { href: routes.tools, key: 'tools', icon: 'construct' },
  { href: routes.worksheet, key: 'worksheet', icon: 'document-text' },
  { href: routes.settings, key: 'settings', icon: 'settings' },
] as const

export const RouteTabs = () => {
  const pathname = usePathname()
  const { t } = useAppTranslation()

  return (
    <View className="mt-4 flex-row flex-wrap gap-2">
      {items.map(({ href, key, icon }) => {
        const active = pathname === href
        return (
          <Link key={href} href={href} asChild>
            <Pressable
              className={`flex-row items-center gap-2 rounded-2xl border px-4 py-3 ${
                active ? 'border-accent bg-accent' : 'border-[#d6e5ed] bg-white'
              }`}
            >
              <Ionicons name={icon} color={active ? '#f7fbfd' : '#627487'} size={16} />
              <Text className={active ? 'font-semibold text-white' : 'font-medium text-slate-600'}>
                {t(`nav.${key}`)}
              </Text>
            </Pressable>
          </Link>
        )
      })}
    </View>
  )
}
