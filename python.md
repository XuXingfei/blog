# Python

## 基础语法

### 1. 环境与基础

#### 1.1 运行方式

```python
## 方式1: 交互式 REPL
python  ## 进入交互模式

## 方式2: 脚本文件
python script.py

## 方式3: 直接执行(需要文件开头添加 shebang)
#!/usr/bin/env python3
```

#### 1.2 注释

```python
## 单行注释

"""
多行注释
可以用三引号
"""

'''
也可以用单引号
'''
```

---

### 2. 变量与数据类型

#### 2.1 变量声明

```python
## Python 是动态类型,无需声明类型
name = "张三"
age = 25
is_active = True

## 多变量赋值
x, y, z = 1, 2, 3
a = b = c = 0
```

**对比 JS/TS**: Python 不需要 `let/const/var`,也不需要分号结尾

#### 2.2 基本数据类型

##### 数字类型

```python
## 整数 int
x = 10
y = -5
big_num = 1_000_000  ## 可用下划线分隔

## 浮点数 float
pi = 3.14
e = 2.718

## 复数 complex
z = 3 + 4j

## 类型转换
int("123")      ## 123
float("3.14")   ## 3.14
str(123)        ## "123"
```

##### 布尔类型

```python
## bool 类型,首字母大写
is_valid = True
is_empty = False

## 假值(Falsy):False, None, 0, 0.0, '', [], {}, ()
## 其他都是真值

bool(0)      ## False
bool("")     ## False
bool([])     ## False
bool("0")    ## True (非空字符串)
```

**注意**: Python 用 `True/False`,不是 `true/false`

##### None 类型

```python
## None 相当于 JS 的 null
result = None

## 检查 None
if result is None:
    print("结果为空")

## 不要用 ==,用 is
if result is not None:
    print("有结果")
```

#### 2.3 字符串

##### 基本操作

```python
## 字符串定义
s1 = '单引号'
s2 = "双引号"
s3 = """多行
字符串"""

## 原始字符串(不转义)
path = r"C:\new\test"  ## 相当于 JS 的 String.raw

## f-string(推荐,相当于 JS 模板字符串)
name = "Alice"
age = 25
msg = f"我是 {name},今年 {age} 岁"
result = f"计算结果: {10 + 20}"

## 旧式格式化(了解即可)
"我是 %s" % name
"我是 {0},今年 {1} 岁".format(name, age)
```

##### 字符串方法

```python
s = "Hello World"

## 常用方法
s.upper()           ## "HELLO WORLD"
s.lower()           ## "hello world"
s.strip()           ## 去除首尾空白
s.replace("H", "J") ## "Jello World"
s.split(" ")        ## ["Hello", "World"]
s.startswith("He")  ## True
s.endswith("ld")    ## True
s.find("Wo")        ## 6 (索引位置,-1 表示未找到)
s.index("Wo")       ## 6 (未找到会抛异常)

## 字符串拼接
"Hello" + " " + "World"
" ".join(["Hello", "World"])  ## 推荐

## 字符串切片(重要!)
s = "Python"
s[0]      ## "P"
s[-1]     ## "n" (倒数第一个)
s[0:3]    ## "Pyt" (不含索引3)
s[2:]     ## "thon"
s[:4]     ## "Pyth"
s[::2]    ## "Pto" (步长为2)
s[::-1]   ## "nohtyP" (反转)
```

**对比 JS**: Python 字符串不可变,没有 `charAt()`,直接用索引访问

#### 2.4 类型检查

```python
type(123)           ## <class 'int'>
type("hello")       ## <class 'str'>
isinstance(123, int)  ## True (推荐)

## 查看对象所有属性和方法
dir(obj)
help(obj)
```

---

### 3. 运算符

#### 3.1 算术运算符

```python
10 + 3   ## 13
10 - 3   ## 7
10 * 3   ## 30
10 / 3   ## 3.333... (浮点除法)
10 // 3  ## 3 (整除)
10 % 3   ## 1 (取模)
10 ** 3  ## 1000 (幂运算)

## 复合赋值
x += 1   ## x = x + 1
x *= 2   ## x = x * 2
```

**注意**: Python 有 `//` 整除和 `**` 幂运算,JS 没有

#### 3.2 比较运算符

```python
==   ## 相等
!=   ## 不等
>    ## 大于
<    ## 小于
>=   ## 大于等于
<=   ## 小于等于

## 链式比较(Python 特色)
1 < x < 10  ## 相当于 1 < x and x < 10
```

#### 3.3 逻辑运算符

```python
and  ## 与 (相当于 JS 的 &&)
or   ## 或 (相当于 JS 的 ||)
not  ## 非 (相当于 JS 的 !)

## 示例
x > 0 and x < 10
not is_empty
result = value or default  ## 短路求值
```

#### 3.4 身份运算符

```python
is      ## 是否同一对象
is not  ## 是否不同对象

## 用于 None 检查
if x is None:
    pass

## 注意: is 检查对象身份,== 检查值相等
a = [1, 2]
b = [1, 2]
a == b  ## True (值相等)
a is b  ## False (不同对象)
```

