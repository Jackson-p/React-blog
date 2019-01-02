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
            hidtrans:0,
            middisplay:"inline-block"
        };
        this.scrollMidHide = this.scrollMidHide.bind(this);
    }
    // debounce(func, wait = 100){
    //     let timeout;
    //     return function(event){
    //         clearTimeout(timeout);
    //         event.persist && event.persist()
    //         timeout = setTimeout(() => {
    //             func(event)
    //         },wait);
    //     };
    // }
    //这里的节流会很影响视觉效果，如果没有更优方案还是算了吧orz
    scrollMidHide(){
        let scrollTop,trans; 
        let opatemp,transtemp,mdisplaytemp;
        if(typeof window.pageYOffset != 'undefined'){//pageYOffset指的是滚动条顶部到网页顶部的距离 
            scrollTop = window.pageYOffset; 
        }else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat')        { 
            scrollTop = document.documentElement.scrollTop; 
        }else if(typeof document.body != 'undefined'){ 
            scrollTop = document.body.scrollTop; 
        } 
        trans = scrollTop - 200;
        //console.log(trans);
        //在未发生特殊移动时自动矫正为合理位置
        opatemp = 1;
        transtemp  = 0;
        mdisplaytemp = "inline-block";
        if(trans >= 0){
            //trans差不多为245时透明度要为0,中心内容浮出清除
            opatemp = 1 - trans/245.0;
            //中心内容完全离开画面（尾部，此时已清除），路程约为434
            transtemp = (434/245) * trans;
            //要保证清出的部分对原div在可视部分无影响
            if(trans > 434){
                mdisplaytemp = "none";
            }else{
                mdisplaytemp = "inline-block";
            }
        }
        if(this.state){
            this.setState({hidOpa : opatemp});
            this.setState({hidtrans : transtemp});
            this.setState({middisplay : mdisplaytemp})
        }
    }
    componentDidMount(){
        //window.onscroll = this.scrollMidHide.bind(this);  
        window.addEventListener('scroll',this.scrollMidHide);   
        //console.log(window);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.scrollMidHide);
    }
    render(){
        let HidMid = {
            opacity:`${this.state.hidOpa}`,
            transform:`translateY(${this.state.hidtrans}px)`,
            display:`${this.state.middisplay}`,
            transition:'all 1s'
        }
        return(
                <Col className="midimg" span={24}>
                    <div className="midtext" style={HidMid} >
                        <h1>Body is the capital of revolution.</h1>
                        <h1>Freedom is the embodiment of thought.</h1>
                        <a href="https://www.github.com/Jackson-p"><img src='./src/img/gitt.png' id="gi" /></a>
                        <a href="https://weibo.com/u/6046299335"><img src='./src/img/weibo.png' id="wb" /></a>
                    </div>
                </Col>
        );
    }
}