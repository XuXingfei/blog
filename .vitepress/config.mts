import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/blog/',
    title: 'Blog',
    description: 'A Blog Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '前端', link: '/frontend' },
            { text: '后端', link: '/backend' },
            { text: '其他', link: '/other' },
        ],
        // sidebar: [
        //     {
        //         text: '前端',
        //         items: [{ text: '前端', link: '/frontends' }],
        //     },
        // ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/XuXingfei' }],
    },
})
