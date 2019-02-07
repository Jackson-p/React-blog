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
                        <h1>From 2019</h1>
                        <p>
                            把广义的健身融入生活。
                            用代码创造有趣的东西，发挥有趣的价值。
                        </p>
                        <p>
                            业余时间喜欢读读书，看看动漫、剧、电影。音乐爱好者。游戏有人一起的话还是蛮喜欢玩的hhh
                        </p>
                        <p>ps:除了热爱的开发以外，最近对道家思想蛮感兴趣</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
}