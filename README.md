# 简介

从零开始用React+webpack搭的一个响应式的react个人博客，数据源来自github的issues。git clone后，npm install（为了兼容ie用了一个polyfill()的包，如果会报丢失模块的错就cnpm install）npm run build 打包,npm start 以热更新形式运行。欢迎来到个人网站分享学习，同时网站开源，有任何不足的地方欢迎大家批评指正～(ps:个人网站的搭建日记也写在网站里)

待学习与精进：

* webpack只用一套代码设置两种环境的方法及性能考虑
* webpack按需加载也好或是什么也好要尽量减少bundle.js的体积
* css模块化升级利用哈希减少冲突
* 封装一些公用的js会不会更好
* 是否需要用redux，效果会更好吗，如果更好要怎么用