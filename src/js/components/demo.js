import React from 'react';
import Header from './header';
import '../../css/demo.css';
import Footer from './footer';

export default class Demo extends React.Component{
    componentWillMount(){
        this.addLoadEvent(this.preloader);
    }
    preloader(){
        if (document.images) {
            var img1 = new Image();
            var img2 = new Image();
            var img3 = new Image();
            var img4 = new Image();
            img1.src = "./src/img/demo1.png";
            img2.src = "./src/img/demo2.png";
            img3.src = "./src/img/demo3.png";
            img4.src = "./src/img/demo4.jpeg";
        }
    }
    addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    }
    render(){
        return (
            <div className="demowhole">
                <Header selectedhead={3} />
                <div className="demo-block"></div>
                <h1 align="center">Demo</h1>
                <div className="demodis">
                    <a href="https://www.github.com/201585052/Single-Process-Handling/" target="_blank">
                        <div className="demolist">
                            <div className="demohead">
                                <img src="./src/img/demo1.png" />
                            </div>
                            <p>用js操作DOM实现动画模拟前三种调度算法，用Echart展示最后一种时间片轮转算法</p>
                        </div>
                    </a>
                    <a href="https://www.github.com/201585052/React-newspublish/" target="_blank">
                        <div className="demolist">
                            <div className="demohead">
                                <img src="./src/img/demo2.png" />
                            </div>
                            <p>通过fetch向头条接口提取数据，通过react-responsive开发两套代码的方式来实现移动端适配</p>
                        </div>
                    </a>
                    <a href="https://www.github.com/201585052/Mud/" target="_blank">
                        <div className="demolist">
                            <div className="demohead">
                                <img src="./src/img/demo3.png" />
                            </div>
                            <p>canvas+面向对象的思路开发的小游戏,蓝色火柴人不断躲避生成的攻击球，每隔一段时间会有功能道具出现。生存时间即为分数</p>
                        </div>
                    </a>
                    <a href="https://www.github.com/201585052/fml/">
                        <div className="demolist">
                            <div className="demohead">
                                <img src="./src/img/demo4.jpeg" />
                            </div>
                            <p>node+exress(ejs模版引擎)+mongodb搭建的一个校园内学生互助的移动端网站，具有完整的注册登录、个人信息修改、内容发布、相互悬赏的后台逻辑，信息保存在mongodb数据库里。
                                项目使用forever模块运行在腾讯云服务器上。
                            </p>
                        </div>
                    </a>
                </div>
                <Footer />
            </div>
        );
    };
}