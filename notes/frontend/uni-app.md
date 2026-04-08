---
title: uni-app 常见问题与配置
description: 收录 uni-app 项目中常见的 Sass 与兼容性配置问题。
---

# uni-app 常见问题与配置

适合作为老项目维护时的快速排查记录，优先覆盖你最容易在启动和编译阶段遇到的问题。

## uni-app

### 报错

#### 老项目 sass 报错

[css预处理器支持](https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#css-preprocessor)

```json
"sassImplementationName" : "node-sass",
```

### 配置

#### 忽略运行环境版本和编译器版本不一致

```json
"compatible": { "ignoreVersion": true },
```
