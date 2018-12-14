import React from 'react';
import 'antd/dist/antd.css';
import '../../img/bcg.jpg';
import '../../css/middle.css';
import {Col} from 'antd';
export default class Middle extends React.Component{

    constructor(){
        super();
        this.state = {
            hidOpa:1,
            hidtrans:0
        };
        this.scrollMidHide = this.scrollMidHide.bind(this);
    }
    get_scrollTop_of_body(){ 
        var scrollTop; 
        if(typeof window.pageYOffset != 'undefined'){//pageYOffset指的是滚动条顶部到网页顶部的距离 
            scrollTop = window.pageYOffset; 
        }else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat')        { 
            scrollTop = document.documentElement.scrollTop; 
        }else if(typeof document.body != 'undefined'){ 
            scrollTop = document.body.scrollTop; 
        } 
        return scrollTop; 
    }
    componentDidMount(){
        //window.onscroll = this.scrollMidHide.bind(this);  
        window.addEventListener('scroll',this.scrollMidHide);   
        //console.log(window);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.scrollMidHide);
    }
    scrollMidHide(){
        let trans = (this.get_scrollTop_of_body() - 200)/4;
        let opatemp = this.state.hidOpa;
        if(opatemp-0.01*trans<=0){
            opatemp = 0;
        }else if(opatemp-0.01*trans>=1){
            opatemp = 1;
        }else{
            opatemp -= 0.01*trans;
        }
        let transtemp = this.state.hidtrans;
        if(transtemp+5*trans<=0){
            transtemp = 0;
        }else if(transtemp+5*trans>=400){
            transtemp = 400;
        }else{
            transtemp += 5*trans;
        }
        if(this.state){
            this.setState({hidOpa : opatemp});
            this.setState({hidtrans : transtemp});
        }
    }
    render(){
        let HidMid = {
            opacity:`${this.state.hidOpa}`,
            transform:`translateY(${this.state.hidtrans}px)`,
            transition:'all 1s'
        }
        return(
                <Col className="midimg" span={24}>
                    <div className="midtext" style={HidMid} >
                        <h1>We must be willing to get rid of the life we've planned,
                            so as to have the life that is waiting for us.
                        </h1>
                        <a href="https://www.github.com/201585052"><img src='./src/img/gitt.png' id="gi" /></a>
                        <a href="https://weibo.com/u/6046299335"><img src='./src/img/weibo.png' id="wb" /></a>
                    </div>
                </Col>
        );
    }
}