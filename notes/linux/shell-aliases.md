---
title: Linux 常用别名
description: 整理更高频、更安全的一组 Shell 别名，适合日常开发环境配置。
---

# Linux 常用别名

如果你希望减少重复输入、提升排障效率，建议先从这组别名开始，再按自己的习惯逐步裁剪。

## 常用别名

### 1. 文件与目录

```bash
alias ll='ls -lah'
alias la='ls -A'
alias l='ls -CF'
alias lt='ls -ltrh'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias c='clear'
alias cls='clear'
alias home='cd ~'
```

说明：

* `ll`：最常用，查看详细文件信息
* `lt`：按时间排序，常用于看最近改过的文件
* `..` / `...`：快速返回上级目录

---

### 2. 安全型文件操作

```bash
alias cp='cp -i'
alias mv='mv -i'
alias rm='rm -i'
alias mkdir='mkdir -pv'
```

说明：

* `-i`：覆盖前提示确认，减少误操作
* `mkdir -pv`：创建目录时显示过程，并支持多级目录

注意：

* 如果你追求极致效率，不一定要给 `rm` 加 `-i`
* 但新手或生产环境机器上这样更稳妥

---

### 3. 查看文件内容

```bash
alias catn='cat -n'
alias h='history'
alias j='jobs -l'
alias path='echo -e ${PATH//:/\\n}'
```

说明：

* `catn`：查看文件并显示行号
* `path`：把 `PATH` 一行一个目录显示出来，排查环境变量很方便

---

### 4. 磁盘与系统信息

```bash
alias dfh='df -h'
alias duh='du -sh *'
alias freeh='free -h'
alias psa='ps aux'
alias psg='ps aux | grep -i'
alias ports='ss -tunlp'
alias myip='ip addr'
alias cpu='lscpu'
alias mem='free -h'
```

说明：

* `duh`：快速查看当前目录下各文件/目录大小
* `psg`：后面直接跟关键词查进程
* `ports`：查看端口监听非常常用

示例：

```bash
psg nginx
```

---

### 5. 日志与服务排查

```bash
alias jf='journalctl -f'
alias jxe='journalctl -xe'
alias nginxlog='journalctl -u nginx -f'
alias applog='tail -f app.log'
alias grepE='grep -Rni'
```

说明：

* `jf`：实时查看系统日志
* `jxe`：出问题时常用，查看详细错误
* `grepE`：递归搜索文本时省事

示例：

```bash
grepE "error" .
```

---

### 6. 网络相关

```bash
alias pingg='ping google.com'
alias pingb='ping baidu.com'
alias ipinfo='ip -br addr'
alias route='ip route'
alias curlh='curl -I'
alias wgetc='wget -c'
```

说明：

* `ip -br addr` 输出更简洁，适合快速查看网卡和 IP
* `curlh` 常用于看接口响应头、排查重定向

---

### 7. Ubuntu / Debian 包管理

```bash
alias update='sudo apt update && sudo apt upgrade -y'
alias install='sudo apt install'
alias remove='sudo apt remove'
alias purge='sudo apt purge'
alias search='apt search'
alias autoremove='sudo apt autoremove -y'
```

说明：

* `update`：一条命令完成更新索引和升级
* `install nginx` 这种写法也比较顺手

示例：

```bash
install git
search docker
```

---

### 8. Git 常用别名

```bash
alias g='git'
alias gs='git status'
alias ga='git add'
alias gaa='git add .'
alias gc='git commit'
alias gcm='git commit -m'
alias gp='git push'
alias gpl='git pull'
alias gb='git branch'
alias gba='git branch -a'
alias gco='git checkout'
alias gl='git log --oneline --graph --decorate'
alias gd='git diff'
```

说明：

* 这组是开发中最常用的一组
* `gl` 很适合快速看提交历史

示例：

```bash
gs
gaa
gcm "fix login bug"
gp
```

---

### 9. Python / 开发常用

```bash
alias py='python3'
alias pipi='pip3 install'
alias venv='python3 -m venv .venv'
alias act='source .venv/bin/activate'
alias serve='python3 -m http.server 8000'
```

说明：

* `serve`：快速启动一个本地静态文件服务
* `venv` + `act`：很适合 Python 项目开发

---

### 10. Docker 常用

如果你常用 Docker，可以加：

```bash
alias d='docker'
alias dc='docker compose'
alias dps='docker ps'
alias dpa='docker ps -a'
alias di='docker images'
alias dlog='docker logs -f'
alias dex='docker exec -it'
alias drm='docker rm'
alias drmi='docker rmi'
```

示例：

```bash
dps
dlog my-container
dex my-container bash
```

---

### 11. 更实用的一组组合别名

```bash
alias now='date "+%Y-%m-%d %H:%M:%S"'
alias reload='source ~/.bashrc'
alias dusort='du -sh * | sort -h'
alias ptop='ps aux --sort=-%cpu | head'
alias mtop='ps aux --sort=-%mem | head'
alias listen='ss -lntp'
alias untar='tar -xzvf'
```

说明：

* `reload`：修改完配置后立即生效
* `dusort`：按大小排序，看谁最占空间
* `ptop` / `mtop`：快速定位高 CPU / 高内存进程

---

### 推荐直接加入 `.bashrc` 的一版

```bash
alias ll='ls -lah'
alias la='ls -A'
alias l='ls -CF'
alias lt='ls -ltrh'
alias ..='cd ..'
alias ...='cd ../..'
alias c='clear'

alias cp='cp -i'
alias mv='mv -i'
alias rm='rm -i'
alias mkdir='mkdir -pv'

alias dfh='df -h'
alias duh='du -sh *'
alias dusort='du -sh * | sort -h'
alias freeh='free -h'
alias psa='ps aux'
alias psg='ps aux | grep -i'
alias ports='ss -tunlp'

alias jf='journalctl -f'
alias jxe='journalctl -xe'

alias ipinfo='ip -br addr'
alias route='ip route'
alias curlh='curl -I'

alias update='sudo apt update && sudo apt upgrade -y'
alias install='sudo apt install'
alias autoremove='sudo apt autoremove -y'

alias g='git'
alias gs='git status'
alias ga='git add'
alias gaa='git add .'
alias gcm='git commit -m'
alias gp='git push'
alias gpl='git pull'
alias gl='git log --oneline --graph --decorate'

alias py='python3'
alias venv='python3 -m venv .venv'
alias act='source .venv/bin/activate'
alias serve='python3 -m http.server 8000'

alias reload='source ~/.bashrc'
alias now='date "+%Y-%m-%d %H:%M:%S"'
```

---

### 生效方法

把上面的内容追加到：

```bash
~/.bashrc
```

然后执行：

```bash
source ~/.bashrc
```

如果你用的是 `zsh`，就放到：

```bash
~/.zshrc
```

然后执行：

```bash
source ~/.zshrc
```

---

### 小提醒

有几个别名虽然方便，但要按习惯决定要不要加：

```bash
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'
```

优点是安全，缺点是批量操作时会多确认一步。
如果你已经很熟练，可能更喜欢保留原生命令行为。

---


加入 `~/.bashrc`：

```bash
alias ll='ls -lah'
alias la='ls -A'
alias l='ls -CF'
alias gs='git status'
alias gp='git pull'
alias ..='cd ..'
alias ...='cd ../..'
alias cls='clear'
```
