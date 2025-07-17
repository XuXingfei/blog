import { defaultTheme } from 'vuepress'

export default {
  lang: 'zh-CN',
  title: '我的博客',
  description: '个人笔记和技术分享',
  theme: defaultTheme({
    logo: '/logo.png',
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide.md' },
      { text: '日常', link: '/daily/' },
    ],
    sidebar: {
      '/daily/': [
        {
          text: '日常笔记',
          children: ['/daily/2025-07-17.md']
        }
      ]
    }
  }),
}
