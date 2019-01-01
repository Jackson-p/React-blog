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

* learn页仿照黄玄实现技术文章分类，并按标签提取，提取后的文章可建立markdown索引。

* about页毛笔motto加入，总体重写。

* redux实现对所有githubissue的统一管理,实现避免数据重复请求，或者对数据进行缓存。

* 都完事了可以考虑换用王也道长头像


### Webpack

按需加载（体现在库里面，分离核心库），ugly代码压缩等系列,用官方的analyz查看了一下，好像bundle里面还真没有太冗余的东西。。。学会了优化回头看吧。总体来讲就是大大减少bundle.js的体积，或者说总体上不只使用bundle.js而是采用code split的方式。还有一些硬性优化像antd库如果性价比不高，便手动实现一些功能


### IE兼容性

以前好像是因为axios的缘故导致IE无法兼容，当时引入了es6-promise的ployfill，其中引入了一个叫url-parse的老包导致了github页面上的安全警告（安全第一嘛），所以既然已经注释掉了，就要想想如何合理地解决ie兼容性问题。

### CSS&&细节

* ~~middle组件中：上下浮动特效速度有时不匹配纠正与下拉核心图片消失问题~~

* ~~scroll事件函数节流or框架内onWheel代替（自带节流）~~

* 提取公共css 保证页面样式基本兼容性。

* 无限美化：包括字体的学习与升级（偏设计了)，字体颜色与斜体的应用啥的

### 其他或新技术能否优化

* PWA借助serviceworker实现离线缓存


觉得改版完成后再上线新版嗯

### 踩坑

* 和Vue不一样的React解析方式，想要在事件里传参需要先bind后额外传参数，没想到这个还真的很重要。否则就会有传说中的setState死循环刷新，那么好问题来了，我们为啥要先bind呢？

https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=%E4%B8%BA%E4%BB%80%E4%B9%88react%E9%87%8C%E9%9D%A2%E7%9A%84%E4%BA%8B%E4%BB%B6%E8%A6%81%E5%86%99bind&oq=react%2520onclick%2520%25E4%25BC%25A0%25E5%258F%2582&rsv_pq=c8916b2500074067&rsv_t=ac60bU0kAtX7JcYPhLAWLbNe1qHT3eMIj3ro8Ph9HVr6SFkSyzLRltcttsA&rqlang=cn&rsv_enter=1&inputT=7715&rsv_sug3=213&rsv_sug1=105&rsv_sug7=100&rsv_sug2=0&rsv_sug4=8317

https://www.jianshu.com/p/3d0e7513ad83

好，第一个思考题：为什么需要这么写来回调参数，React和Vue为什么在这点上有不同，即React总在事件后要bind以下。

