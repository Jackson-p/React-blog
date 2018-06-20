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
终于好使了，核心在于不太熟别乱加,devserver其实很简单 就是打开某文档位置作为Web服务根目录

6.16 开始正式开发啦
先想看看用antd是怎样的 结果安装报错
Unexpected end of JSON input while parsing near '...oattachment":false,"t'
改变淘宝代理设置回去就行

npm config set registry http://registry.cnpmjs.org

遇到了没实时刷新的问题
//publicPath: './dist' =>  publicPath: '/dist'
就可以了emmm
这里用的新方法不同 以往不是用的import导入css 而是在主页面进行引用，不太喜欢吧，既然用webpack就包一起吧
注意在书写components中的路径时，才发现虚拟DOM部分对应的路径开始并不是当前路径，而是 项目整体所在的目录，所以用了'./src'

看到这里一定要时不时去看看flex布局orz,所以也抛弃了以前的简单浮动方式，因为看了下github也是用的flex布局所以尝试下(antd用的是简单的ul+li传统的那种方法)
回头学到在ReactDOM操作的时候可以用渲染去搞那个a标签的变色
注意react最后render的只是一个结点，所以中间有的那些自定义插件都要放在一个div里
突然发现一个坑：如果bundle进了css的话，里面引用的图片名字都不能后改，否则会报错，所以如果要bundlecss的话起名要慎重。。。。，否则我觉得可能要删掉这个bundle重新来一下了orz sorry 是我没改js里的路径蠢了蠢了上面不算

6.18 我想先学着从issue里提取数据,然后解决一下webpack直接打包没图片的问题，我觉得。。。这是loader的问题orz
问题出在了这个图片是通过css的background-img引用的，所以用的是“实路径”.
看了官网的file-loader之后知道要在option里改下名字，发现输出了disbcg.jpg到dist文件夹下，突然想到output那里的publicpath。。。。

其实是本地读取图片时的path在作妖,publicPath只会影响本地
GET file:///Users/wanghy/Documents/React-blog/+/src/img/bcg.jpg 0 ()
其实是这样一种囧境。。。
事到如今我才发现bundle.js的位置不是无缘无故放在那里的。。。。应该删掉dist，放在src里,最后兼顾本地直接打开，服务器打开，development测试的方法，改变weback输出位置，共用src

然后又出现了新的问题
：不即时更新了。。。老问题 注意下publicPath.要去掉。。publicPath是输出解析文件的目录也就是这里devServer的解析目录和图片的解析起始目录

6.20 虽是繁忙的期末考试，但是因为失眠总还是解决了图片问题和提取issue问题
注意用箭头函数的方法声明组件的时候是圆括号

## 待修正与升级

### 设计与交互层面

* 确定选定后变色(可参考antd)

* 移动到顶时调整header透明度几乎为0，下滑消失，上滑出现

* 页面scroll down时文字链接部分向下消失，否则向上消失

* Demo写一个todolist型的就可以了～

* 要有“一键升天”

* 响应式设计

* [参考一](https://lnoe-lzy.github.io/)

* [参考二](https://ant.design/components/dropdown-cn/#)

### 逻辑层面


* 从issue里提取数据生成比较基础的随笔页在首页，右侧是分类，还要有标签

* react-router文档看下实现切换页面

* [参考三](https://segmentfault.com/a/1190000011399153)