# 简介

从零开始用React16+webpack4.0搭的一个响应式的react个人博客，数据源来自github的issues。git clone后，npm install。

npm run build 打包

npm start 以热更新形式运行。

欢迎来到个人网站分享学习，同时网站开源，有任何不足的地方欢迎大家批评指正～(ps:个人网站的搭建日记也写在网站里)

---



## 优化方案3.0

### 重点问题

* ~~新遇到的问题这里先写一下，github对于issue的请求限制在一次30条，加了token也是30条，难道不是因为token导致的频率请求限制，而是默认的请求限制？这个是核心矛盾会影响分类.~~

* ~~通过请求拦截避免用户重复请求（当然也可以停住屏幕画个圈圈那种）~~

* ~~在第二条中遇到的问题的问题是子组件的显示issue里面加了一条在发送请求前为父组件的loading设为true的语句，接着会发起axios网络请求。但调试中发现，请求的过程中因为setState（loading）在事件队列偏前，所以会触发父组件重渲染并且因为网络请求偏慢会导致子组件重新渲染又开始请求数据。好爆炸，解决方案只能是先提高耦合度解决问题了~~

* 产品层面有几处细改


### 其他技术的学习与引用

* 自己写或者找到合适的库实现更好的markdown渲染，提取后的文章可建立markdown索引,这个看到了是css问题，直接用github-like的css（也就是自己用的knowledge.css就好)

* 数据缓存方面应该会有还要好的方案的吧,如PWA技术借助serviceworker实现离线缓存？

## 优化方案4.0

### 性能优化

* 现在看从前的代码感觉不是很科学（组件和view部分），觉得应该重构。redux?一般redux用来解决跨组件通信或者说高交互问题，学习下看看合适不合适。

* 这个没完好吧，加载速度越快越好。

### CSS&&细节

* 无限美化：包括字体的学习与升级（偏设计了)，字体颜色与斜体的应用啥的

### SEO优化

* 解决React div嵌套过深问题和React虚拟Dom不利于搜索引擎爬虫问题


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

## 优化方案2.0

### 性能优化（第一次改版后)

#### ~~webpack综合优化~~

~~webpack方面按需加载分离核心库（babel/polyfill记得要引入Promise部分，来解决IE兼容性问题，但为了速度保障暂时还没有引进，后用babel/runtime解决此问题）~~

~~需要尝试的解决方案：~~

* ~~cdn外部引入,external~~
* ~~按需加载不引入整块(如antd)~~
* ~~split coding : vendor公共模块 and splitChunks~~
* ~~tree shaking~~
* ~~各种细节插件处理比如ModuleConcatenationPlugin合并闭包~~



#### ~~对路由切换时setState可能有错误，可能产生内存泄漏的问题的解决~~

~~在网速很慢的情况下，如果axios请求的数据尚未到达，就触发了路由切换，那么React组件销毁之后再进行setState就会发生报警。。。这个设一个标志位就好了，问题常出在长时间请求的promise回调~~



性能、维护、可服用、设计模式与规范、工程化。