# Linux

## 常用命令

### 1. 目录与文件

##### `pwd`

查看当前所在目录。

```bash
pwd
```

##### `ls`

查看目录内容。

```bash
ls
ls -l      # 详细信息
ls -a      # 显示隐藏文件
ls -lh     # 文件大小更易读
```

##### `cd`

切换目录。

```bash
cd /path/to/dir
cd ~       # 回到家目录
cd ..      # 上一级目录
cd -       # 回到上一次目录
```

##### `mkdir`

创建目录。

```bash
mkdir test
mkdir -p a/b/c   # 递归创建多级目录
```

##### `touch`

创建空文件。

```bash
touch file.txt
```

##### `cp`

复制文件或目录。

```bash
cp a.txt b.txt
cp -r dir1 dir2
```

##### `mv`

移动或重命名。

```bash
mv old.txt new.txt
mv file.txt /tmp/
```

##### `rm`

删除文件或目录。

```bash
rm file.txt
rm -r dir
rm -rf dir   # 强制递归删除，慎用
```

---

### 2. 文件内容查看

##### `cat`

查看整个文件内容。

```bash
cat file.txt
cat -n file.txt   # 显示行号
```

##### `less`

分页查看文件，适合大文件。

```bash
less file.txt
```

##### `head`

查看文件开头。

```bash
head file.txt
head -n 20 file.txt
```

##### `tail`

查看文件结尾。

```bash
tail file.txt
tail -f app.log   # 实时追踪日志
```

---

### 3. 搜索与文本处理

##### `find`

查找文件。

```bash
find . -name "*.log"
find . -type f
find . -mtime -1   # 1天内修改过
```

##### `grep`

搜索文本内容。

```bash
grep "error" app.log
grep -n "error" app.log    # 显示行号
grep -r "main" src/        # 递归搜索
grep -i "hello" file.txt   # 忽略大小写
```

##### `sed`

替换文本。

```bash
sed 's/old/new/' file.txt
sed -i 's/old/new/g' file.txt   # 直接修改文件
```

##### `awk`

按列处理文本。

```bash
awk '{print $1}' file.txt
awk -F: '{print $1}' /etc/passwd
```

---

### 4. 权限管理

##### `chmod`

修改权限。

```bash
chmod 644 file.txt
chmod 755 script.sh
chmod +x run.sh
```

说明：

* `644`：文件常用
* `755`：脚本、目录常用

##### `chown`

修改文件所有者。

```bash
sudo chown user file.txt
sudo chown -R user:group dir
```

---

### 5. 系统与进程

##### `ps`

查看进程。

```bash
ps aux
ps aux | grep nginx
```

##### `top`

动态查看系统资源和进程。

```bash
top
```

##### `kill`

结束进程。

```bash
kill 1234
kill -9 1234
```

##### `df`

查看磁盘空间。

```bash
df -h
```

##### `du`

查看目录大小。

```bash
du -sh .
du -sh /var/log
```

##### `free`

查看内存使用。

```bash
free -h
```

##### `uname`

查看系统信息。

```bash
uname -a
```

---

### 6. 网络相关

##### `ip`

查看网络信息。

```bash
ip addr
ip route
```

##### `ping`

测试网络连通性。

```bash
ping 8.8.8.8
ping baidu.com
```

##### `curl`

请求网页或接口。

```bash
curl https://example.com
curl -I https://example.com   # 只看响应头
```

##### `wget`

下载文件。

```bash
wget https://example.com/file.tar.gz
```

##### `ss`

查看端口占用。

```bash
ss -tuln
ss -tunlp
```

##### `ssh`

远程连接服务器。

```bash
ssh user@192.168.1.10
```

##### `scp`

远程复制文件。

```bash
scp file.txt user@host:/tmp/
scp user@host:/tmp/file.txt .
```

---

### 7. 压缩与解压

##### `tar`

打包和解压。

```bash
tar -cvf test.tar dir/
tar -xvf test.tar

tar -czvf test.tar.gz dir/
tar -xzvf test.tar.gz
```

##### `zip` / `unzip`

压缩与解压 zip 文件。

```bash
zip -r test.zip dir/
unzip test.zip
```

---

### 8. 软件包管理（Ubuntu 常用）

##### `apt`

安装、更新软件。

