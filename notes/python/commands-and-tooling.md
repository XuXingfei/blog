---
title: Python 常用命令与工具链
description: 覆盖解释器、pip、虚拟环境、测试、格式化和项目管理的实用命令。
---

# Python 常用命令与工具链

如果你的目标是快速搭建开发环境、排查依赖问题或回忆常用命令，这一页会更直接。

## 常用命令速查表

### 快速参考

#### 最常用命令 TOP 20
```bash
python script.py              ## 运行脚本
python -m venv .venv          ## 创建虚拟环境
source .venv/bin/activate      ## 激活环境 macOS/Linux
.venv\Scripts\activate         ## 激活环境 Windows
.\.venv\Scripts\Activate.ps1   ## 激活环境 Windows PowerShell
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
# Python 字节码
__pycache__/
*.py[cod]
*$py.class

# 虚拟环境
venv/
.venv/
env/
ENV/

# IDE / 编辑器
.idea/
.vscode/
*.swp

# 构建产物
build/
dist/
*.egg-info/

# 日志 / 临时文件
*.log
*.tmp

# 操作系统
.DS_Store
Thumbs.db

# 测试 / 覆盖率
.coverage
htmlcov/
.pytest_cache/

# 配置文件（敏感信息）
.env
*.env
config.yaml
config.json
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
