import { defineConfig } from 'vitepress'

import { themeConfig } from './configs/theme'

export default defineConfig({
  lang: 'zh-CN',
  base: '/blog/',
  title: '工程笔记',
  description: '面向公开阅读的前端、Python、Linux 与工程实践知识站',
  srcExclude: ['temp.md', 'readme.md'],
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/blog/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
  ],
  themeConfig,
})
