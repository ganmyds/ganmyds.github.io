---
title:  hexo关于next主题的使用经验
date: 2018-04-17 10:42:00 
tags: [hexo] 
categories: hexo 
description: 记录hexo博客各种功能的添加，包括国际化、头像、社交链接、背景音乐等
---



ps: 之前用hexo写的博客一直有问题，首先是样式加载不到，我将hexo文件夹下的_config.yml里面的relative_link改为true之后就可以正常加载了，本来以为问题已经解决，但是替换next主题后陆陆续续各种路径找不到，索性就将hexo卸载重装，用了最新版本hexo后感觉世界都变得美好了，重新提交了blog，现在记录一下相关的配置。<!--more-->





### hexo卸载重装

卸载hexo，3.0.0之前版本执行

```bash
npm uninstall hexo -g
```

3.0.0之后版本执行

```bash
npm uninstall hexo-cli -g
```

查看hexo版本

```bash
hexo -v
```

安装最新版hexo

```bash
npm install hexo-cli -g
```

ps：npm删除模块通用命令：

```bash
npm uninstall xxx     //删除模块
npm uninstall -g xxx    //全局删除模块
```

### next主题安装

#### 下载next主题

​     进入你的博客下的themes文件夹下，目录结构类似Hexo\blog\themes，输入

```bash
git clone https://github.com/iissnan/hexo-theme-next themes/next
```

​     会下载一个next文件夹，如图所示

![exo_themes_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/hexo_themes_01.png?raw=true)

#### 修改主题

​        找到`Hexo\blog\\_config.yml(`貌似别的博客都称这个文件为站点配置文件，下面我也怎么称呼吧！)，将theme原来的landscape改为next,如图

![exo_themes_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/hexo_themes_02.png?raw=true)

​        重启服务，在git里面输入

```bash
hexo s
```



### 修改配置文件

#### 配置语言

​           现在你的主题就成功改好了，但是还有一些小小的问题

​           我们找到`Hexo\blog\themes\next_config.yml`，搜索title，修改如下:

```bash
# Site
title: 小小程序员
subtitle: 记录学习过程中的点点滴滴
description: 技术与生活，与我融为一体
keywords: linux
author: 甘明阳
language: zh-Hans
timezone: 
```

​           

然后我们去`Hexo\blog\themes\next\_config.yml`，搜索scheme，如图：

![exo_themes_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/hexo_themes_04.png?raw=true)

这里有四种样式可以供我们选择，记住，有一个要去掉#，然后其他三个要加上#

#### 添加头像

​           我们要加上自己的头像，在这个文件里搜索avatar，如图：

![exo_themes_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/hexo_themes_05.png?raw=true)

​           将avatar的值改为我们自己的图片路径，如图

![exo_themes_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/hexo_themes_06.png?raw=true)

#### 添加社交链接

​           还是在当前文件，搜索social，添加如下：

```bash
social:
  github: https://github.com/your-user-name
  twitter: https://twitter.com/your-user-name
  weibo: http://weibo.com/your-user-name
  douban: http://douban.com/people/your-user-name
  zhihu: http://www.zhihu.com/people/your-user-name
```

​           内容可根据需求增减

#### 添加背景音乐

