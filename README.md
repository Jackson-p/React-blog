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

npm config set registry ht tp://registry.cnpmjs.org

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

6.21 今天突然发现。。。额，本地打包会有问题orz，要在publicPath那里加个点。。。

最近都忙着各科期末考试，先把要做的记录下来

6.26 重回开发：先是解决了一个jsx中标签与语句变量的问题，又解决了一个setstate渲染和Didmount问题；html引用js变量用{},html引用js函数用</>看似简单，容易错
,写样式自己写一个时间处理函数把issue里的时间用正则截一截这里用match
\i大小写,\g全局等当复习了,遇到的问题当然就是怎么在传递数据的过程中标准化这个时间了orz,之前错的原因有exec主体用反了了，和正则里最后不应该有$有点儿思维定式
今天就到react-router这里吧，明天实现打开一个issue进去之后能看到详情页就好啦，差点儿忘了首页的省略号，插件参考react-newspublish，后天实现标签转换，然后还有4天就小学期开学了，设计方面应该不是问题，没准可以在小学期结束之前完成这个小demo？算了，重点还是练响应式布局和react

6.27开始写router和link好像router中的route定义路径里的内容，而link对应跳转，试试在index中定义,然后改成了root为入口，然后突然发现～Link标签的本质就是一个a标签哈～但注意linkto的地址是已经建立在'/'之上的,text-overflow: ellipsis;和white-space,但只能局限于1行觉得不是太合适，所以还是摘要固定字数吧,用js手动再补一个'...'机智
遇到新的问题就是在其他页面中引入首页的这个。。。,路由会改变路径从而导致img 虚拟src发生变化orz,emm..先用报错的方法解决以后碰到好的了要回更，更重要的是index.html打包不好使了突然！！应该是router的事,和webpack关系不是太大,改用hash router 成功解决，这个两个的区别还是要知道一下的，，，，，好像顺便也解决了图片问题！
借用了下marked.js渲染markdown emmm.直接插入html好像不是那么安全,缺点是不能用>
然后看到了有关css3 box-shadow不错的讲解 三个参数：水平位移，垂直位移，模糊半径。
[参考](http://www.css88.com/tool/css3Preview/Box-Shadow.html)
然后用下highlight.js可以和marked无缝连接的做代码高亮,可好像只有代码效果，手动加的pre的背景颜色orz
6.28 看看今天能不能把issue都做完？顺便把router也做完？
先看看能不能提取指定的标签下的issue,这个逻辑比较混乱真是，然后成功意识到了哇props从父组件到子组件的传递真的是非常有效的呢，但是直接从Label里提到所属文章是不可能了..然后自己都不知道竟然这么简单就实现了标签分页～
然后感觉碰到了麻烦，解决了分页的话issue就基本就做完啦
page的控制部分应该在显示页面之前，也就是通过props给artibody传值,现在其实还不是太明白那个this.function.bind(this)的写法的含义到底是什么，真是太菜了，回头一定要好好看看
突然想到react好处：
1、组件化，可复用
2、避免了大量的DOM操作，快
3、数据流动简单，含state和prop
2*undefined+1 =NAN 惊了

```js
onError={(e)=>{e.target.src="../src/img/head.jpeg"}}
```

>可以回头看各种router
觉得对react有帮助
> 原css

```css
    .pc-artiTem-body p{
    text-overflow: ellipsis;
    overflow: hidden;
    width: 300px;
    height: 100px;
    white-space: nowrap;
}
```

```txt
issue完整博客系统+demo页+router+补充动态设计+相应页布局+精简整理代码
代码风格之命名规范：文件名下划线，css类名中划线，函数驼峰，组件双驼峰命名
```

终于写到了demo页和about页，逻辑之类的相对还是好写一点，还是设计与内容相对难想些

有关box-shadow的思考。。。

有关-webkit等浏览器内核样式的思考（莫非我真的是css不行？）

我今天好像终于知道了ghpages是干嘛的了，好像是让多个页面都使用github那一个仓库，这样就能把自己的项目都放到线上了

用了ref中的scroll into view + 设定个node ，轻松解决锚点问题

[css透明度问题](https://www.cnblogs.com/PeunZhang/p/4089894.html)

6.29 哇我感觉今天就能把about都能写完

6.30 今天我感觉能把PC端搞定。。。。

## 待修正与升级

### 设计与交互层面

* 页面scroll down时文字链接部分向下消失，否则向上消失 ok

* 文章页进去之后那个超美的天空层背景色带 ok

* 要有“一键升天” ok

* 确定选定后变色(可参考antd) ok

* 移动到顶时调整header透明度几乎为0，下滑消失，上滑出现 ok

### 逻辑层面

* 从issue里提取数据生成比较基础的随笔页在首页，右侧是分类，还要有标签 v（实现了更合适的 ok

* react-router文档看下实现切换页面 （懂了怎么用了） ok

* [参考三](https://segmentfault.com/a/1190000011399153)

--------
6.30 好吧真的就差那一丢丢，问题出现在pc_header的setstate他说出现了在未渲染时，可我明明设定的监听函数是在componentDidmount中的，费解。。。这点是warning，回头好好学一学看问题到底出在哪？先别急着用index的props解决,明白了问题其实就是叠加。。。所以关键就在于middle.js中willUnmount中把listener去掉，这里注意removelistener中取消的第二个参数，最后是绑定到了constructor的this里，解决！

搞定后剩下的就是细水长流留了，响应式布局针对所有大屏小屏移动端适配哇。。。。
前端性能优化webpack按需加载，服务器端渲染
代码精简，结构重构

* 响应式设计(包括em和rem)

* [参考一](https://lnoe-lzy.github.io/)

* [参考二](https://ant.design/components/dropdown-cn/#)

* 也可以参考alloyteam的响应式设计

* [em弹性布局](https://www.w3cplus.com/css/px-to-em)

哇，真的是一晚上的时间才写了一个响应式的header啊orz，flex布局+用了点儿antdesigin的栅格+自己手写了一个label隐藏input模仿js点击事件+媒体查询总算写出来了，可是感觉封装性，后头还是写不出来封装的吧哈哈，写的时候再说吧，没到那个项目呢

7.2了，这一阵子只有晚上可以做响应式了，白天学校有硬件综合训练orz
[对响应式布局的意见](http://www.chinaz.com/news/2016/0106/492567.shtml#content-media5)
不得不说写了响应式之后确实变慢了。。。可能是我写法的问题，而且还有emmm...header的动态问题,媒体查询+百分比是目前解决响应式布局的唯一方案？（至少连Boostrap都是这么做的,回头总结的时候要顺便看下Ant-design），react应该也是这样的，而flex布局是解决适配问题的,flex也可以用来帮助解决响应式布局哈哈
用git clone git://xxoo --depth 1看看可不可以真的让项目变小，传一下～
现在的问题还有点击文章类跳转的锚问题和兼容性问题

7.7 03:20 失眠了 起来敲代码，正好解决一下用正则表达式来处理Markdown文本那一部分，但是在处理 "* "时出现了麻烦
正则表达式还是得多练啊，下述是目前可以进行修改或者说优化的问题，从而可以深入地学习一下兼容性，懒加载、预加载，和正则表达式

* 对Mac safari的兼容性（部分画面不好看)
* 对图片读取的优化（懒加载、预加载？）
* js过滤出Markdown中的纯文本

现在先解决Mac safari兼容性问题可以,解决了样式问题和动画特效问题，学到了特别吊解决scollTop的方案（兼容所有浏览器）,多了一个background其实也可以好好写写

7.9我又来做评论系统了～，页面显示下评论就行，但是评论授权就算了那还不如跳转。
然后处理一下IE上不兼容的问题？  应该是babel解析es 6相关的问题，我看看用babel-polyfill cdn引入可不可以把～,
今天有大神的request到我这里然后我再进行优化修改吧，有一定问题大神那个，导致直接报错，所以只是一个参考思路，这番折腾，还是git用得不够溜啊
7.12完成了个人觉得比较合理的评论界面，因为比较简单算是自带响应式的吧，然后下一步就是对着大神的指示进行优化，看看到底可不可以让它的bundle变小很多同时兼容ie,55555
我写的笔记不见了，，，，也不到怎么了，可能有失误的操作忘保存啥的，先解决一下flex垂直居中在ie上的兼容性问题，
然后整理代码规范，写博文，这个bundle优化可以以后学到了好的方法再弄，哦对，超级感谢前辈的指点兼容ie11和bundle简化的方案。
好了 开发基本就到这告一段落了，然后写个博文总结一下，bundle的优化我觉得其实还好，因为其实光图片就占了1M，打包之后以后1.8M,
断断续续跨时1个月吧 算是 哈哈