#### 3.5 成员运算符

```python
in      ## 是否在序列中
not in  ## 是否不在序列中

## 示例
"a" in "abc"      ## True
1 in [1, 2, 3]    ## True
"name" in {"name": "Alice"}  ## True (字典检查键)
```

---

### 4. 数据结构

#### 4.1 列表 (List)

##### 相当于 JS 的数组,但功能更强大

```python
## 创建列表
nums = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
empty = []
matrix = [[1, 2], [3, 4]]  ## 二维列表

## 访问元素
nums[0]      ## 1
nums[-1]     ## 5 (倒数第一个)
nums[1:3]    ## [2, 3] (切片)

## 常用方法
nums.append(6)        ## 末尾添加
nums.insert(0, 0)     ## 指定位置插入
nums.extend([7, 8])   ## 合并列表
nums.remove(3)        ## 删除第一个3
nums.pop()            ## 删除并返回最后一个
nums.pop(0)           ## 删除并返回指定索引
nums.clear()          ## 清空
nums.index(3)         ## 查找索引
nums.count(3)         ## 统计出现次数
nums.sort()           ## 原地排序
nums.reverse()        ## 原地反转

## 列表推导式(重要!)
squares = [x**2 for x in range(10)]
evens = [x for x in range(10) if x % 2 == 0]
matrix = [[i*j for j in range(3)] for i in range(3)]

## 其他操作
len(nums)            ## 长度
sum(nums)            ## 求和
max(nums), min(nums) ## 最大最小值
sorted(nums)         ## 返回新的排序列表
list(reversed(nums)) ## 反转(返回新列表)

## 列表拼接
[1, 2] + [3, 4]      ## [1, 2, 3, 4]
[1, 2] * 3           ## [1, 2, 1, 2, 1, 2]
```

#### 4.2 元组 (Tuple)

##### 不可变的列表,相当于只读数组

```python
## 创建元组
coords = (10, 20)
single = (1,)        ## 单元素元组需要逗号
empty = ()

## 元组解包
x, y = coords        ## x=10, y=20
a, *rest, b = [1, 2, 3, 4, 5]  ## a=1, rest=[2,3,4], b=5

## 元组常用于函数返回多值
def get_user():
    return "Alice", 25, "alice@example.com"

name, age, email = get_user()
```

**使用场景**: 函数返回多值、字典的键、不可变数据

#### 4.3 字典 (Dict)

##### 相当于 JS 的对象/Map

```python
## 创建字典
user = {
    "name": "Alice",
    "age": 25,
    "email": "alice@example.com"
}

## 空字典
empty = {}
empty = dict()

## 访问元素
user["name"]              ## "Alice"
user.get("name")          ## "Alice"
user.get("phone", "无")   ## 提供默认值,不存在返回"无"

## 修改/添加
user["age"] = 26
user["phone"] = "123456"

## 删除
del user["email"]
user.pop("age")          ## 删除并返回值

## 常用方法
user.keys()              ## 所有键
user.values()            ## 所有值
user.items()             ## 键值对
user.update({"city": "Beijing"})  ## 合并字典

## 检查键是否存在
if "name" in user:
    print(user["name"])

## 字典推导式
squares = {x: x**2 for x in range(5)}
## {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

## 遍历字典
for key in user:
    print(key, user[key])

for key, value in user.items():
    print(f"{key}: {value}")
```

#### 4.4 集合 (Set)

##### 无序、不重复的集合,相当于 JS 的 Set

```python
## 创建集合
nums = {1, 2, 3, 4, 5}
empty = set()  ## 注意: {} 是空字典

## 集合操作
nums.add(6)              ## 添加元素
nums.remove(3)           ## 删除元素(不存在会报错)
nums.discard(3)          ## 删除元素(不存在不报错)
nums.clear()             ## 清空

## 集合运算
a = {1, 2, 3}
b = {3, 4, 5}

a | b    ## {1, 2, 3, 4, 5} 并集
a & b    ## {3} 交集
a - b    ## {1, 2} 差集
a ^ b    ## {1, 2, 4, 5} 对称差

## 集合推导式
squares = {x**2 for x in range(5)}

## 去重
unique_list = list(set([1, 2, 2, 3, 3, 3]))
```

---

### 5. 控制流

#### 5.1 if 语句

```python
## 基本 if
if condition:
    ## 代码块用缩进表示(4个空格或1个Tab)
    print("条件为真")

## if-else
if x > 0:
    print("正数")
else:
    print("非正数")

## if-elif-else
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"

## 三元表达式
result = "偶数" if x % 2 == 0 else "奇数"

## 多条件
if x > 0 and x < 10:
    print("1到9之间")

if 0 < x < 10:  ## Python 特色:链式比较
    print("1到9之间")
```

**重要**: Python 用缩进表示代码块,不用花括号

#### 5.2 for 循环