```bash
sudo apt update
sudo apt upgrade
sudo apt install nginx
sudo apt remove nginx
apt search nginx
```

---

### 9. 服务管理

##### `systemctl`

管理系统服务。

```bash
systemctl status nginx
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

##### `journalctl`

查看服务日志。

```bash
journalctl -u nginx
journalctl -u nginx -f
```

---

### 10. 常用重定向与管道

#### 输出到文件

```bash
echo hello > a.txt      # 覆盖写入
echo world >> a.txt     # 追加写入
```

#### 管道

```bash
ps aux | grep python
cat file.txt | wc -l
```

---

### 11. 高频命令速记

日常最常用的一批：

```bash
pwd
ls -lh
cd
mkdir -p
cp -r
mv
rm -rf
cat
less
tail -f
grep -rn
find
chmod +x
ps aux
top
df -h
du -sh
free -h
ip addr
ss -tunlp
ssh
scp
tar -xzvf
sudo apt install
systemctl status
journalctl -f
```

---

### 12. 使用建议

优先熟悉这几类：

* 文件操作：`ls` `cd` `cp` `mv` `rm`
* 内容查看：`cat` `less` `head` `tail`
* 搜索处理：`find` `grep` `sed` `awk`
* 系统排查：`ps` `top` `df` `du` `free`
* 网络连接：`ip` `ping` `curl` `ssh` `scp`

---

### 13. 注意事项

下面这类命令执行前一定确认：

```bash
rm -rf
chmod -R
chown -R
mkfs
dd
```

尤其是带 `sudo` 时，更要小心。

---

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

## 命令大全

### 1. 帮助与基础信息

##### `man`

查看命令的官方手册。

```bash
man ls
```

说明：

* `man` 是最权威的命令帮助文档。
* 进入后：

  * `/关键字` 搜索
  * `n` 下一个结果
  * `q` 退出

---

##### `--help`

快速查看命令参数说明。

```bash
ls --help
cp --help
```

说明：

* 比 `man` 更简洁。
* 适合快速确认参数写法。

---

##### `which`

查看命令的可执行文件路径。

```bash
which python
which ls
```

说明：

* 用于确认系统实际执行的是哪个程序。

---

##### `whereis`

查找命令、源码、帮助文档位置。

```bash
whereis ls
whereis python
```

---

##### `type`

查看命令类型。

```bash
type cd
type ls
```

说明：

* 判断某个名字是：

  * shell 内建命令
  * 可执行程序
  * 别名
  * 函数

---

##### `history`

查看历史命令。

```bash
history
history | tail -20
```

常用：

```bash
!100        # 执行 history 中编号 100 的命令
!!          # 执行上一条命令
```

---

### 2. 目录与文件操作

#### `pwd`

显示当前所在目录。

```bash
pwd
```

---

#### `ls`

列出目录内容。

```bash
ls
ls -l
ls -a
ls -lh
ls -lt
```

常用参数：

* `-l`：详细信息
* `-a`：显示隐藏文件
* `-h`：以人类可读方式显示大小
* `-t`：按时间排序

示例：

```bash
ls -lah
```

说明：

* 很常用，通常 `ls -lah` 足够查看当前目录详细内容。

---

#### `cd`

切换目录。

```bash
cd /home
cd ~
cd ..
cd -
```

说明：

* `cd ~`：回到用户家目录
* `cd ..`：返回上一级
* `cd -`：切换到上一个目录

---

#### `mkdir`

创建目录。

```bash
mkdir test
mkdir -p a/b/c
```

说明：

* `-p` 可以递归创建多级目录。

---

#### `rmdir`

删除空目录。

```bash
rmdir test
```

注意：

* 只能删空目录。
* 非空目录通常用 `rm -r`。

---

#### `touch`

创建空文件，或更新时间戳。

```bash
touch file.txt
```

---

#### `cp`

复制文件或目录。

```bash
cp a.txt b.txt
cp file.txt /tmp/
cp -r dir1 dir2
cp -a src/ dst/
```

常用参数：

* `-r`：递归复制目录
* `-a`：保留权限、时间等信息，常用于完整复制

---

#### `mv`

移动或重命名文件。

```bash
mv old.txt new.txt
mv file.txt /tmp/
mv dir1 dir2
```

说明：

* 同目录下使用一般是重命名
* 跨目录使用一般是移动

---

#### `rm`

删除文件或目录。

```bash
rm file.txt
rm -r mydir
rm -rf mydir
```

常用参数：

* `-r`：递归删除目录
* `-f`：强制删除，不提示

警告：

```bash
rm -rf /
```

极其危险，绝不要随便执行。

---

#### `ln`

创建链接。

#### 硬链接

```bash
ln file1 file2
```

#### 软链接

```bash
ln -s /path/to/file linkname
```

说明：

* 软链接类似快捷方式。
* 硬链接更接近文件实体的另一个名字。

---

### 3. 文件内容查看

#### `cat`

查看文件内容。

```bash
cat file.txt
cat -n file.txt
```

说明：

* `-n` 显示行号

---

#### `tac`

倒序显示文件内容。

```bash
tac file.txt
```

---

#### `more`

分页查看文件。

```bash
more file.txt
```

---

#### `less`

更强大的分页查看工具。

```bash
less file.txt
```

说明：

* 支持上下翻页、搜索
* 常用搜索：`/关键字`

---

#### `head`

查看文件开头内容。

```bash
head file.txt
head -n 20 file.txt
```

---

#### `tail`

查看文件末尾内容。

```bash
tail file.txt
tail -n 50 file.txt
tail -f app.log
```

说明：

* `-f` 常用来实时追踪日志变化。

---

#### `nl`

显示内容并带行号。

```bash
nl file.txt
```

---

#### `wc`

统计文件行数、单词数、字节数。

```bash
wc file.txt
wc -l file.txt
wc -w file.txt
wc -c file.txt
```

---

### 4. 文件查找与搜索

#### `find`

按条件查找文件，非常强大。

```bash
find /tmp -name "*.log"
find . -type f
find . -type d
find . -size +100M
find . -mtime -7
```

常用参数：

* `-name`：按名称查找
* `-type f`：普通文件
* `-type d`：目录
* `-size`：按大小
* `-mtime`：按修改时间

示例：删除 7 天前日志

```bash
find /var/log -name "*.log" -mtime +7 -delete
```

---

#### `locate`

快速查找文件路径。

```bash
locate nginx.conf
```

说明：

* 基于数据库搜索，速度快。
* 数据库可能不是实时的。
* 更新数据库：

```bash
sudo updatedb
```

---

#### `grep`

文本搜索神器。

```bash
grep "error" app.log
grep -n "error" app.log
grep -i "error" app.log
grep -r "hello" .
grep -v "debug" app.log
```

常用参数：

* `-n`：显示行号
* `-i`：忽略大小写
* `-r`：递归搜索
* `-v`：反向匹配

示例：

```bash
grep -rn "main" src/
```

---

#### `egrep`

支持扩展正则，等价于 `grep -E`

```bash
grep -E "error|warning" app.log
```

---

#### `sed`

流编辑器，适合替换、删除、提取文本。

#### 替换文本

```bash
sed 's/old/new/' file.txt
```

#### 全部替换

```bash
sed 's/old/new/g' file.txt
```

#### 原地修改文件

```bash
sed -i 's/old/new/g' file.txt
```

#### 删除某一行

```bash
sed '3d' file.txt
```

#### 打印某范围行

```bash
sed -n '1,5p' file.txt
```

说明：

* `sed` 很适合批量替换配置文件内容。

---

#### `awk`

文本分析工具，按列处理非常方便。

```bash
awk '{print $1}' file.txt
awk '{print $1, $3}' file.txt
awk -F: '{print $1}' /etc/passwd
```

说明：

* `$1` 表示第一列
* `-F` 指定分隔符

示例：查看系统用户

```bash
awk -F: '{print $1}' /etc/passwd
```

---

#### `sort`

排序。

```bash
sort file.txt
sort -n nums.txt
sort -r file.txt
sort -k2 file.txt
```

---

#### `uniq`

去重，通常和 `sort` 配合。

```bash
sort file.txt | uniq
sort file.txt | uniq -c
```

---

#### `cut`

按列截取文本。

```bash
cut -d: -f1 /etc/passwd
cut -c1-10 file.txt
```

说明：

* `-d`：分隔符
* `-f`：字段
* `-c`：字符范围

---

#### `tr`

字符转换或删除。

```bash
echo "abc" | tr 'a-z' 'A-Z'
echo "a b c" | tr -d ' '
```

---

#### `xargs`

将标准输入转换为命令参数。

```bash
echo "file.txt" | xargs cat
find . -name "*.log" | xargs rm -f
```

注意：

* 文件名里有空格时要小心。
* 更安全方式：

```bash
find . -name "*.log" -print0 | xargs -0 rm -f
```

---

### 5. 权限与用户

#### `chmod`

修改权限。

```bash
chmod 644 file.txt
chmod 755 script.sh
chmod +x run.sh
```

权限解释：

* `r`：读
* `w`：写
* `x`：执行

数字权限：

* `7` = rwx
* `6` = rw-
* `5` = r-x
* `4` = r--

常见：

* `644`：普通文件常见权限
* `755`：脚本、目录常见权限

---

#### `chown`

修改文件所有者。

```bash
sudo chown user file.txt
sudo chown user:group file.txt
sudo chown -R user:group mydir
```

---

#### `chgrp`

修改所属组。

```bash
sudo chgrp developers file.txt
```

---

#### `umask`

查看或设置默认权限掩码。

```bash
umask
umask 022
```

---

#### `id`

查看用户 UID、GID、组信息。

```bash
id
id username
```

---

#### `whoami`

查看当前用户名。

```bash
whoami
```

---

#### `who`

查看当前登录用户。

```bash
who
```

---

#### `w`

查看当前在线用户及其活动。

```bash
w
```

---

#### `su`

切换用户。

```bash
su
su - username
```

说明：

* `su -` 会加载目标用户完整环境。

---

#### `sudo`

以管理员权限执行命令。

```bash
sudo apt update
sudo systemctl restart nginx
```

说明：

* Ubuntu 中非常常用。

---

### 6. 压缩与解压

#### `tar`

打包和解包。

#### 打包

```bash
tar -cvf archive.tar dir/
```

#### 解包

```bash
tar -xvf archive.tar
```

#### 打包并 gzip 压缩

```bash
tar -czvf archive.tar.gz dir/
```

#### 解压 tar.gz

```bash
tar -xzvf archive.tar.gz
```

#### 打包并 xz 压缩

```bash
tar -cJvf archive.tar.xz dir/
```

#### 解压 tar.xz

```bash
tar -xJvf archive.tar.xz
```

参数说明：

* `-c`：创建
* `-x`：解压
* `-v`：显示过程
* `-f`：指定文件名
* `-z`：gzip
* `-J`：xz

---

#### `gzip` / `gunzip`

```bash
gzip file.txt
gunzip file.txt.gz
```

---

#### `zip` / `unzip`

```bash
zip -r test.zip dir/
unzip test.zip
```

---

### 7. 磁盘与文件系统

#### `df`

查看磁盘空间使用情况。

```bash
df
df -h
```

说明：

* `-h` 更易读。

---

#### `du`

查看目录或文件占用空间。

```bash
du -sh .
du -sh /var/log
du -h --max-depth=1
```

说明：

* `-s` 汇总
* `-h` 易读
* `--max-depth=1` 查看当前目录下每个子目录大小

---

#### `lsblk`

查看块设备信息。

```bash
lsblk
lsblk -f
```

说明：

* 常用于查看磁盘、分区、挂载点。

---

#### `mount`

挂载文件系统。

```bash
mount
sudo mount /dev/sdb1 /mnt
```

---

#### `umount`

卸载文件系统。

```bash
sudo umount /mnt
sudo umount /dev/sdb1
```

注意：

* 不是 `unmount`，而是 `umount`

---

#### `fdisk`

磁盘分区工具。

```bash
sudo fdisk -l
sudo fdisk /dev/sdb
```

说明：

* 风险较高，操作前确认磁盘名称。

---

#### `mkfs`

创建文件系统。

```bash
sudo mkfs.ext4 /dev/sdb1
```

警告：

* 会格式化分区，数据会丢失。

---

#### `blkid`

查看 UUID 和文件系统类型。

```bash
sudo blkid
```

---

### 8. 进程管理

#### `ps`

查看进程信息。

```bash
ps
ps -ef
ps aux
```

常用：

```bash
ps aux | grep nginx
```

---

#### `top`

实时查看系统进程。

```bash
top
```

说明：

* 类似任务管理器
* 可实时查看 CPU、内存使用情况

---

#### `htop`

更友好的进程查看工具。

```bash
htop
```

说明：

* 某些系统默认未安装，需要先安装。
* 界面更直观。

---

#### `kill`

终止进程。

```bash
kill 1234
kill -9 1234
```

说明：

* `1234` 是 PID
* `-9` 强制杀死，尽量最后再用

---

#### `pkill`

按进程名杀进程。

```bash
pkill nginx
pkill -f python
```

---

#### `killall`

按名称终止全部匹配进程。

```bash
killall firefox
```

---

#### `pgrep`

按名称查找进程 PID。

```bash
pgrep nginx
pgrep -a python
```

---

#### `jobs`

查看后台任务。

```bash
jobs
```

---

#### `bg`

把挂起任务放到后台运行。

```bash
bg %1
```

---

#### `fg`

把后台任务调回前台。

```bash
fg %1
```

---

#### `nohup`

使命令在退出终端后继续运行。

```bash
nohup python app.py &
```

输出通常写入：

```bash
nohup.out
```

---

#### `nice` / `renice`

调整进程优先级。

```bash
nice -n 10 python app.py
renice 5 -p 1234
```

---

### 9. 系统信息查看

#### `uname`

查看系统内核信息。

```bash
uname
uname -a
```

---

#### `hostname`

查看主机名。

```bash
hostname
hostnamectl
```

---

#### `uptime`

查看系统运行时长和负载。

```bash
uptime
```

---

#### `free`

查看内存使用情况。

```bash
free -h
```

---

#### `vmstat`

查看系统整体性能统计。

```bash
vmstat
vmstat 1
```

---

#### `iostat`

查看 CPU 和磁盘 IO 统计。

```bash
iostat
iostat -x 1
```

说明：

* 可能需要安装 `sysstat`

---

#### `mpstat`

查看 CPU 使用情况。

```bash
mpstat
mpstat -P ALL 1
```

---

#### `dmesg`

查看内核日志。

```bash
dmesg
dmesg | tail
```

说明：

* 看驱动、硬件、启动日志时很有用。

---

#### `lscpu`

查看 CPU 信息。

```bash
lscpu
```

---

#### `lsmem`

查看内存信息。

```bash
lsmem
```

---

#### `lspci`

查看 PCI 设备。

```bash
lspci
```

---

#### `lsusb`

查看 USB 设备。

```bash
lsusb
```

---

### 10. 网络相关命令

#### `ip`

现代 Linux 推荐网络工具。

#### 查看 IP 地址

```bash
ip addr
```

#### 查看路由

```bash
ip route
```

#### 启用网卡

```bash
sudo ip link set eth0 up
```

#### 禁用网卡

```bash
sudo ip link set eth0 down
```

---

#### `ping`

测试网络连通性。

```bash
ping 8.8.8.8
ping www.baidu.com
```

---

#### `curl`

发送 HTTP 请求，下载内容，调接口很常用。

```bash
curl https://example.com
curl -I https://example.com
curl -O https://example.com/file.zip
curl -X POST https://api.example.com
```

说明：

* `-I` 查看响应头
* `-O` 按原文件名下载
* 接口调试极其常用

---

#### `wget`

下载文件。

```bash
wget https://example.com/file.tar.gz
wget -c https://example.com/file.tar.gz
```

说明：

* `-c` 支持断点续传

---

#### `ss`

查看 socket / 网络连接。

```bash
ss -tuln
ss -anp
ss -tunlp
```

说明：

* 比 `netstat` 更现代

常见参数：

* `-t` TCP
* `-u` UDP
* `-l` 监听
* `-n` 数字显示
* `-p` 显示进程

---

#### `netstat`

旧工具，但很多系统仍在用。

```bash
netstat -tulnp
```

---

#### `traceroute`

追踪路由路径。

```bash
traceroute www.google.com
```

---

#### `nslookup`

查询域名解析。

```bash
nslookup google.com
```

---

#### `dig`

更专业的 DNS 查询工具。

```bash
dig google.com
dig google.com MX
dig @8.8.8.8 google.com
```

---

#### `scp`

通过 SSH 复制文件。

```bash
scp file.txt user@host:/tmp/
scp -r dir/ user@host:/tmp/
scp user@host:/tmp/file.txt .
```

---

#### `rsync`

高效同步文件，非常常用。

```bash
rsync -av dir/ /backup/
rsync -avz dir/ user@host:/backup/
rsync -av --delete src/ dst/
```

说明：

* `-a` 保留属性
* `-v` 显示过程
* `-z` 压缩传输
* `--delete` 让目标和源严格一致

---

#### `ssh`

远程登录服务器。

```bash
ssh user@192.168.1.10
ssh -p 2222 user@host
```

---

#### `sftp`

安全文件传输。

```bash
sftp user@host
```

---

### 11. 软件包管理

#### Ubuntu / Debian 系

##### `apt` 包管理工具。

###### 更新软件源

```bash
sudo apt update
```

###### 升级软件

```bash
sudo apt upgrade
```

###### 安装软件

```bash
sudo apt install nginx
```

###### 删除软件

```bash
sudo apt remove nginx
```

###### 彻底删除

```bash
sudo apt purge nginx
```

###### 自动清理

```bash
sudo apt autoremove
```

###### 搜索软件

```bash
apt search nginx
```

###### 查看包信息

```bash
apt show nginx
```

---

##### `dpkg`

###### 底层包管理工具。

```bash
dpkg -l
dpkg -i xxx.deb
dpkg -r package_name
```

---

#### RHEL / CentOS 系

##### `yum`

```bash
sudo yum install nginx
sudo yum update
```

##### `dnf`

```bash
sudo dnf install nginx
sudo dnf update
```

---

### 12. 服务管理（systemd）

#### `systemctl`

管理系统服务。

#### 查看服务状态

```bash
systemctl status nginx
```

#### 启动服务

```bash
sudo systemctl start nginx
```

#### 停止服务

```bash
sudo systemctl stop nginx
```

#### 重启服务

```bash
sudo systemctl restart nginx
```

#### 重载配置

```bash
sudo systemctl reload nginx
```

#### 开机启动

```bash
sudo systemctl enable nginx
```

#### 禁止开机启动

```bash
sudo systemctl disable nginx
```

#### 查看全部服务

```bash
systemctl list-units --type=service
```

---

#### `journalctl`

查看 systemd 日志。

```bash
journalctl
journalctl -u nginx
journalctl -f
journalctl -xe
```

说明：

* `-u` 查看某个服务日志
* `-f` 实时跟踪

---

### 13. Shell 重定向与管道

#### 输出重定向 `>`

覆盖写入文件。

```bash
echo hello > a.txt
```

---

#### 追加重定向 `>>`

追加写入文件。

```bash
echo world >> a.txt
```

---

#### 错误重定向 `2>`

```bash
command 2> err.log
```

---

#### 标准输出和错误都重定向

```bash
command > all.log 2>&1
```

或

```bash
command &> all.log
```

---

#### 管道 `|`

把前一个命令输出作为后一个命令输入。

```bash
ps aux | grep nginx
cat file.txt | wc -l
```

---

### 14. 日期、时间与计划任务

#### `date`

查看或格式化日期时间。

```bash
date
date "+%Y-%m-%d %H:%M:%S"
```

---

#### `cal`

查看日历。

```bash
cal
cal 2026
```

---

#### `crontab`

定时任务管理。

#### 查看当前用户定时任务

```bash
crontab -l
```

#### 编辑定时任务

```bash
crontab -e
```

#### 删除定时任务

```bash
crontab -r
```

示例：每天凌晨 2 点执行脚本

```bash
0 2 * * * /home/user/backup.sh
```

格式说明：

```bash
分 时 日 月 周 命令
```

---

#### `at`

一次性定时任务。

```bash
at 10:30
at now + 1 hour
```

---

### 15. 文本编辑器

#### `vim`

强大的文本编辑器。

```bash
vim file.txt
```

基础模式：

* 普通模式：默认模式
* 插入模式：按 `i`
* 命令模式：按 `Esc` 后输入 `:`

常用：

* `:w` 保存
* `:q` 退出
* `:wq` 保存退出
* `:q!` 强制退出不保存

---

#### `nano`

更适合新手。

```bash
nano file.txt
```

说明：

* 底部直接显示快捷键，易用。

---

### 16. 用户与组管理

#### `useradd`

创建用户。

```bash
sudo useradd username
sudo useradd -m username
```

说明：

* `-m` 自动创建家目录

---

#### `passwd`

设置或修改密码。

```bash
sudo passwd username
passwd
```

---

#### `usermod`

修改用户属性。

```bash
sudo usermod -aG sudo username
```

说明：

* 把用户加入 `sudo` 组

---

#### `userdel`

删除用户。

```bash
sudo userdel username
sudo userdel -r username
```

说明：

* `-r` 一并删除家目录

---

#### `groupadd`

创建组。

```bash
sudo groupadd developers
```

---

#### `groupdel`

删除组。

```bash
sudo groupdel developers
```

---

#### `groups`

查看用户所属组。

```bash
groups
groups username
```

---

### 17. 环境变量与 Shell

#### `echo`

打印内容或变量值。

```bash
echo hello
echo $HOME
echo $PATH
```

---

#### `export`

设置环境变量。

```bash
export JAVA_HOME=/usr/lib/jvm/java-17
export PATH=$PATH:/opt/bin
```

---

#### `env`

查看环境变量。

```bash
env
```

---

#### `source`

重新加载 shell 配置文件。

```bash
source ~/.bashrc
source ~/.zshrc
```

---

#### `alias`

设置命令别名。

```bash
alias ll='ls -lah'
alias gs='git status'
```

查看全部别名：

```bash
alias
```

取消别名：

```bash
unalias ll
```

---

### 18. 常用开发辅助命令

#### `tee`

一边显示，一边写入文件。

```bash
echo hello | tee a.txt
echo world | tee -a a.txt
```

---

#### `basename`

取文件名部分。

```bash
basename /home/user/test.txt
```

输出：

```bash
test.txt
```

---

#### `dirname`

取目录部分。

```bash
dirname /home/user/test.txt
```

输出：

```bash
/home/user
```

---

#### `realpath`

查看绝对路径。

```bash
realpath file.txt
```

---

#### `seq`

生成序列。

```bash
seq 5
seq 1 2 9
```

---

#### `sleep`

暂停若干秒。

```bash
sleep 5
```

---

#### `watch`

周期性执行命令。

```bash
watch df -h
watch -n 1 "ps aux | grep python"
```

---

#### `time`

统计命令执行时间。

```bash
time ls
time python script.py
```

---

#### `stat`

查看文件详细状态信息。

```bash
stat file.txt
```

---

#### `file`

识别文件类型。

```bash
file a.out
file test.txt
file image.png
```

---

### 19. 日志与排障常用组合

#### 查看某服务日志

```bash
journalctl -u nginx -f
```

#### 查看端口占用

```bash
ss -tunlp | grep 8080
```

#### 查进程

```bash
ps aux | grep java
```

#### 查大文件

```bash
find / -type f -size +500M 2>/dev/null
```

#### 查最近修改文件

```bash
find . -type f -mtime -1
```

#### 统计目录大小

```bash
du -sh *
```

#### 查看 CPU/内存前几名进程

```bash
ps aux --sort=-%cpu | head
ps aux --sort=-%mem | head
```

#### 实时看日志关键字

```bash
tail -f app.log | grep --line-buffered ERROR
```

---

### 20. 打包整理后的高频命令速查

#### 文件操作

```bash
pwd
ls -lah
cd /path
mkdir -p dir
touch file.txt
cp -r src dst
mv old new
rm -rf dir
```

#### 查看内容

```bash
cat file.txt
less file.txt
head -20 file.txt
tail -f app.log
```

#### 搜索

```bash
find . -name "*.log"
grep -rn "error" .
sed -i 's/old/new/g' file.txt
awk -F: '{print $1}' /etc/passwd
```

#### 权限

```bash
chmod 755 script.sh
chmod +x run.sh
chown -R user:group dir
```

#### 系统

```bash
uname -a
free -h
df -h
du -sh .
top
ps aux
kill -9 PID
```

#### 网络

```bash
ip addr
ping 8.8.8.8
curl -I https://example.com
ss -tunlp
ssh user@host
scp file user@host:/tmp/
rsync -av src/ dst/
```

#### 服务

```bash
systemctl status nginx
sudo systemctl restart nginx
journalctl -u nginx -f
```

#### 包管理（Ubuntu）

```bash
sudo apt update
sudo apt upgrade
sudo apt install package_name
sudo apt remove package_name
```

---
