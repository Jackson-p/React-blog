import React from 'react';
import 'antd/dist/antd.css';
import '../../css/PCHeader.css';
import {Link} from 'react-router-dom';
import {Row,Col} from 'antd';

export default class PCHeader extends React.Component{
    //通过路由传值给header组件决定哪种li是选定状态就加入className
    constructor(){
        super();
    }
    componentDidMount(){
        this.node.scrollIntoView();
       // window.onscroll = this.scrollTopHide.bind(this);
        window.addEventListener('scroll',this.scrollTopHide.bind(this));
    }
    scrollTopHide(){
        if(!this.node){
            return;
        }
        //document.documentElement.scrollTop==0
        if(document.documentElement.scrollTop==0 ){
            this.node.className+=" scrolltop"
        }else{
            this.node.className = "header";
        }      
    }
    render(){
        const selectedhead = this.props.selectedhead;
        return (
            <div className = 'header' ref={node => this.node = node} >
                <Col type="flex" justify="space-between" className = 'banner' span={22} >
                    <Col className = 'banner-header'  sm={4} md={6} lg={8} xl={10} >
                        <img src = './src/img/head.jpeg'  />
                        <h1>&nbsp;Jackson</h1>
                    </Col>
                    <Col xs={4} md={8} lg={10} xl={12} > 
                        <input type="checkbox" id="checkbox" style={{display:"none"}} />
                        <label className="respmenu" htmlFor="checkbox">
                            <span className="respIcon"></span>
                            <span className="respIcon"></span>
                            <span className="respIcon"></span>
                        </label>
                        <ul className = 'banner-tag' >
                            <Link to="/" ><li className = {selectedhead==1?"selected-tag":null }>Home</li></Link>
                            <a href="https://wjp.gitbook.io/mybook/" target="_blank" ><li>Learn</li></a>
                            <Link to="/demos" ><li className = {selectedhead==3?"selected-tag":null} >Demo</li></Link>
                            <Link to="/about" ><li className = {selectedhead==4?"selected-tag":null} >About</li></Link>
                        </ul>
                    </Col>
                    {/* <embed  id='peoclock' width="200" height="55"  src="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_tr.swf" quality="high" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowscriptaccess="always" /> */}
                </Col>
            </div>
        );
    }
}