---
title:  erlang项目流程查看技巧
date: 2018-04-09 12:05:00 
tags: [erlang] 
categories: erlang 
description: 一点关于erlang的感悟
---

在公司用过erlang一段时间，主要是用erlang来加密传输数据的，现在把我关于erlang的一点感悟写出来，现在erlanng项目基本框架都是用rebar生成的，所以大部分erlang项目都用一些类似的特点。<!--more-->

一般都有几个基本的的文件夹，如图：

![52323974345](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/erlang_01.png)

先说说相关文件夹的作用：

1、bin主要是存放数据库的，因为公司项目主要是做手机银行后台的，具体内容我不能说，我们主要使用的数据库是mnesia,用于存放项目的相关数据。

2、config文件夹是用来存放配置文件的，比方说连接的ip地址

3、include文件夹是用来存放头文件的

4、ebin文件夹主要是放beam文件的，beam文件是erlang编译后生成的文件

5、log是存放报文的，分析问题的时候经常会使用报文

6、script文件夹是存放脚步文件的

7、用得最多的是src文件夹，我们写的erlang代码一般是放在里面

然后说先erlang项目的入口，向java和c都有main入口，erlang也有自己的入口，是一个后缀名为.app的文件，还是以网上比较出名的erlang项目远古封神来看，是用sublime text3找到server.app，这里面可以提供很多项目的相关信息，如图：![rlang_0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/erlang_03.png)

主要看mod对应的值yg_server_app,然后我们搜索yg_server_app.erl，这是我们的启动模块

在这里面有一个函数start就是我们的入口，如图

![rlang_0](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/erlang_02.png)

这个模块引用了两个头文件，common.hrl和record.hrl,这两个文件主要是存放一些我们经常会使用的常量的，关于启动函数，其他不管，我们找到yg_server_sup和yg_server这两个模块，先看yg_server_sup，这个模块主要是启动启动一个监控，关于erlang监控，可以看我的另外一篇博客，然后是yg_server这个模块，如图

![52324802070](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/erlang_04.png)

这里面就是启动各种服务的地方了，我们随便看一个，比如跟客户端相关的服务，start_client(),如图

![52324869532](https://raw.githubusercontent.com/ganmyds/markdown_img_test/master/img/erlang_05.png)

这里面也是各种开启监控树。









