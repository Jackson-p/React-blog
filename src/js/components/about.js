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
                            大学的几年弄过微商，摆过地摊，卖过电话卡。<br />
                            参加过大型科创，ACM-CCPC拿奖，在校团委做网站，做做副部。<br />
                            自学了C/C++、Java、Js、PHP、Python毕业的时候还能记住一半。
                        </p>
                        <p>
                            真是一个有活力的少年hhh
                        </p>
                        <p>认真做毕设，入职之后就在北京做个全职的程序员了，fighting~</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
}