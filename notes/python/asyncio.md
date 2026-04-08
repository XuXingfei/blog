---
title: Python 异步编程
description: 围绕 asyncio 的核心概念、并发模式、限流与错误处理展开。
---

# Python 异步编程

这一页聚焦 Python 异步开发。阅读时建议结合同步代码对照理解 `async`、`await`、任务调度和超时控制。

## 核心概览

### 核心概念

#### 什么是异步?
```python
## 同步(阻塞) - 等咖啡做好才能做其他事
def sync_task():
    download()  ### 等待 3 秒
    download()  ### 再等 3 秒
    ### 总耗时: 6 秒

## 异步(非阻塞) - 同时点多杯咖啡
async def async_task():
    await asyncio.gather(
        download(),  ### 同时进行
        download()   ### 同时进行
    )
    ### 总耗时: 3 秒
```

**关键**: 异步适合 I/O 密集型任务(网络请求、文件读写、数据库查询)

---

### 基础语法

#### 1. 定义协程
```python
import asyncio

## async def 定义协程函数
async def fetch_data():
    await asyncio.sleep(1)  ### await 等待异步操作
    return "data"
```

#### 2. 运行协程
```python
## 方式1: asyncio.run() - 主入口(推荐)
asyncio.run(fetch_data())

## 方式2: await - 在异步函数内
async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())
```

#### 3. 核心关键字
```python
async def    ### 定义协程函数
await        ### 等待协程完成(暂停点)
asyncio.run()     ### 运行协程(入口)
asyncio.gather()  ### 并发运行多个协程
asyncio.create_task()  ### 创建任务
```

---

### 并发模式

#### 模式1: gather - 并发运行,等待所有完成
```python
async def task(name, delay):
    await asyncio.sleep(delay)
    return f"结果_{name}"

async def main():
    ### 同时运行 3 个任务
    results = await asyncio.gather(
        task("A", 2),
        task("B", 1),
        task("C", 3)
    )
    print(results)  ### ['结果_A', '结果_B', '结果_C']

asyncio.run(main())
```

#### 模式2: create_task - 后台任务
```python
async def background():
    while True:
        print("后台运行...")
        await asyncio.sleep(1)

async def main():
    ### 创建后台任务(立即开始)
    task = asyncio.create_task(background())
    
    await asyncio.sleep(3)
    task.cancel()  ### 取消任务

asyncio.run(main())
```

#### 模式3: as_completed - 先完成先处理
```python
async def main():
    tasks = [
        task("A", 3),
        task("B", 1),
        task("C", 2)
    ]
    
    ### 按完成顺序处理
    for coro in asyncio.as_completed(tasks):
        result = await coro
        print(result)  ### B → C → A

asyncio.run(main())
```

---

### 高级特性

#### 1. 异步上下文管理器
```python
class AsyncResource:
    async def __aenter__(self):
        print("获取资源")
        await asyncio.sleep(1)
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print("释放资源")
        await asyncio.sleep(1)

async def main():
    async with AsyncResource() as resource:
        print("使用资源")

asyncio.run(main())
```

#### 2. 异步迭代器
```python
class AsyncCounter:
    def __init__(self, max):
        self.max = max
        self.current = 0
    
    def __aiter__(self):
        return self
    
    async def __anext__(self):
        if self.current >= self.max:
            raise StopAsyncIteration
        await asyncio.sleep(0.1)
        self.current += 1
        return self.current

async def main():
    async for num in AsyncCounter(5):
        print(num)  ### 1, 2, 3, 4, 5

asyncio.run(main())
```

#### 3. 异步生成器
```python
async def async_range(n):
    for i in range(n):
        await asyncio.sleep(0.1)
        yield i

async def main():
    async for num in async_range(5):
        print(num)

asyncio.run(main())
```

---

### 实用工具

