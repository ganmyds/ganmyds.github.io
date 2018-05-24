---
title:  巧妙解决hexo博客使用的图片的处理
date: 2018-04-15 16:05:00 
tags: [hexo] 
categories: hexo 
description: 处理hexo博客图片提交的麻烦
---

使用github和hexo搭建博客一段时间了，感觉图片的处理还真是挺麻烦的，有两个问题：<!--more-->

1、因为自己的博客经常要修改，会很频繁的使用hexo clean这个命令，经常会把图片清空，然后又要重新导入图片

要特别注意路径的处理，感觉挺浪费时间的

2、github提供的空间只有1g,图片会占用非常多的空间，对自己github未来的使用有负面影响

于是，根据这些问题，查阅了一些资料，找到了一个很好的处理方法，那就是使用在线链接，一般都是用图床放图片，但是大部分图床都是收费的，所以我没有选择图床，而是使用了另外一个工具，那就是github，我们可以申请一个github专门放自己的图片，然后所有博客都使用图片的在线地址即可，现在简单为初学者介绍具体步骤：

(1)、申请一个github小号，步骤和你申请博客的github帐号一样，注意邮箱不能和博客帐号的邮箱一样，我们可以申请一个qq小号用于接受github邮件

(2)、新建一个仓库，我创建的是ganmyxh.io，考虑到以后有可能会在这个仓库里面放html就这样创建，你如果只是放图片这里可以随便取名，点击Create repository

![ithub_img_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/github_img_01.png?raw=true)





(3)、进入仓库，复制仓库路径，如图

![ithub_img_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/github_img_02.png?raw=true)

(4)、在桌面上新建一个文件夹，github_img,右键打开git，输入命令git clone 加你的的地址



(5)、进入目录ganmyxh.io，新建文件夹img,如图

![ithub_img_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/github_img_03.png?raw=true)

(6)、把图片放到img目录里面，在git里面输入

~~~bash
cd ganmyxh.io/
~~~

然后输入

~~~bash
git add .
~~~

说明一下，git add 后面那个.表示将你要提交的所有文件放到暂存区里面，然后依次输入下面两个命令

~~~bash
git commit -m "提交图片"
~~~

~~~bash
git push
~~~

这里会要你输入自己的用户名和密码，如图

![ithub_img_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/github_img_04.png?raw=true)



![ithub_img_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/github_img_05.png?raw=true)

(7)、进入我们的github，随便点到一张图片里面，右键->复制图片地址。注意不能复制网页上面的地址，

以后我们自己的博客图片地址都可以这样使用，就不用担心地址的问题了