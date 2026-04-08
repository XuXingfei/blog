import type { DefaultTheme } from 'vitepress'

import { nav } from './nav'
import { sidebar } from './sidebar'

export const themeConfig: DefaultTheme.Config = {
  nav,
  sidebar,
  search: {
    provider: 'local',
  },
  outline: {
    label: '页内导航',
    level: [2, 3],
  },
  docFooter: {
    prev: '上一篇',
    next: '下一篇',
  },
  lastUpdated: {
    text: '最近更新',
    formatOptions: {
      dateStyle: 'medium',
      timeStyle: 'short',
    },
  },
  sidebarMenuLabel: '文章导航',
  returnToTopLabel: '返回顶部',
  socialLinks: [{ icon: 'github', link: 'https://github.com/XuXingfei' }],
  footer: {
    copyright: 'Copyright © 2026 Xu Xingfei',
  },
}
