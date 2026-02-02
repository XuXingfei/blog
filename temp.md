### 异步编程

#### 核心概念

##### 什么是异步?
```python
### 同步(阻塞) - 等咖啡做好才能做其他事
def sync_task():
    download()  ### 等待 3 秒
    download()  ### 再等 3 秒
    ### 总耗时: 6 秒

### 异步(非阻塞) - 同时点多杯咖啡
async def async_task():
    await asyncio.gather(
        download(),  ### 同时进行
        download()   ### 同时进行
    )
    ### 总耗时: 3 秒
```

**关键**: 异步适合 I/O 密集型任务(网络请求、文件读写、数据库查询)

---

#### 基础语法

##### 1. 定义协程
```python
import asyncio

### async def 定义协程函数
async def fetch_data():
    await asyncio.sleep(1)  ### await 等待异步操作
    return "data"
```

##### 2. 运行协程
```python
### 方式1: asyncio.run() - 主入口(推荐)
asyncio.run(fetch_data())

### 方式2: await - 在异步函数内
async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())
```

##### 3. 核心关键字
```python
async def    ### 定义协程函数
await        ### 等待协程完成(暂停点)
asyncio.run()     ### 运行协程(入口)
asyncio.gather()  ### 并发运行多个协程
asyncio.create_task()  ### 创建任务
```

---

#### 并发模式

##### 模式1: gather - 并发运行,等待所有完成
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

##### 模式2: create_task - 后台任务
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

##### 模式3: as_completed - 先完成先处理
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

#### 实战场景

##### 1. HTTP 请求
```python
import aiohttp

async def fetch_url(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def main():
    urls = [
        "https://www.python.org",
        "https://www.github.com",
        "https://www.google.com"
    ]
    
    ### 并发请求
    results = await asyncio.gather(*[fetch_url(url) for url in urls])
    
    for url, html in zip(urls, results):
        print(f"{url}: {len(html)} bytes")

asyncio.run(main())
```

##### 2. 文件操作
```python
import aiofiles

async def read_file(filename):
    async with aiofiles.open(filename, 'r') as f:
        return await f.read()

async def write_file(filename, content):
    async with aiofiles.open(filename, 'w') as f:
        await f.write(content)

async def main():
    ### 并发读取
    files = ['file1.txt', 'file2.txt', 'file3.txt']
    contents = await asyncio.gather(*[read_file(f) for f in files])
    
    ### 异步写入
    await write_file('output.txt', '\n'.join(contents))

asyncio.run(main())
```

##### 3. 数据库查询
```python
import asyncpg

async def fetch_users(pool):
    async with pool.acquire() as conn:
        return await conn.fetch('SELECT * FROM users')

async def main():
    ### 创建连接池
    pool = await asyncpg.create_pool(
        user='user',
        password='password',
        database='mydb',
        host='localhost'
    )
    
    users = await fetch_users(pool)
    print(users)
    
    await pool.close()

asyncio.run(main())
```

##### 4. 异步爬虫
```python
import aiohttp
from bs4 import BeautifulSoup

async def fetch_page(session, url):
    async with session.get(url) as response:
        return await response.text()

async def crawl(urls):
    async with aiohttp.ClientSession() as session:
        ### 并发抓取
        pages = await asyncio.gather(*[fetch_page(session, url) for url in urls])
        
        ### 解析
        for url, html in zip(urls, pages):
            soup = BeautifulSoup(html, 'html.parser')
            print(f"{url}: {soup.title.text}")

urls = ['https://example.com/page1', 'https://example.com/page2']
asyncio.run(crawl(urls))
```

---

#### 高级特性

##### 1. 异步上下文管理器
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

##### 2. 异步迭代器
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

##### 3. 异步生成器
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

#### 实用工具

##### 1. 超时控制
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

##### 2. 限制并发数
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

##### 3. 重试机制
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

#### 错误处理

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

#### 同步与异步互调

##### 同步调用异步
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

##### 异步调用同步
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

#### 常见陷阱

##### ❌ 陷阱1: 忘记 await
```python
async def fetch():
    return "data"

async def main():
    result = fetch()  ### ❌ 返回协程对象,不是结果
    result = await fetch()  ### ✅ 正确
```

##### ❌ 陷阱2: 使用同步阻塞操作
```python
import time

async def bad():
    time.sleep(2)  ### ❌ 阻塞整个事件循环

async def good():
    await asyncio.sleep(2)  ### ✅ 不阻塞
```

##### ❌ 陷阱3: 创建任务后不等待
```python
async def task():
    await asyncio.sleep(1)
    print("完成")

async def main():
    asyncio.create_task(task())  ### ❌ 可能还没执行就结束了
    
    t = asyncio.create_task(task())
    await t  ### ✅ 等待任务完成
```

##### ❌ 陷阱4: 在 CPU 密集型任务中使用异步
```python
### ❌ 异步对 CPU 密集型任务无效
async def compute():
    result = 0
    for i in range(10000000):
        result += i  ### CPU 计算,不是 I/O 等待
    return result

### ✅ 应该用多进程
from multiprocessing import Pool
with Pool() as pool:
    results = pool.map(compute_func, data_list)
```

---

#### 常用库

| 场景 | 库 | 安装 |
|------|----|----|
| HTTP 请求 | aiohttp | `pip install aiohttp` |
| 文件操作 | aiofiles | `pip install aiofiles` |
| PostgreSQL | asyncpg | `pip install asyncpg` |
| MySQL | aiomysql | `pip install aiomysql` |
| MongoDB | motor | `pip install motor` |
| Redis | aioredis | `pip install aioredis` |
| WebSocket | websockets | `pip install websockets` |
| SMTP | aiosmtplib | `pip install aiosmtplib` |

---

#### 快速参考

```python
### 定义协程
async def my_coro():
    return await something()

### 运行
asyncio.run(my_coro())

### 并发
await asyncio.gather(coro1(), coro2(), coro3())

### 创建任务
task = asyncio.create_task(my_coro())
await task

### 超时
await asyncio.wait_for(my_coro(), timeout=5)

### 限流
semaphore = asyncio.Semaphore(10)
async with semaphore:
    await operation()

### 上下文
async with resource:
    await operation()

### 迭代
async for item in async_iterator:
    process(item)

### 生成器
async def gen():
    for i in range(10):
        yield i

async for item in gen():
    print(item)
```

---

#### 性能对比示例

```python
import time
import asyncio
import aiohttp

### 同步版本 - 串行执行
def sync_version(urls):
    start = time.time()
    for url in urls:
        ### 每个请求约 1 秒
        response = requests.get(url)
    print(f"同步耗时: {time.time() - start:.2f}秒")  ### 约 10 秒

### 异步版本 - 并发执行
async def async_version(urls):
    start = time.time()
    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, url) for url in urls]
        await asyncio.gather(*tasks)
    print(f"异步耗时: {time.time() - start:.2f}秒")  ### 约 1 秒

async def fetch(session, url):
    async with session.get(url) as response:
        return await response.text()

### 测试 10 个 URL
urls = ["https://www.python.org"] * 10
asyncio.run(async_version(urls))  ### 快 10 倍!
```

---

#### 决策流程

```
需要并发处理任务?
├─ I/O 密集型(网络、文件、数据库)?
│  └─ ✅ 使用异步 (asyncio + async/await)
└─ CPU 密集型(大量计算)?
   └─ ❌ 使用多进程 (multiprocessing)
```

---
