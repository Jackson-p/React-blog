# 心路

先写个简陋的开始txt日记吧，用于记录自己练手用React栈搭个人博客的过程，希望可以学到东西 回头整理
6.14 日开始配webpack和目录位置等，试试es-lint, npm --save install sth 是以前用过的
安装包的同时会把版本号记录到package.json里面,--save-dev会安装到devDependencies里
dependencies：项目跑起来后需要使用到的模块
devDependencies：开发的时候需要用的模块，但是项目跑起来后就不需要了

配置react项目最重要的两个文件是入口文件（这里是src/index.js）和html模板文件(这里是public/index.html)，入口文件是整个项目开始运行的地方，模板文件是构建DOM树的地方，相信有一部分小伙伴在网上看到的教程是直接在打包路径build里面建一个index.html，然后手动或者使用html-webpack-plugin将打包后的js引入，这样存在一个问题是build本身是打包路径，而这个路径的所有文件都不应该是我们手动去添加的，甚至包括这个文件夹也不是我们事先建好的。所以最好是按照create-react-app的方式，将这类不需要被webpack编译的文件放到public路径下

现在要让webpack知道这就是我们的html入口文件，并且我们不需要手动引入打包后的js文件，需要安装html-webpack-plugin:
这个插件的作用，个人理解是在打包好的bundle.js同目录下生成一份模版HTML
然后报错了hhh，更新太快，为了练webpack，先不用成熟脚手架create-react-app了，虽然很好用，但留着做后路.
果然网上的教程都已经过时了，只好完整地看下webpack的文档了，明天先搭一个webpack环境出来吧
没没，仔细看了一下问题解决了！

别着急运行，react里面的JSX语法普通浏览器可解析不了，需要安装babel来解析：
npm install babel babel-cli babel-loader --save-dev
再安装两个分别用于解析es6和jsx语法的插件：
npm install babel-preset-env babel-preset-react --save-dev
走到这里还是不行了，webpack变化太大了好像还出了新东西，慢慢来看webpack文档自己重新搭吧orz,华丽的分界线

--------
6.15自己搭。。
path.resolve 把某路径组合解析为绝对路径

```js
path.resolve('/foo/bar', './baz')
// returns '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/')
// returns '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
// if the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

npm v5.2.0引入的一条命令（npx），引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。

1、临时安装可执行依赖包，不用全局安装，不用担心长期的污染。
2、可以执行依赖包中的命令，安装完成自动运行。
3、自动加载node_modules中依赖包，不用指定$PATH。
4、可以指定node版本、命令的版本，解决了不同项目使用不同版本的命令的问题

[为css增加类名的方法](https://blog.csdn.net/nanhupatar/article/details/79101797)

嗯嗯今天算是学到了webpack多输入多输出和那个HtmlWebpackPlugin其实是动态根据自己的bundle.js生成相关的index.html模版的

一顿操作之后还不知道是babel出现了问题，还是webpack出现了问题，现在git clone老项目下来的话包好像都不好使了，同样的招数不是总管用，技术更新太快
再来之前是安装webpack官网教程来的这里从新开始
这里先把后面的clean掉dist里面那个插件删掉了用的不多
心得babel这里不是先看babel的官网而是先看webpack的官网，再去观察babel-loader中需要的部分，react官网给的则是人家自己的脚手架555,好吧我错了，接着还是要看babel有没有能搞react的插件。。
果然巨讨厌的问题：Uncaught Error: Target container is not a DOM element.
简单说就是额，，，react没抓到那个root，我到现在。。至少排除了react解析的错误，还是单纯解决webpack的问题再说...我擦问题的所在就是那个插件官网上的HTMLwebpackplugin可能我用的不对吧，每次webpack后这个html都会重新生成会导致里面的DOM元素直接凉掉，当然啥也没有。。。
终于好使了，核心在于不太熟别乱加