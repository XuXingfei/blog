import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/blog/',
    title: 'Blog',
    description: 'A Blog Site',
    head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '前端', link: '/frontend' },
            { text: '后端', link: '/backend' },
            { text: 'Python', link: '/python' },
            { text: '其他', link: '/other' },
        ],
        // sidebar: [
        //     {
        //         text: '前端',
        //         items: [{ text: '前端', link: '/frontends' }],
        //     },
        // ],
        outline: {
            label: '本页目录',
            level: [2, 3], // 表示显示 H2 和 H3 标题
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/XuXingfei' }],
    },
})