#### 1. 超时控制
```python
async def slow_operation():
    await asyncio.sleep(10)
    return "完成"

async def main():
    try:
        result = await asyncio.wait_for(slow_operation(), timeout=3)
        print(result)
    except asyncio.TimeoutError:
        print("操作超时!")

asyncio.run(main())
```

#### 2. 限制并发数
```python
async def limited_task(semaphore, n):
    async with semaphore:
        print(f"任务 {n} 开始")
        await asyncio.sleep(1)
        print(f"任务 {n} 完成")

async def main():
    ### 最多同时运行 3 个任务
    semaphore = asyncio.Semaphore(3)
    
    tasks = [limited_task(semaphore, i) for i in range(10)]
    await asyncio.gather(*tasks)

asyncio.run(main())
```

#### 3. 重试机制
```python
async def retry(coro_func, max_retries=3, delay=1):
    for attempt in range(max_retries):
        try:
            return await coro_func()
        except Exception as e:
            if attempt == max_retries - 1:
                raise
            print(f"重试 {attempt + 1}...")
            await asyncio.sleep(delay)

async def unreliable_task():
    import random
    if random.random() < 0.5:
        raise Exception("失败")
    return "成功"

async def main():
    result = await retry(unreliable_task, max_retries=5)
    print(result)

asyncio.run(main())
```

---

### 错误处理

```python
async def risky_task():
    await asyncio.sleep(1)
    raise ValueError("出错了!")

async def main():
    ### 方式1: try-except
    try:
        await risky_task()
    except ValueError as e:
        print(f"捕获错误: {e}")
    
    ### 方式2: gather 返回异常
    results = await asyncio.gather(
        risky_task(),
        risky_task(),
        return_exceptions=True  ### 不抛出,返回异常对象
    )
    
    for result in results:
        if isinstance(result, Exception):
            print(f"任务失败: {result}")

asyncio.run(main())
```

---

### 同步与异步互调

#### 同步调用异步
```python
async def async_func():
    await asyncio.sleep(1)
    return "异步结果"

def sync_func():
    ### 在同步代码中运行异步函数
    result = asyncio.run(async_func())
    print(result)

sync_func()
```

#### 异步调用同步
```python
import time
from concurrent.futures import ThreadPoolExecutor

def blocking_io():
    time.sleep(2)  ### 阻塞操作
    return "同步结果"

async def main():
    loop = asyncio.get_running_loop()
    
    ### 在线程池中运行阻塞代码
    result = await loop.run_in_executor(None, blocking_io)
    print(result)

asyncio.run(main())
```

---

### 快速参考

```python
## 定义协程
async def my_coro():
    return await something()

## 运行
asyncio.run(my_coro())

## 并发
await asyncio.gather(coro1(), coro2(), coro3())

## 创建任务
task = asyncio.create_task(my_coro())
await task

## 超时
await asyncio.wait_for(my_coro(), timeout=5)

## 限流
semaphore = asyncio.Semaphore(10)
async with semaphore:
    await operation()

## 上下文
async with resource:
    await operation()

## 迭代
async for item in async_iterator:
    process(item)

## 生成器
async def gen():
    for i in range(10):
        yield i

async for item in gen():
    print(item)
```

---

## 附录: 快速参考

### 常用操作

```python
## 字符串
len(s), s.upper(), s.lower(), s.strip(), s.split()

## 列表
len(l), l.append(), l.extend(), l.insert(), l.remove(), l.pop()

## 字典
len(d), d.keys(), d.values(), d.items(), d.get(), d.update()

## 集合
len(s), s.add(), s.remove(), s.union(), s.intersection()

## 文件
open(), read(), write(), close(), with

## 函数
def, return, lambda, *args, **kwargs

## 类
class, __init__, self, super(), @property

## 异常
try, except, finally, raise

## 导入
import, from...import, as
```

### 常用内置函数

```python
len(), type(), isinstance()
print(), input()
range(), enumerate(), zip()
map(), filter(), sorted(), reversed()
sum(), max(), min(), abs()
all(), any()
int(), float(), str(), list(), dict(), set(), tuple()
```
