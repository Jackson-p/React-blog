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
                        <img src="./src/img/motto2.png" />
                    </div>
                    <div className="intro">
                        <h1>2019</h1>
                        <p>
                            顺利毕业，顺利入职。一切正常就好。
                            待平稳下来便开始Web前端之路，做一个合格的开发者先.
                        </p>
                        <p>(除了热爱的开发以外，最近对道家思想蛮感兴趣的)</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
}