```python
## 遍历列表
for item in [1, 2, 3]:
    print(item)

## 遍历字符串
for char in "Python":
    print(char)

## 遍历字典
user = {"name": "Alice", "age": 25}
for key in user:
    print(key, user[key])

for key, value in user.items():
    print(f"{key}: {value}")

## range() 函数(重要!)
for i in range(5):          ## 0,1,2,3,4
    print(i)

for i in range(1, 5):       ## 1,2,3,4
    print(i)

for i in range(0, 10, 2):   ## 0,2,4,6,8 (步长为2)
    print(i)

## enumerate() 获取索引和值
for index, value in enumerate(["a", "b", "c"]):
    print(f"{index}: {value}")

## zip() 并行遍历
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name}: {age}")

## else 子句(循环正常结束执行)
for i in range(5):
    if i == 3:
        break
else:
    print("循环正常结束")  ## break 不会执行这里
```

#### 5.3 while 循环

```python
## 基本 while
count = 0
while count < 5:
    print(count)
    count += 1

## while-else
while condition:
    ## 循环体
    pass
else:
    ## 循环正常结束执行
    pass

## 无限循环
while True:
    user_input = input("输入 'q' 退出: ")
    if user_input == 'q':
        break
```

#### 5.4 break, continue, pass

```python
## break: 跳出循环
for i in range(10):
    if i == 5:
        break
    print(i)  ## 0,1,2,3,4

## continue: 跳过当前迭代
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  ## 1,3,5,7,9

## pass: 占位符,什么都不做
for i in range(5):
    pass  ## 空循环体

if condition:
    pass  ## 待实现
```

---

### 6. 函数

#### 6.1 函数定义

```python
## 基本函数
def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")

## 多返回值(返回元组)
def get_user():
    return "Alice", 25, "alice@example.com"

name, age, email = get_user()

## 默认参数
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

greet("Alice")              ## "Hello, Alice!"
greet("Alice", "Hi")        ## "Hi, Alice!"

## 关键字参数
def create_user(name, age, email):
    return {"name": name, "age": age, "email": email}

user = create_user(name="Alice", email="alice@example.com", age=25)

## 可变参数 *args (类似 JS 的 ...rest)
def sum_all(*numbers):
    return sum(numbers)

sum_all(1, 2, 3, 4, 5)  ## 15

## 关键字可变参数 **kwargs
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="Beijing")

## 混合使用
def func(a, b, *args, **kwargs):
    print(f"a={a}, b={b}")
    print(f"args={args}")
    print(f"kwargs={kwargs}")

func(1, 2, 3, 4, name="Alice", age=25)
```

#### 6.2 Lambda 函数

```python
## 匿名函数(单行表达式)
square = lambda x: x**2
add = lambda x, y: x + y

square(5)  ## 25
add(3, 4)  ## 7

## 常用于 map, filter, sorted
nums = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x**2, nums))
evens = list(filter(lambda x: x % 2 == 0, nums))

## sorted 排序
users = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30},
    {"name": "Charlie", "age": 20}
]
sorted_users = sorted(users, key=lambda u: u["age"])
```

#### 6.3 作用域

```python
## 全局变量
global_var = "全局"

def func():
    ## 局部变量
    local_var = "局部"
    print(global_var)  ## 可以访问全局变量
    
    ## 修改全局变量需要 global 关键字
    global global_var
    global_var = "修改后的全局"
    
    ## 嵌套函数
    def inner():
        nonlocal local_var  ## 访问外层函数变量
        local_var = "修改后的局部"
    
    inner()
    print(local_var)
```

#### 6.4 函数文档

```python
def calculate_area(radius):
    """
    计算圆的面积
    
    参数:
        radius (float): 圆的半径
    
    返回:
        float: 圆的面积
    """
    return 3.14 * radius ** 2

## 查看文档
help(calculate_area)
print(calculate_area.__doc__)
```

---

### 7. 面向对象

#### 7.1 类定义

```python
## 基本类
class Person:
    ## 类属性(所有实例共享)
    species = "Human"
    
    ## 构造函数
    def __init__(self, name, age):
        ## 实例属性
        self.name = name
        self.age = age
    
    ## 实例方法
    def greet(self):
        return f"你好,我是 {self.name}"
    
    ## 类方法
    @classmethod
    def from_birth_year(cls, name, birth_year):
        age = 2026 - birth_year
        return cls(name, age)
    
    ## 静态方法
    @staticmethod
    def is_adult(age):
        return age >= 18
    
    ## 字符串表示
    def __str__(self):
        return f"Person(name={self.name}, age={self.age})"
    
    def __repr__(self):
        return f"Person('{self.name}', {self.age})"

## 创建实例
alice = Person("Alice", 25)
print(alice.greet())

## 类方法调用
bob = Person.from_birth_year("Bob", 2000)

## 静态方法调用
Person.is_adult(20)  ## True
```

#### 7.2 继承

