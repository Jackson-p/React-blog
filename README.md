# 简介

从零开始用React16+webpack4.0搭的一个响应式的react个人博客，数据源来自github的issues。git clone后，npm install。

npm run build 打包

npm start 以热更新形式运行。

欢迎来到个人网站分享学习，同时网站开源，有任何不足的地方欢迎大家批评指正～(ps:个人网站的搭建日记也写在网站里)

以下为各个版次大优化的emmmm，算日记

---

## 优化方案1.0

### 产品

还是不断地写博文，然后根据github的labels对应上比较好的内容分区，这样比较合适，没准还能顺其自然出个书嘿嘿嘿，内容来自书和社区

* 主页推偏日记类的life ，只有这一个种类

* learn页仿照黄玄实现技术文章分类，并按标签提取。

* about页毛笔motto加入，总体重写。

* 都完事了可以考虑换用王也道长头像

### CSS&&细节

* 页码刚满问题

* ~~middle组件中：上下浮动特效速度有时不匹配纠正与下拉核心图片消失问题~~

* scroll事件函数节流or框架内onWheel代替（自带节流）

### Webpack

按需加载（体现在库里面，分离核心库），ugly代码压缩等系列,用官方的analyz查看了一下，好像bundle里面还真没有太冗余的东西。。。学会了优化回头看吧。总体来讲就是大大减少bundle.js的体积，或者说总体上不只使用bundle.js而是采用code split的方式。还有一些硬性优化像antd库如果性价比不高，便手动实现一些功能


### IE兼容性

以前好像是因为axios的缘故导致IE无法兼容，当时引入了es6-promise的ployfill，其中引入了一个叫url-parse的老包导致了github页面上的安全警告（安全第一嘛），所以既然已经注释掉了，就要想想如何合理地解决ie兼容性问题。


### 其他或新技术能否优化

* redux实现对所有githubissue的统一管理
* PWA借助serviceworker实现离线缓存

