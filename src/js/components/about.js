import React from 'react';
import '../../css/about.css';
import Header from './header';
import Footer from './footer';


export default class About extends React.Component{
    constructor(){
        super();
        this.state = {
            current:0
        }
    }
    render(){
        return (
            <div>
                <Header selectedhead={4}/>
                <div span={24} className="about-container">
                    <div className="motto">
                        <img src="./src/img/motto2.jpg" />
                    </div>
                    <div className="intro">
                        <h1>2019</h1>
                        <p>
                            用代码创造有趣的东西，发挥有趣的价值。
                            一名即将初出茅庐的大学生，定位是Web前端开发。
                        </p>
                        <p>
                            喜欢coding，剧、电影和动漫，对游戏逐渐失迷。爱音乐中度患者。
                            一直想健身。。。
                        </p>
                        <p>ps:除了热爱的开发以外，最近对道家思想蛮感兴趣的</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
}