```python
## 单继承
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)  ## 调用父类构造函数
        self.student_id = student_id
    
    ## 方法重写
    def greet(self):
        return f"你好,我是学生 {self.name}"
    
    ## 新方法
    def study(self, subject):
        return f"{self.name} 正在学习 {subject}"

student = Student("Charlie", 20, "S001")
print(student.greet())
print(student.study("Python"))

## 多继承
class Worker:
    def work(self):
        return "正在工作"

class StudentWorker(Student, Worker):
    pass

sw = StudentWorker("David", 22, "S002")
sw.study("Math")
sw.work()
```

#### 7.3 属性装饰器

```python
class Product:
    def __init__(self, price):
        self._price = price  ## 私有属性约定(单下划线)
    
    ## Getter
    @property
    def price(self):
        return self._price
    
    ## Setter
    @price.setter
    def price(self, value):
        if value < 0:
            raise ValueError("价格不能为负")
        self._price = value
    
    ## Deleter
    @price.deleter
    def price(self):
        del self._price

product = Product(100)
print(product.price)      ## 调用 getter
product.price = 200       ## 调用 setter
## del product.price       ## 调用 deleter
```

#### 7.4 特殊方法(魔术方法)

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    ## 加法
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    ## 字符串表示
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    ## 长度
    def __len__(self):
        return int((self.x**2 + self.y**2)**0.5)
    
    ## 相等比较
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    ## 索引访问
    def __getitem__(self, index):
        if index == 0:
            return self.x
        elif index == 1:
            return self.y
        raise IndexError("索引超出范围")

v1 = Vector(1, 2)
v2 = Vector(3, 4)
v3 = v1 + v2  ## 调用 __add__
print(v3)     ## 调用 __str__
print(v3[0])  ## 调用 __getitem__
```

---

### 8. 异常处理

#### 8.1 基本语法

```python
## try-except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("除数不能为零")

## 捕获多个异常
try:
    ## 可能出错的代码
    pass
except (ValueError, TypeError) as e:
    print(f"错误: {e}")

## 捕获所有异常
try:
    ## 代码
    pass
except Exception as e:
    print(f"发生错误: {e}")

## try-except-else-finally
try:
    result = 10 / 2
except ZeroDivisionError:
    print("除数不能为零")
else:
    print(f"结果是 {result}")  ## 没有异常时执行
finally:
    print("总是执行")  ## 无论是否异常都执行
```

#### 8.2 抛出异常

```python
## raise 抛出异常
def divide(a, b):
    if b == 0:
        raise ValueError("除数不能为零")
    return a / b

## 自定义异常
class CustomError(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)

raise CustomError("自定义错误消息")

## 重新抛出异常
try:
    ## 代码
    pass
except Exception as e:
    print(f"记录错误: {e}")
    raise  ## 重新抛出
```

#### 8.3 常见异常类型

```python
ValueError       ## 值错误
TypeError        ## 类型错误
KeyError         ## 字典键不存在
IndexError       ## 索引超出范围
FileNotFoundError  ## 文件不存在
ZeroDivisionError  ## 除零错误
AttributeError   ## 属性不存在
ImportError      ## 导入错误
```

---

### 9. 文件操作

#### 9.1 读写文件

```python
## 写文件
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("Hello World\n")
    f.write("第二行\n")

## 读文件(全部)
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

