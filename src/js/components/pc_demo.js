import React from 'react';
import PCHeader from './pc_header';
import '../../css/PCDemo.css';
import PCFooter from './pc_footer';

export default class PCDemo extends React.Component{
    render(){
        return (
            <div className="demowhole">
                <PCHeader selectedhead={3} />
                <div className="block">
                </div>
                <div className="demodis">
                    <h1>Demo</h1>
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
                <PCFooter />
            </div>
        );
    };
}