---
title:  linux上面安装配置mysql
date: 2018-03-29 19:05:00 
tags: [linux, mysql] 
categories: linux 
description: linux上搭建mysql流程 
---


一个项目没有数据库可以说是无法想象的，作为一名开发人员，我们需要经常性的操作数据库。现在市面上有很多数据库可供我们使用，比如ACCESS，MSSQL，MYSQL，ORACLE，DB2,其中mysql可以说是目前最流行的数据库之一，mysql数据库主要有以下几个好处：<!--more-->

* 1. 免费
  2. 跨平台
  3. 轻量级
  4. 支持多并发

mysql只有在linux运行环境下才能充分发挥其威力，在linux环境下搭建mysql就变得非常有意义了，下面我为大家详细介绍linux下mysql的搭建

#### 下载mysql安装文件

   有两个文件，分别是mysql-connector-java-5.1.6-bin.jar和mysql-standard-4.0.26-pc-  linux-gnu-i686.tar.gz，[点击下载](https://pan.baidu.com/s/1es5NjK-VOiohtkScZKt6iw)

将两个安装文件拷贝到/home下,切换到root，输入命令：

su root

不会从windows传文件到linux上？[点这里传送](https://ganmyds.github.io/hexo_blog/2018/03/28/article02/)





#### 解压安装文件:

```bash
tar -zxvf  mysql-standard-4.0.26-pc-linux-gnu-i686.tar.gz
```



解压缩后我们会得到一个目录如图

![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_1.png)



#### 创建一个文件夹mysql :

```bash
mkdir mysql
```



#### 移动文件到mysql里，输入命令:

```bash
mv mysql-standard-4.0.26-pc-linux-gnu-i686 mysql
```



#### 创建一个组mysql

注意这个命令要root权限才能使用，专门创建mysql组是为了方便以后管理mysql下面   的各个用户，输入命令:

```bash
groupadd mysql
```



创建mysql用户放入mysql组，输入命令:

```bash
  useradd -g mysql mysql
```



#### 进入mysql目录

```bash
cd mysql
```



#### 初始化mysql数据库：

```bash
scripts/mysql_install_db  --user=mysql 
```

 如图就是初始化成功：

![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_5.png)

#### 修改权限

  将mysql目录下所有文件以及子文件的所有者改为root、所在组改为mysql，输入命令：

```bash
 chown -R root:mysql .
```

注意后面有个点，表示使用当前路径，然后将数据文件夹用户改为mysql,输入命令：

```bash
chown -R mysql data
```

我们检查一下是否成功改动，输入

```bash
 ls -l
```

结果如图所示：

![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_4.png)

#### 后台运行mysql

```bash
 bin/mysqld_safe   --user=mysql & 
```

结果如图所示：

![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_3.png)

#### 看看我们的mysql是否正常运行

```bash
netstat -anp | moe
```

看看3306端口是否存在，如图：

![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_2.png)

#### 进入bin目录

```bash
cd bin
```



#### 运行mysql

```bash
 mysql -u root -p
```



Enter password是要你输入密码，目前没有密码直接按enter即可，如图:

​              ![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_6.png) 

现在mysql已经成功的安装到我们的linux下面了。到这里基本完成了，如果你想让以后的工作更方便，看看下面的内容。



------



现在我们打开mysql非常麻烦，需要进入/home/mysql/bin目录下执行，为了减少麻烦，我们可以将这个路径配置到环境变量里面，输入命令 

```bash
 cd /root 
```

```bash
 vi  .bash_profile
```

改动如图

![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_7.png)

然后我们登出让配置文件生效，输入命令logout ，重新登录，现在你就可以在任意路径上运行mysql了。