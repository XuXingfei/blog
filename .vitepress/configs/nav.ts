import type { DefaultTheme } from 'vitepress'

import { categories } from './catalog'

export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '专题',
    items: categories.map((category) => ({
      text: category.title,
      link: category.link,
    })),
  },
  { text: '归档', link: '/archive' },
]
