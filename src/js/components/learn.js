import React from 'react';
import Header from './header';
import '../../css/learn.css';
import { Col, Row } from 'antd';

export default class Learn extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     artilist : ""
        // }
    }
    render(){
        const tagName = this.props.match?this.props.match.params.tagName:"";
        return(
            <div>
                <Header />
                <div className="block"></div>
                <Col span={24} className="container">
                    <Row type="flex" justify="center">
                        <Col span={ 14 } className="tagcloud">
                            <a id="all" className="alltagchecked">show all</a>
                            <a>HTML<sup>12</sup></a>
                            <a>CSS</a>
                            <a className="tagchecked">JS专题</a>
                            <a>Git</a>
                            <a>工具、库与框架</a>
                            <a>Web前端安全</a>
                            <a>Web前端测试</a>
                            <a>前端面试</a>
                            <a>后端</a>
                            <a>资源环境</a>
                        </Col>
                        <Col span={14} className="tag">All</Col>
                        <Col span={14} className="articles" >
                            <div className="previews">
                                <a href="www.baidu.com" className="links">
                                    <p className="post-title">Liaoliao</p>
                                    <p className="post-subtitle">brelly bliaoliao</p>
                                </a>
                                <hr />
                            </div>
                            <div className="previews">
                                <a href="www.baidu.com" className="links">
                                    <p className="post-title">Liaoliao</p>
                                    <p className="post-subtitle">brelly bliaoliao</p>
                                </a>
                                <hr />
                            </div>
                            <div className="previews">
                                <a href="www.baidu.com" className="links">
                                    <p className="post-title">Liaoliao</p>
                                    <p className="post-subtitle">brelly bliaoliao</p>
                                </a>
                                <hr />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}