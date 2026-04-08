export type Article = {
  title: string
  link: string
  description: string
}

export type Category = {
  key: 'frontend' | 'backend' | 'python' | 'linux' | 'other'
  title: string
  link: string
  pathPrefix: string
  description: string
  audience: string
  articles: Article[]
}

export const categories: Category[] = [
  {
    key: 'frontend',
    title: '前端',
    link: '/frontend',
    pathPrefix: '/notes/frontend/',
    description: '聚焦 uni-app、小程序和浏览器调试脚本等前端工程实践。',
    audience: '适合正在维护业务项目、需要快速排错和提效的前端开发者。',
    articles: [
      {
        title: 'uni-app 常见问题与配置',
        link: '/notes/frontend/uni-app',
        description: '整理旧项目维护中常见的 Sass 与兼容性配置问题。',
      },
      {
        title: '微信小程序记录',
        link: '/notes/frontend/miniprogram',
        description: '收录微信小程序相关的业务场景、功能记录和常见实践。',
      },
      {
        title: '浏览器 Bookmarklet 工具集',
        link: '/notes/frontend/browser-bookmarklets',
        description: '收录调试、自动填充和文档提取相关的快捷脚本。',
      },
    ],
  },
  {
    key: 'backend',
    title: '后端',
    link: '/backend',
    pathPrefix: '/notes/backend/',
    description: '聚焦 API、数据库、服务治理和部署运维等后端主题。',
    audience: '适合关注服务端架构、数据存储与线上运维实践的读者。',
    articles: [],
  },
  {
    key: 'python',
    title: 'Python',
    link: '/python',
    pathPrefix: '/notes/python/',
    description: '从基础语法到异步编程、工具链和 HTML/XML 解析实践。',
    audience: '适合从入门到日常开发阶段的 Python 学习者和工程师。',
    articles: [
      {
        title: 'Python 基础语法',
        link: '/notes/python/fundamentals',
        description: '系统覆盖语法、数据结构、控制流、函数、对象与文件操作。',
      },
      {
        title: 'Python 异步编程',
        link: '/notes/python/asyncio',
        description: '围绕 asyncio 的概念、并发模式、限流和错误处理展开。',
      },
      {
        title: 'Python 常用命令与工具链',
        link: '/notes/python/commands-and-tooling',
        description: '集中整理解释器、pip、虚拟环境、测试与项目管理命令。',
      },
      {
        title: 'Parsel 解析实践',
        link: '/notes/python/parsel',
        description: '面向 XML / HTML 解析场景，整理 CSS、XPath 与常见报错。',
      },
    ],
  },
  {
    key: 'linux',
    title: 'Linux',
    link: '/linux',
    pathPrefix: '/notes/linux/',
    description: '覆盖高频命令、Shell 别名和更完整的系统化命令参考。',
    audience: '适合需要日常操作服务器、排障和快速查命令的开发者。',
    articles: [
      {
        title: 'Linux 常用命令',
        link: '/notes/linux/common-commands',
        description: '先掌握目录、文件、权限、网络与服务管理等高频内容。',
      },
      {
        title: 'Linux 常用别名',
        link: '/notes/linux/shell-aliases',
        description: '整理更高频、更安全的一组 Shell 别名，适合日常环境配置。',
      },
      {
        title: 'Linux 命令大全',
        link: '/notes/linux/command-reference',
        description: '按主题给出更完整的命令索引，适合作为反查手册。',
      },
    ],
  },
  {
    key: 'other',
    title: '其他',
    link: '/other',
    pathPrefix: '/notes/other/',
    description: '收录暂未单独成栏的技术主题与零散实践。',
    audience: '适合查阅补充类内容和跨专题记录。',
    articles: [],
  },
]

export const activeCategories = categories.filter(
  (category) => category.articles.length > 0,
)
