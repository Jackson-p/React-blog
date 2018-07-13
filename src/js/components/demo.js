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
            img1.src = "./src/img/demo1.png";
            img2.src = "./src/img/demo2.png";
            img3.src = "./src/img/demo3.png"
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
                    <a href="https://201585052.github.io/Single-Process-Handling/" target="_blank">
                        <div className="demolist">
                            <div className="demohead">
                                <img src="./src/img/demo1.png" />
                            </div>
                            <p>用js操作DOM实现动画模拟前三种调度算法，用Echart展示最后一种时间片轮转算法</p>
                        </div>
                    </a>
                    <a href="http://111.231.110.20/#/" target="_blank">
                        <div className="demolist">
                            <div className="demohead">
                                <img src="./src/img/demo2.png" />
                            </div>
                            <p>通过fetch向头条接口提取数据，通过react-responsive开发两套代码的方式来实现移动端适配</p>
                        </div>
                    </a>
                    <a href="https://201585052.github.io/Mud/" target="_blank">
                        <div className="demolist">
                            <div className="demohead">
                                <img src="./src/img/demo3.png" />
                            </div>
                            <p>canvas+面向对象的思路开发的小游戏,蓝色火柴人不断躲避生成的攻击球，每隔一段时间会有功能道具出现。生存时间即为分数</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="demolist">
                        
                        </div>
                    </a>
                </div>
                <Footer />
            </div>
        );
    };
}