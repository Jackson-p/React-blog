# 简介

从零开始用React16+webpack4.0搭的一个响应式的react个人博客，数据源来自github的issues。git clone后，npm install。

npm run build 打包

npm start 以热更新形式运行。

欢迎来到个人网站分享学习，同时网站开源，有任何不足的地方欢迎大家批评指正～(ps:个人网站的搭建日记也写在网站里)

---

## 优化方案2.0

### 性能优化（改版后变慢许多)

* webpack方面按需加载分离核心库（babel/polyfill记得要引入Promise部分，来解决IE兼容性问题，但为了速度保障暂时还没有引进），代码压缩或者是code split等方法大大减少bundle.js的体积，其实我突然这么一想，好像antd等库也全都引进来了，怪不得这么大。。。
split coding, CommonsChunkPlugin, tree shaking


[大全1](https://blog.csdn.net/weixin_40817115/article/details/80992301)
[大全2](https://www.jianshu.com/p/a64735eb0e2b)
[大全3](https://blog.csdn.net/fortunegrant/article/details/79534790)
[高端地引入所需包的固定内容](https://www.cnblogs.com/vajoy/p/5225843.html)
[按需加载之babel](https://segmentfault.com/q/1010000007998999)

减了antd就减了不少了













* 对路由切换时setState可能有错误，可能产生内存泄漏的问题的解决

* 数据缓存方面应该会有还要好的方案的吧

### 其他技术的学习与引用

* 自己写或者找到合适的库实现更好的markdown渲染，提取后的文章可建立markdown索引。
* PWA技术借助serviceworker实现离线缓存
* redux实现对所有githubissue的统一管理

### CSS&&细节

* 无限美化：包括字体的学习与升级（偏设计了)，字体颜色与斜体的应用啥的

### SEO优化

* 解决React div嵌套过深问题和React虚拟Dom不利于搜索引擎爬虫问题

### 踩过的坑也就是要学的

* 和Vue不一样的React解析方式，想要在事件里传参需要先bind后额外传参数，没想到这个还真的很重要。否则就会有传说中的setState死循环刷新，那么好问题来了，我们为啥要先bind呢？

https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=%E4%B8%BA%E4%BB%80%E4%B9%88react%E9%87%8C%E9%9D%A2%E7%9A%84%E4%BA%8B%E4%BB%B6%E8%A6%81%E5%86%99bind&oq=react%2520onclick%2520%25E4%25BC%25A0%25E5%258F%2582&rsv_pq=c8916b2500074067&rsv_t=ac60bU0kAtX7JcYPhLAWLbNe1qHT3eMIj3ro8Ph9HVr6SFkSyzLRltcttsA&rqlang=cn&rsv_enter=1&inputT=7715&rsv_sug3=213&rsv_sug1=105&rsv_sug7=100&rsv_sug2=0&rsv_sug4=8317

https://www.jianshu.com/p/3d0e7513ad83

https://blog.csdn.net/youyou_LIN/article/details/79673026

好，第一个思考题：为什么需要这么写来回调参数，React和Vue为什么在这点上有不同，即React总在事件后要bind以下。like onClick = {this.handleChange.bind(this,6)} 而不是 onClick = {this.handleChange(6).bind(this)}


* 在React生命周期中在取消挂载之后，仍然用取到的数据进行setState，会造成内存泄漏。

https://www.jianshu.com/p/a9d1f5aa719a

* unmount之后的setState进行处理，防止内存泄漏，也就是说在unmounted后取消axios请求，一般出现于路由切换。这个问题大佬们给出了两种方案，请求拦截和在unmount部分加处理，然后再顺便思考一下fetch在面对这类问题时的解决方案

* 清除浮动的n种方法？


# 历史版本

## 优化方案1.0

### 产品

~~还是不断地写博文，然后根据github的labels对应上比较好的内容分区，这样比较合适，没准还能顺其自然出个书嘿嘿嘿.~~

* ~~主页推偏日记类的life ，只有这一个种类~~

* ~~learn页实现技术文章分类，并按标签提取，~~

* ~~about页毛笔motto加入，总体重写。~~

* ~~可以考虑换用王也道长头像~~

### 性能优化

* ~~变量缓存也好，http方面缓存也好，实现尽量避免数据重复请求，或者对数据进行缓存。~~ 

### CSS&&细节

* ~~middle组件中：上下浮动特效速度有时不匹配纠正与下拉核心图片消失问题~~

* ~~scroll事件函数节流or框架内onWheel代替（自带节流）~~

* ~~提取公共css,保证页面样式基本兼容性,响应式布局。~~


### IE兼容性

~~以前好像是因为axios的缘故导致IE无法兼容，当时引入了es6-promise的ployfill，其中引入了一个叫url-parse的老包导致了github页面上的安全警告（安全第一嘛），所以既然已经注释掉了，就要想想如何合理地解决ie兼容性问题。所以还得是用人家babel的polyfill，用完感觉bundle.js又大了，哭。而且不止大了，这个babel-polyfill好慢的。。。。大哭~~(之前)
//require('es6-promise').polyfill();
//https://blog.csdn.net/LiangHui0914/article/details/78908386