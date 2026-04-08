---
title: Linux 常用命令
description: 从目录、文件、权限、网络到服务管理的 Linux 高频命令入门。
---

# Linux 常用命令

适合刚接触 Linux 或需要快速回忆高频命令的读者，先覆盖日常开发和服务器操作中最常用的一组内容。

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
