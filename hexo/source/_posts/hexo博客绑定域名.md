---
title: hexo博客绑定域名
date: 2018-05-024 14:54:00 
tags: [hexo] 
categories: hexo
description: 详细讲解hexo博客绑定一级域名的过程
---

刚开始接触hexo博客的时候，感觉非常惊奇，尤其是next主题自带的各种方便的功能，但是部署到github上面一直都有一些不满意的地方，觉得github的域名不好，主要有以下几个问题：

1、.github.io是二级域名，始终有种寄人篱下的感觉，是github上的附属域名

2、地址太长，像我之前的博客地址是：

```bash
ganmyds.github.io/hexo_blog/
```

我自己都记不住，就别说别人了。

3、.github.io不支持收录到百度上，也就是说你的博客别人搜索不到，这样博客基本就失去了一半的价值了

4、没有自己的域名很多功能不能实现，比方说网站浏览数，评论功能

所以我的域名备案好了之后马上就开始搞域名的调整，记录一下：

#### 添加域名解析

进入阿里云服务器管理平台，找到域名管理，点击添加解析

![Q图片2018052411140](https://raw.githubusercontent.com/ganmyxh/ganmyxh.io/master/img/github_ymbd_01.png)



![Q图片2018052411275](https://raw.githubusercontent.com/ganmyxh/ganmyxh.io/master/img/github_ymbd_02.png)

按照图片上的说明输入就可以了。

#### 本地修改

进入你的博客地址，找到source文件夹，创建一个CNAME文件,右键gitbash

```bash
vi CNAME
```

然后键盘输入i,输入域名，保存，和linux的vi操作一样，然后hexo g，部署到github上就可以了，注意：

1、CNAME没有后缀，所以你最好用git来创建，不要创建一个txt文件然后把名字改成CNAME，这样很容易忘记去掉后缀，特别是有的电脑不显示后缀更麻烦

2、内容没有什么http:www，写域名部分就可以了，例如我的域名全称是

```bash
http://ganmyds.cn
```

那我输入的部分就是ganmyds.cn

#### github修改

进入你的博客的github路径，找到setting

![Q图片2018052411443](https://raw.githubusercontent.com/ganmyxh/ganmyxh.io/master/img/github_ymbd_03.png)

搜索`Custom domain`，把值改为你的域名，如图所示：

![Q图片2018052413544](https://raw.githubusercontent.com/ganmyxh/ganmyxh.io/master/img/github_ymbd_04.png)

如果没有操作好，就会出现404报错，如图所示

![Q图片2018052413562](https://raw.githubusercontent.com/ganmyxh/ganmyxh.io/master/img/github_ymbd_05.png)

网上很多绑定博客的教程都没有第三步，所以这里重点说明一下，有什么不懂的可以在评论里面说明哦！