## 读文件(按行)
with open("data.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()  ## 返回列表
    for line in lines:
        print(line.strip())

## 逐行读取(内存高效)
with open("data.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())

## 追加模式
with open("data.txt", "a", encoding="utf-8") as f:
    f.write("追加内容\n")

## 读写模式
with open("data.txt", "r+", encoding="utf-8") as f:
    content = f.read()
    f.write("新内容")
```

**重要**: 使用 `with` 语句自动关闭文件,相当于 JS 的 try-finally

#### 9.2 文件模式

```python
"r"   ## 只读(默认)
"w"   ## 写入(覆盖)
"a"   ## 追加
"x"   ## 独占创建(文件存在则失败)
"r+"  ## 读写
"w+"  ## 读写(覆盖)
"rb"  ## 二进制读
"wb"  ## 二进制写
```

#### 9.3 JSON 操作

```python
import json

## Python → JSON
data = {
    "name": "Alice",
    "age": 25,
    "hobbies": ["reading", "coding"]
}

## 写入 JSON 文件
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

## 转为 JSON 字符串
json_str = json.dumps(data, ensure_ascii=False, indent=2)

## JSON → Python
with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

data = json.loads(json_str)
```

#### 9.4 路径操作

```python
import os
from pathlib import Path

## os 模块
os.getcwd()              ## 当前目录
os.listdir(".")          ## 列出目录内容
os.path.exists("file.txt")  ## 文件是否存在
os.path.isfile("file.txt")  ## 是否是文件
os.path.isdir("dir")     ## 是否是目录
os.path.join("dir", "file.txt")  ## 拼接路径
os.path.basename("/a/b/file.txt")  ## "file.txt"
os.path.dirname("/a/b/file.txt")   ## "/a/b"

## pathlib 模块(推荐)
path = Path("data.txt")
path.exists()            ## 是否存在
path.is_file()           ## 是否是文件
path.read_text()         ## 读取文本
path.write_text("内容")  ## 写入文本
path.parent              ## 父目录
path.name                ## 文件名
path.suffix              ## 扩展名
```

---

### 10. 模块与包

#### 10.1 导入模块

```python
## 导入整个模块
import math
print(math.pi)

## 导入并重命名
import numpy as np

## 导入特定内容
from math import pi, sqrt
print(pi)

## 导入所有(不推荐)
from math import *

## 导入自定义模块
## 文件 utils.py
def add(a, b):
    return a + b

## 另一个文件
from utils import add
```

#### 10.2 常用内置模块

```python
## math - 数学函数
import math
math.sqrt(16)    ## 4.0
math.ceil(3.2)   ## 4
math.floor(3.8)  ## 3
math.pi          ## 3.141592653589793

## random - 随机数
import random
random.random()           ## 0.0-1.0 随机浮点数
random.randint(1, 10)     ## 1-10 随机整数
random.choice([1, 2, 3])  ## 随机选择
random.shuffle(list)      ## 打乱列表

## datetime - 日期时间
from datetime import datetime, date, timedelta

now = datetime.now()
today = date.today()
tomorrow = today + timedelta(days=1)

## 格式化
now.strftime("%Y-%m-%d %H:%M:%S")
## 解析
datetime.strptime("2026-01-29", "%Y-%m-%d")

## time - 时间
import time
time.time()        ## 时间戳
time.sleep(1)      ## 暂停1秒

## os - 操作系统
import os
os.environ["PATH"]  ## 环境变量

## sys - 系统
import sys
sys.version        ## Python 版本
sys.argv           ## 命令行参数
sys.exit()         ## 退出程序

## re - 正则表达式
import re
re.match(r"^\d+$", "123")   ## 匹配
re.search(r"\d+", "abc123") ## 搜索
re.findall(r"\d+", "a1b2c3") ## 查找所有
re.sub(r"\d+", "X", "a1b2")  ## 替换
```

#### 10.3 第三方包管理

```bash
## pip 安装包
pip install requests
pip install pandas numpy matplotlib

## 安装指定版本
pip install requests==2.28.0

## 卸载
pip uninstall requests

## 列出已安装
pip list

## 导出依赖
pip freeze > requirements.txt

## 安装依赖
pip install -r requirements.txt
```

---

### 11. 高级特性

#### 11.1 列表推导式

```python
## 基本形式
squares = [x**2 for x in range(10)]

## 带条件
evens = [x for x in range(10) if x % 2 == 0]

## 多重循环
pairs = [(x, y) for x in range(3) for y in range(3)]

## 嵌套
matrix = [[i*j for j in range(3)] for i in range(3)]
```

#### 11.2 生成器

```python
## 生成器表达式(不占内存)
squares_gen = (x**2 for x in range(1000000))

## 生成器函数
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num)
```

#### 11.3 装饰器

```python
## 函数装饰器
def log(func):
    def wrapper(*args, **kwargs):
        print(f"调用 {func.__name__}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} 返回 {result}")
        return result
    return wrapper

@log
def add(a, b):
    return a + b

add(1, 2)  ## 会打印日志

## 带参数的装饰器
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def greet():
    print("Hello")

greet()  ## 打印3次
```

#### 11.4 上下文管理器

```python
## with 语句
with open("file.txt") as f:
    content = f.read()
## 文件自动关闭

## 自定义上下文管理器
class MyContext:
    def __enter__(self):
        print("进入")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("退出")

with MyContext() as ctx:
    print("执行中")

## 使用 contextlib
from contextlib import contextmanager

@contextmanager
def my_context():
    print("进入")
    yield
    print("退出")

with my_context():
    print("执行中")
```

#### 11.5 迭代器

```python
## 可迭代对象
for item in [1, 2, 3]:  ## 列表是可迭代的
    print(item)

## 迭代器
it = iter([1, 2, 3])
print(next(it))  ## 1
print(next(it))  ## 2

## 自定义迭代器
class Counter:
    def __init__(self, max):
        self.max = max
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current >= self.max:
            raise StopIteration
        self.current += 1
        return self.current

for num in Counter(5):
    print(num)
```

---

### 12. 与 JavaScript/Java 对比

#### 语法差异

| 特性       | Python      | JavaScript        | Java              |
| ---------- | ----------- | ----------------- | ----------------- |
| 变量声明   | 直接赋值    | let/const/var     | 类型 变量名       |
| 代码块     | 缩进        | 花括号            | 花括号            |
| 注释       | ##          | //                | //                |
| 字符串拼接 | f"{a}{b}"   | `${a}${b}`        | a + b             |
| 布尔值     | True/False  | true/false        | true/false        |
| 空值       | None        | null/undefined    | null              |
| 数组/列表  | [1,2,3]     | [1,2,3]           | new int[]{1,2,3}  |
| 字典/对象  | {"k":"v"}   | {k:"v"}           | Map<K,V>          |
| 函数定义   | def func(): | function func(){} | type func(){}     |
| 类定义     | class C:    | class C {}        | class C {}        |
| 继承       | class B(A): | class B extends A | class B extends A |

#### 命名规范

```python
## Python (PEP 8)
variable_name        ## 变量/函数: snake_case
ClassName            ## 类: PascalCase
CONSTANT_NAME        ## 常量: UPPER_CASE
_private_var         ## 私有变量: 前缀 _
__very_private       ## 强私有: 前缀 __

## JavaScript
variableName         ## 变量/函数: camelCase
ClassName            ## 类: PascalCase
CONSTANT_NAME        ## 常量: UPPER_CASE

## Java
variableName         ## 变量/方法: camelCase
ClassName            ## 类: PascalCase
CONSTANT_NAME        ## 常量: UPPER_CASE
```

---

### 13. 实战技巧

#### 13.1 常用代码片段

```python
## 交换变量
a, b = b, a

## 多变量赋值
x = y = z = 0

## 链式比较
if 0 < x < 10:
    pass

## 三元表达式
result = "偶数" if x % 2 == 0 else "奇数"

## 字符串反转
s[::-1]

## 列表去重
list(set([1, 2, 2, 3]))

## 字典合并
d1 = {"a": 1}
d2 = {"b": 2}
{**d1, **d2}  ## {"a": 1, "b": 2}

## 默认值
result = value or default

## 条件表达式
if x in [1, 2, 3]:
    pass
```

#### 13.2 调试技巧

```python
## 打印调试
print(f"x = {x}")

## 查看类型
type(obj)

## 查看属性和方法
dir(obj)

## 查看文档
help(function)

## 断言
assert x > 0, "x 必须大于 0"

## pdb 调试器
import pdb
pdb.set_trace()  ## 设置断点
```

#### 13.3 性能优化

```python
## 使用生成器代替列表(节省内存)
sum(x**2 for x in range(1000000))  ## 好
sum([x**2 for x in range(1000000)])  ## 差

## 使用 set 检查成员(O(1) vs O(n))
if item in my_set:  ## 好
if item in my_list:  ## 差

## 字符串拼接
"".join(strings)  ## 好
result = ""
for s in strings:
    result += s  ## 差

## 使用局部变量(更快)
def func():
    local_len = len  ## 缓存全局函数
    for item in items:
        if local_len(item) > 10:
            pass
```

---

### 14. Python 之禅

```python
import this
```

输出:

```
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
...
```

**核心理念**: 优雅、明确、简单

---

### 附录: 快速参考

#### 常用操作

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

#### 常用内置函数

```python
len(), type(), isinstance()
print(), input()
range(), enumerate(), zip()
map(), filter(), sorted(), reversed()
sum(), max(), min(), abs()
all(), any()
int(), float(), str(), list(), dict(), set(), tuple()
```

---



## 常用命令速查表

### 快速参考

#### 最常用命令 TOP 20
```bash
python script.py              ## 运行脚本
python3 -m venv venv          ## 创建虚拟环境
source venv/bin/activate      ## 激活环境 macOS/Linux
venv\Scripts\activate         ## 激活环境 Windows
.\venv\Scripts\Activate.ps1   ## 激活环境 Windows PowerShell
deactivate                    ## 退出环境
pip install package           ## 安装包
pip install -r requirements.txt  ## 安装依赖
pip freeze > requirements.txt    ## 导出依赖
pip list                      ## 查看已安装包
pip show package              ## 查看包信息
pip uninstall package         ## 卸载包
python -m http.server         ## 启动 HTTP 服务
python -m pytest              ## 运行测试
python -m pdb script.py       ## 调试
black .                       ## 格式化代码
flake8 .                      ## 检查代码
python -c "code"              ## 执行单行代码
which python                  ## 查看 Python 路径
python --version              ## 查看版本
pip --version                 ## 查看 pip 版本
python -m pip install --upgrade pip  ## 升级 pip
```

---

### 1. Python 解释器

```bash
## 查看 Python 版本
python --version
python3 --version

## 进入交互式解释器(REPL)
python
python3

## 执行 Python 文件
python script.py
python3 script.py

## 执行 Python 代码(单行)
python -c "print('Hello World')"

## 执行模块
python -m module_name
python -m http.server 8000  ## 启动简单 HTTP 服务器

## 查看 Python 路径
which python
which python3

## 查看已安装的 Python 版本
ls /usr/bin/python*
```

---

### 2. pip 包管理

#### 基础操作
```bash
## 查看 pip 版本
pip --version
pip3 --version

## 升级 pip
pip install --upgrade pip
python -m pip install --upgrade pip

## 安装包
pip install package_name
pip install requests

## 安装指定版本
pip install package==1.0.0
pip install Django==4.0.0

## 安装最低版本
pip install package>=1.0.0

## 安装多个包
pip install requests pandas numpy

## 从 requirements.txt 安装
pip install -r requirements.txt

## 卸载包
pip uninstall package_name
pip uninstall -y package_name  ## 不确认直接卸载

## 升级包
pip install --upgrade package_name
pip install -U package_name  ## 简写
```

#### 查询操作
```bash
## 列出所有已安装的包
pip list

## 列出过期的包
pip list --outdated

## 查看包详细信息
pip show package_name
pip show requests

## 搜索包(已废弃,建议去 PyPI 官网搜索)
## pip search package_name

## 检查依赖冲突
pip check

## 导出已安装的包
pip freeze
pip freeze > requirements.txt

## 只导出当前项目的依赖(需要 pipreqs)
pip install pipreqs
pipreqs . --force
```

#### 高级操作
```bash
## 下载包(不安装)
pip download package_name

## 从本地文件安装
pip install ./package.whl

## 安装可编辑模式(开发模式)
pip install -e .

## 清理缓存
pip cache purge
pip cache dir  ## 查看缓存目录

## 指定国内镜像源(加速)
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple package_name

## 永久配置镜像源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

---

### 3. 虚拟环境

#### venv(内置)
```bash
## 创建虚拟环境
python3 -m venv venv
python3 -m venv myenv

## 激活虚拟环境
source venv/bin/activate      ## macOS/Linux
venv\Scripts\activate         ## Windows
.\venv\Scripts\Activate.ps1   ## Windows PowerShell

## 退出虚拟环境
deactivate

## 删除虚拟环境(直接删除文件夹)
rm -rf venv
```

#### virtualenv
```bash
## 安装 virtualenv
pip install virtualenv

## 创建虚拟环境
virtualenv venv
virtualenv -p python3.11 venv  ## 指定 Python 版本

## 激活/退出(同 venv)
source venv/bin/activate
deactivate
```

#### conda
```bash
## 创建环境
conda create -n myenv python=3.11

## 激活环境
conda activate myenv

## 退出环境
conda deactivate

## 列出所有环境
conda env list
conda info --envs

## 删除环境
conda remove -n myenv --all

## 导出环境
conda env export > environment.yml

## 从文件创建环境
conda env create -f environment.yml
```

---

### 4. 文件和模块操作

```bash
## 运行 Python 脚本
python script.py

## 传递命令行参数
python script.py arg1 arg2

## 运行模块
python -m package.module

## 查看模块路径
python -c "import sys; print(sys.path)"
python -c "import package; print(package.__file__)"

## 查看内置模块
python -c "import sys; print(sys.builtin_module_names)"

## 生成字节码文件(.pyc)
python -m py_compile script.py

## 优化字节码
python -O -m py_compile script.py
```

---

### 5. 调试和测试

#### 调试
```bash
## 使用 pdb 调试器
python -m pdb script.py

## 详细输出(显示导入模块)
python -v script.py

## 警告控制
python -W all script.py      ## 显示所有警告
python -W ignore script.py   ## 忽略警告

## 性能分析
python -m cProfile script.py

## 内存分析
python -m memory_profiler script.py
```

#### 测试
```bash
## 运行 unittest
python -m unittest test_module.py
python -m unittest discover  ## 自动发现测试

## 运行 pytest
pytest
pytest test_file.py
pytest -v  ## 详细输出
pytest -k "test_name"  ## 运行特定测试

## 代码覆盖率
pip install coverage
coverage run -m pytest
coverage report
coverage html  ## 生成 HTML 报告
```

---

### 6. 代码格式化和检查

```bash
## black - 代码格式化
pip install black
black script.py
black .  ## 格式化所有文件

## autopep8 - PEP 8 格式化
pip install autopep8
autopep8 --in-place --aggressive script.py

## flake8 - 代码检查
pip install flake8
flake8 script.py

## pylint - 代码分析
pip install pylint
pylint script.py

## mypy - 类型检查
pip install mypy
mypy script.py

## isort - 导入排序
pip install isort
isort script.py
```

---

### 7. 项目管理

#### Poetry
```bash
## 安装 Poetry
curl -sSL https://install.python-poetry.org | python3 -

## 初始化项目
poetry init

## 添加依赖
poetry add requests
poetry add --dev pytest  ## 开发依赖

## 安装依赖
poetry install

## 激活虚拟环境
poetry shell

## 运行脚本
poetry run python script.py

## 构建项目
poetry build

## 发布到 PyPI
poetry publish
```

#### Pipenv
```bash
## 安装 Pipenv
pip install pipenv

## 创建环境并安装包
pipenv install requests

## 激活环境
pipenv shell

## 运行脚本
pipenv run python script.py

## 安装开发依赖
pipenv install --dev pytest

## 锁定依赖
pipenv lock

## 查看依赖图
pipenv graph
```

---

### 8. 打包和分发

```bash
## 安装打包工具
pip install setuptools wheel twine

## 构建分发包
python setup.py sdist bdist_wheel

## 上传到 PyPI
twine upload dist/*

## 使用 build(推荐)
pip install build
python -m build

## 创建可执行文件
pip install pyinstaller
pyinstaller script.py
pyinstaller --onefile script.py  ## 单文件
```

---

### 9. Web 服务

```bash
## 启动简单 HTTP 服务器
python -m http.server
python -m http.server 8000  ## 指定端口
python -m http.server 8000 --bind 127.0.0.1  ## 指定地址

## Flask 开发服务器
export FLASK_APP=app.py
flask run
flask run --host=0.0.0.0 --port=5000

## Django 管理命令
python manage.py runserver
python manage.py migrate
python manage.py createsuperuser
python manage.py makemigrations
python manage.py shell
python manage.py collectstatic
```

---

### 10. 数据库操作

```bash
## SQLite
python -c "import sqlite3; print(sqlite3.version)"
sqlite3 database.db

## Django ORM
python manage.py dbshell

## SQLAlchemy
python -c "from sqlalchemy import create_engine; ..."

## 数据库迁移(Alembic)
alembic init migrations
alembic revision --autogenerate -m "message"
alembic upgrade head
alembic downgrade -1
```

---

### 11. 文档生成

```bash
## Sphinx
pip install sphinx
sphinx-quickstart
sphinx-build -b html source build

## 从代码生成文档
sphinx-apidoc -o docs/ src/

## pydoc(内置)
python -m pydoc module_name
python -m pydoc -w module_name  ## 生成 HTML
python -m pydoc -p 8080  ## 启动文档服务器
```

---

### 12. Jupyter/IPython

```bash
## 安装 Jupyter
pip install jupyter

## 启动 Jupyter Notebook
jupyter notebook

## 启动 JupyterLab
jupyter lab

## 转换 notebook
jupyter nbconvert --to html notebook.ipynb
jupyter nbconvert --to python notebook.ipynb

## IPython
pip install ipython
ipython
```

---

### 13. 环境信息

```bash
## 查看 Python 配置
python -m sysconfig

## 查看环境变量
python -c "import os; print(os.environ)"

## 查看系统信息
python -c "import platform; print(platform.platform())"

## 查看 Python 路径
python -c "import sys; print('\n'.join(sys.path))"

## 查看已安装模块位置
python -m site

## 查看 pip 配置
pip config list
```

---

### 14. 实用工具命令

```bash
## JSON 格式化
python -m json.tool file.json
echo '{"name":"Alice"}' | python -m json.tool

## Base64 编解码
python -c "import base64; print(base64.b64encode(b'text'))"

## 生成随机密码
python -c "import secrets; print(secrets.token_urlsafe(16))"

## 计算文件 MD5
python -c "import hashlib; print(hashlib.md5(open('file','rb').read()).hexdigest())"

## 时间戳转换
python -c "import time; print(time.time())"
python -c "from datetime import datetime; print(datetime.now())"

## 启动 SMTP 调试服务器
python -m smtpd -n -c DebuggingServer localhost:1025

## URL 编解码
python -c "from urllib.parse import quote; print(quote('中文'))"
```

---

### 15. Git 相关

```bash
## .gitignore 典型内容
cat > .gitignore << EOF
venv/
__pycache__/
*.pyc
*.pyo
*.pyd
.Python
*.so
*.egg
*.egg-info/
dist/
build/
.pytest_cache/
.coverage
.env
EOF

## 添加 pre-commit 钩子
pip install pre-commit
pre-commit install
```

---

### 16. 常用快捷命令组合

```bash
## 快速启动新项目
mkdir myproject && cd myproject
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install flask pytest black

## 清理 Python 缓存
find . -type d -name "__pycache__" -exec rm -r {} +
find . -type f -name "*.pyc" -delete

## 一键安装常用包
pip install requests pandas numpy matplotlib flask django pytest black flake8

## 导出依赖并重装
pip freeze > requirements.txt
pip uninstall -y -r <(pip freeze)
pip install -r requirements.txt
```

---

### 17. 国内镜像源

```bash
## 清华源
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple package

## 阿里云
pip install -i https://mirrors.aliyun.com/pypi/simple package

## 腾讯云
pip install -i https://mirrors.cloud.tencent.com/pypi/simple package

## 永久配置(Linux/macOS)
mkdir -p ~/.pip
cat > ~/.pip/pip.conf << EOF
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = pypi.tuna.tsinghua.edu.cn
EOF

## 永久配置(Windows)
## 文件路径: %APPDATA%\pip\pip.ini
```

---

### 18. 别名设置(提高效率)

```bash
## 添加到 ~/.bashrc 或 ~/.zshrc

## Python 相关
alias py='python3'
alias pip='pip3'
alias venv='python3 -m venv venv'
alias activate='source venv/bin/activate'

## pip 相关
alias pf='pip freeze'
alias pi='pip install'
alias pir='pip install -r requirements.txt'
alias pl='pip list'
alias pu='pip uninstall'

## Django
alias pm='python manage.py'
alias pmr='python manage.py runserver'
alias pmm='python manage.py migrate'
alias pmmm='python manage.py makemigrations'

## 测试
alias pt='pytest'
alias ptv='pytest -v'
alias ptc='pytest --cov'

## 格式化
alias fmt='black . && isort .'
```

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
