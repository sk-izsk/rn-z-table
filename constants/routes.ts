export const routes = {
  home: '/',
  tools: '/tools',
  ions: '/ions',
  worksheet: '/worksheet',
  settings: '/settings',
  element: (symbol: string) => `/element/${symbol}`,
} as const
