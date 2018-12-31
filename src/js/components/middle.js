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
    scrollMidHide(){
        let trans = this.get_scrollTop_of_body() - 200;
        console.log(trans);
        let opatemp,transtemp,mdisplaytemp;
        //在未发生特殊移动时自动矫正为合理位置
        opatemp = 1;
        transtemp  = 0;
        mdisplaytemp = "inline-block";
        if(trans >= 0){
            //trans差不多为232时透明度要为0
            opatemp = 1 - trans/232.0;
            //trans差不多为253时，中心内容离开画面，路程约为434
            transtemp = (434.0/253) * trans;
            if(opatemp < 0 || transtemp > 434){
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
                        <h1>We must be willing to get rid of the life we've planned,
                            so as to have the life that is waiting for us.
                        </h1>
                        <a href="https://www.github.com/Jackson-p"><img src='./src/img/gitt.png' id="gi" /></a>
                        <a href="https://weibo.com/u/6046299335"><img src='./src/img/weibo.png' id="wb" /></a>
                    </div>
                </Col>
        );
    }
}