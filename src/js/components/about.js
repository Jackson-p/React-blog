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
                    <div className="intro">
                        <h1>From 2019</h1>
                        <p>
                            幸福快乐来源于工作、学习与生活的平衡。
                        </p>
                        <p>
                            业余时间喜欢读读书，看看动漫、剧、电影。音乐爱好者。游戏有人一起的话还是蛮喜欢玩的。
                        </p>
                        <p> 有时间的时候还是要多出去溜达溜达，认识认识人hhh</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
}