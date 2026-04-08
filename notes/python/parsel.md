---
title: Parsel 解析实践
description: 针对 XML / HTML 解析场景整理 Parsel 的核心用法、语法对比和常见报错。
---

# Parsel 解析实践

这一页聚焦爬虫或数据抽取中的解析工作，重点整理 CSS、XPath、链式调用和排错思路。

## Parsel (xml/html解析)

### 1. 简介

**Parsel** 是 Scrapy 框架的核心解析引擎，基于 `lxml` 构建。它支持 CSS 选择器、XPath 和正则表达式的结合使用，具有极高的解析效率和灵活的链式调用能力。

---

### 2. 核心操作流程

```python
from parsel import Selector

# 1. 初始化
sel = Selector(text=html_content)

# 2. 提取数据
# .get() 提取第一个结果，.getall() 提取所有结果
result = sel.css('h1::text').get() 

```

---

### 3. CSS 与 XPath 语法对比

| 类别         | 功能描述                 | CSS 选择器语法            | XPath 语法                  |
| ------------ | ------------------------ | ------------------------- | --------------------------- |
| **基础选取** | 选取所有匹配的节点       | `sel.css('div')`          | `sel.xpath('//div')`        |
| **提取文本** | 获取节点内的文字内容     | `::text`                  | `/text()`                   |
| **深层文本** | 获取节点及所有子孙的文字 | `*::text`                 | `.//text()`                 |
| **提取属性** | 获取指定属性的值         | `::attr(name)`            | `/@name`                    |
| **属性过滤** | 根据属性值筛选           | `[attr="val"]`            | `[@attr="val"]`             |
| **模糊匹配** | 包含特定字符的属性       | `[attr*="val"]`           | `[contains(@attr, "val")]`  |
| **首尾匹配** | 属性以某字符开头/结尾    | `^=` (前缀) / `$=` (后缀) | `starts-with(@attr, "val")` |
| **正则提取** | 对提取结果进行正则过滤   | `.re(r'regex')`           | *(通常接在 xpath 后使用)*   |
| **唯一结果** | 提取第一个匹配的字符串   | `.get()`                  | `.get()`                    |
| **全部结果** | 提取所有匹配的字符串列表 | `.getall()`               | `.getall()`                 |

---

### 4. XPath 路径符号详解

- **`/`** : **根路径/直接子节点**。必须严格逐级查找。
- **`//`** : **全局搜索**。在整个文档（或当前 Selector 对象全境内）查找。
- **`./`** : **当前节点的直接子节点**。相对定位，常用于循环解析。
- **`.//`** : **当前节点下的所有子孙**。在循环中**必须**带上这个点，否则会跳出循环范围去全局搜索。

---

### 5. Parsel 特色高级功能

#### A. 正则表达式 (RE) 二次提取

可以在 CSS 或 XPath 提取后，直接过滤出目标字符串（如价格数字、日期）。

```python
# 提取 999.00
price = sel.css('.price::text').re_first(r'\d+\.\d+')
# 提取所有符合日期格式的字符串
dates = sel.xpath('//comment()').re(r'\d{4}-\d{2}-\d{2}')

```

#### B. `.attrib` 属性访问

像操作 Python 字典一样获取 HTML 属性。

```python
node = sel.css('a')
link = node.attrib.get('href')  # 安全获取属性值
all_attrs = node.attrib         # 获取所有属性字典

```

#### C. 注释提取 (`comment()`)

处理隐藏在 HTML 注释中的动态数据。

```python
# 提取注释文本
comment_data = sel.xpath('//comment()').get()
# 二次解析注释里的 HTML
inner_sel = Selector(text=comment_data)

```

---

### 6. 链式调用与循环解析模版

为了保证数据的关联性，推荐先定位父容器，再解析子字段。

```python
# 链式调用示例：先用 XPath 粗选，再用 CSS 精选
products = sel.xpath('//div[@class="container"]').css('.item')

for product in products:
    item = {
        'title': product.css('h3::text').get(),
        'price': product.xpath('.//span/text()').re_first(r'\d+'), # 注意点号 .
        'link': product.attrib.get('href')
    }

```

## 报错

### 模块缺失

#### No module named 'distutils'

```shell
python -m pip install -U pip setuptools wheel
```

### 运行错误

#### It looks like you are using Playwright Sync API inside the asyncio loop.Please use the Async API instead

- 完整安装Playwright依赖： 执行命令`playwright install --with-deps`可以确保所有必要的依赖都已安装，这有时能解决环境配置问题。
- 在使用Feapder的Playwright功能前，确保已正确安装浏览器内核：`python -m playwright install chromium`
- 配置Playwright参数： 在Feapder的__custom_setting__中正确配置PLAYWRIGHT参数，特别是将storage_state_path设置为None：
  
```python
__custom_setting__ = dict(
    PLAYWRIGHT=dict(
        user_agent=None,
        proxy=None,
        headless=False,
        driver_type="chromium",
        args=["--lang=zh-CN"],
        timeout=60,
        window_size=(1024, 800),
        executable_path=None,
        download_path=None,
        render_time=0,
        wait_until="networkidle",
        use_stealth_js=True,
        storage_state_path=None,
        save_all=False,
    ),
)
```

- 避免使用下载路径： 如果设置了download_path参数，可能会触发异步环境问题。在不需要下载功能时，建议将其设置为None。