​      使用hexo搭建的博客添加背景音乐非常简单，不同的主题改动稍微会有一点差别，以next主题为例，我们打开[网易云](http://music.163.com/)随便搜索一首歌，以未闻花名为例，点击进去

![exo_themes_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/hexo_themes_07.png?raw=true)

 点击生成外链播放器

![exo_themes_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/hexo_themes_08.png?raw=true)

选择不同的播放模式代码会不一样，想一进页面就播放音乐就选择自动播放，否则自动播放的对钩不要点，然后我们复制下面的代码

![exo_themes_0](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/hexo_themes_09.png?raw=true)

进入`hexo/themes/next/layout/_macro`,找到sidebar.swig,搜索links-of-blogroll，使用这个类的div是用来放置外链的，我们将复制的代码放到下面就可以了，如图：

![exo_themes_1](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/hexo_themes_10.png?raw=true)

然后，在git里面输入

```
hexo g
```

```
hexo s
```

现在打开localhost:4000就有效果了，如图

![exo_themes_1](https://github.com/ganmyxh/ganmyxh.io/blob/master/img/hexo_themes_11.png?raw=true)

[点击进入我的博客看看效果](https://ganmyds.github.io/hexo_blog/)

#### 添加字数统计功能

​     需要安装一个控件hexo-wordcount，在`Hexo\blog\`目录下安装，输入：

```bash
npm install hexo-wordcount --save
```

​     之前我在这一步遇到了一个报错，内容是

```bash
npm ERR! path C:\Users\home\Desktop\hexo_blog\blog\node_modules\minipass\node_mo                             dules
npm ERR! code EPERM
npm ERR! errno -4048
npm ERR! syscall scandir
npm ERR! Error: EPERM: operation not permitted, scandir 'C:\Users\home\Desktop\h                                 exo_blog\blog\node_modules\minipass\node_modules'
npm ERR!  { Error: EPERM: operation not permitted, scandir 'C:\Users\home\Deskto                                 p\hexo_blog\blog\node_modules\minipass\node_modules'
npm ERR!   stack: 'Error: EPERM: operation not permitted, scandir \'C:\\Users\\h                                 ome\\Desktop\\hexo_blog\\blog\\node_modules\\minipass\\node_modules\'',
npm ERR!   errno: -4048,
npm ERR!   code: 'EPERM',
npm ERR!   syscall: 'scandir',
npm ERR!   path: 'C:\\Users\\home\\Desktop\\hexo_blog\\blog\\node_modules\\minip                                 ass\\node_modules' }
npm ERR!
npm ERR! Please try running this command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\home\AppData\Roaming\npm-cache\_logs\2018-04-23T04_26_33_4                                 54Z-debug.log

```

在网上搜索了很多都没有看到有类似这个问题的，我感觉有可能是路径的问题，于是关掉本地服务器打算切换路径安装，结果有事忙忘了切换路径，居然成功安装了，原来原因是没有关掉本地服务器，囧！这里记录一下。

安装成功后，我们去主题配置文件里面搜索post_wordcount，改成如下配置

```bash
# Post wordcount display settings
# Dependencies: https://github.com/willin/hexo-wordcount
post_wordcount:
  item_text: true
  wordcount: true
  min2read: true
  totalcount: false
  separated_meta: true
```

刷新一下，字数统计功能就有了，但是现在是没有单位的

到`Hexo\blog\themes\next\layout\_macro\post.swig` 路径下

搜索`wordcount(post.content)`和`min2read(post.content)`，修改如下

```bash
<span title="{{ __('post.wordcount') }}">
     {{ wordcount(post.content) }}字
</span>
```

```bash
 <span title="{{ __('post.min2read') }}">
     {{ min2read(post.content) }}分钟
 </span>
```

#### 首页添加分页功能

分页功能需要下载对应的插件，git切换到`Hexo\blog\`依次输入：

```bash
npm install hexo-generator-index --save
```

```bash
npm install hexo-generator-archive --save
```

```bash
npm install hexo-generator-category --save
```

```bash
npm install hexo-generator-tag --save
```

到站点配置文件里面，搜索index_generator，修改如下：

```bash
#首页分页设置
index_generator:
  path: ''
  per_page: 5 #这里是配置5篇文章一页
  order_by: -date

#归档页的分页设置
archive_generator:
  per_page: 30
  yearly: true
  monthly: true
#标签页的分页设置
tag_generator:
  per_page: 20
```

#### 添加标题图片

之前在网上看到很多人的博客都配置了标题图片，感觉这样挺好看的，于是也想搞一下，没想到在网上找了半天都搜不到答案，估计是我没有描述清楚问题，感觉描述能力也挺重要的，反正我费了老大的劲才找到答案，现在记录一下：

其实很简单，我们主要在每个md文件的前面加上photos配置信息就可以了，如下：

```bash
---
title:  hexo关于next主题的使用经验
date: 2018-04-17 10:42:00 
tags: [hexo] 
categories: hexo 
description: 记录hexo博客各种功能的添加，包括国际化、头像、社交链接、背景音乐等11
photos: 
    - "http://oz2tkq0zj.bkt.clouddn.com/17-11-9/52323298.jpg"
---
```

#### 添加个性宠物

个性宠物需要安装插件，切换到`Hexo\blog\`目录下，输入

```bash
npm install -save hexo-helper-live2d
```

打开`Hexo/blog/themes/next/layout`,找到_layout.swig，,将下面代码放到`</body>`之前：

```bash
{{ live2d() }}
```

然后在在 `hexo` 的 `_config.yml`中添加参数：

```bash
live2d:
  model: wanko
  bottom: -30
```

然后`hexo clean`一下就行了

下面是所有宠物的名称，默认宠物是z16

* Gantzert_Felixander
* Epsilon2.1
* haru
* miku
* ni-j
* nico
* nito
* nipsilon
* nietzsche
* shizuku
* tsumiki
* wanko
* z16
* hibiki
* koharu
* haruto
* Unitychan
* tororo
* hijiki

width 宽度 默认值: 150，height 高度 默认值： 300，className `<canvas>`元素的类名 默认值： live2d，

id `<canvas>` 元素的id 默认值： live2dcanvas，bottom `<canvas>` 元素的底部偏移 默认值： -20 如果嫌模型位置不正确 可以调整这个参数

ps：如果不想在手机上显示宠物，修改配置文件如下：

```bash
live2d:
  model: wanko
  bottom: -30
  mobileShow: false
```



---

### 处理一些next的问题

#### 分类和标签按钮不能点击

​    next目前没有分类和标签页面，需要我们手动添加，首先添加分类页面，在git命令行里面输入：

```bash
hexo new page categories
```

完成后在source里面生成一个categories文件夹，我们进入`Hexo\blog\source\categories`，找到index.md，改动如下：

```bash
title: categories
date: 2018-04-17 15:47:33
type: "categories"
```

然后在git命令行里面输入:

```bash
hexo g
```

刷新页面，分类按钮就能点击了。

然后添加标签页面，输入：

```bash
hexo new page tag
```

进入`Hexo\blog\source\tag`，找到index.md,改动如下

```bash
title: categories
date: 2018-04-17 15:47:33
type: "tags"
```

剩下的步骤同上。

---

#### 点击首页回不去

   这个要看你的博客是不是处于子目录里面，例如我的博客路径为

```bash
 https://ganmyds.github.io/hexo_blog/
```

  就是有子目录,下面就是不含子目录

```bash
https://ganmyds.github.io/
```

如果你是将博客放在子目录里面，找到`Hexo\blog\themes\next\_config.yml`，搜索menu内容类似下面：

```bash
menu:
  home: /
  archives: /archives
  #about: /about
  #categories: /categories
  tags: /tags
  #commonweal: /404.html
```

将内容改为你博客的对应链接就可以了，例如我的改动是：

```bash
menu:
  home: https://ganmyds.github.io/hexo_blog/
  # about: /about/ || user
  tags: https://ganmyds.github.io/hexo_blog/tags/ || tags
  categories: https://ganmyds.github.io/hexo_blog/categories/ || th
  archives: https://ganmyds.github.io/hexo_blog/archives/ || archive
  # schedule: schedule/ || calendar
  # sitemap: sitemap.xml || sitemap
  # commonweal: 404/ || heartbeat
```



   