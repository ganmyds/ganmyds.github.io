---
title:  linux和windows之间传输文件
date: 2018-03-28 12:05:00 
tags: [linux] 
categories: linux 
description: 通过SSH服务实现linux和windows之间便捷的连接
---

​    现在的开发流程一般都是在window上面写代码，然后在linux上面编译运行，但是windows和linux是不能直接传输文件的，下面我来详细的讲解linux与windows的传输，主要可以分为以下几步:<!--more-->

#### 1、让window和linux互相ping通

​      首先确认我们的ip地址，在window上输入ipconfig，如图是我window上的ip地址

​           ![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_connect_01.png)

​       然后在linux上输入ifconfig,如图所示

​           ![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_connect_02.png)

​        这两个ip的网段不同，不能ping通，我们要改为一个网段，ip的前三个数字要相同，第四个数字不同，现在我将   

​        linux上的ip改为192.168.214.66，输入命令：ifconfig eth0 192.168.214.66，注意这个命令只能暂时改变ip，     

​       关闭linux就失效了。

​       现在我们重新ping就可以了，如图：

​         ![52238922762](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_connect_03.png)

####   2、关闭linux防火墙，输入命令：

​        service iptables stop

​       注意这个命令需要root权限，要先切换到root再使用，结果如图：

​      ![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_connect_04.png)

####   3、如果你的系统是win7就要看这一步 ，不是的话可以直接跳过

​       在win7上我们要配置本地安全策略，在键盘上同时按win键和R键，win键就是ctrl和alt中间的那个键，输入

​      secpol.msc

​      如图：

​      ![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_connect_05.png)

​      找到本地策略->安全选项->网络安全：LAN管理器身份验证级别，把没有定义改为发送LM和NTLM-如果已协商，则使用NTLMV2会话安全，如图：

![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_connect_06.png)

#### 4、下载并安装SSH客户端，下载链接是：

​     https://pan.baidu.com/s/173u4chFGQrgB3HJoTG1Cng

​     密码是egc5

#### 5、双击SshClient.exe打开，点击Quick connect，如图



​       ![mg0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_connect_07.png)

#### 6、填写参数

Host Name是你的linux地址，User Name是你linux用户名，Port是对应的端口号，我们这里写22，如图：  

![inux_connect_](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_connect_8.png)

接下来输入你root用户的密码即可

#### 7、点击文件夹图标，如图：

![inux_connect_](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_connect_9.png)

#### 8、现在你可以直接拖动文件到linux上了，如图

![inux_connect_1](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/linux_connect_10.png)



​     

 