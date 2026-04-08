import type { DefaultTheme } from 'vitepress'

import { activeCategories } from './catalog'

export const sidebar: DefaultTheme.Sidebar = Object.fromEntries(
  activeCategories.map((category) => [
    category.pathPrefix,
    [
      {
        text: category.title,
        items: [
          { text: '栏目导读', link: category.link },
          ...category.articles.map((article) => ({
            text: article.title,
            link: article.link,
          })),
        ],
      },
    ],
  ]),
)
