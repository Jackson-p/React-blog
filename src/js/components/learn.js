import React from 'react';
import {Link} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import LearnBody from './learnbody';
import { Col, Row } from 'antd';
import '../../css/learn.css';

export default class Learn extends React.Component{
    constructor(){
        super();
    }
    render(){
        let tagName = (typeof(this.props.match.params.tagName) == "undefined")?"ALL":this.props.match.params.tagName;
        //const alltags = ['show all', 'HTML', 'CSS', 'JS专题', 'Git', '工具、库与框架', 'Web前端安全', 'Web前端测试', '前端面试', '后端', '资源环境', '计算机科学'];
        //console.log(choseTag);
        return(
            <div>
                <Header selectedhead={2}/>
                <div className="block"></div>
                <Col span={24} className="container">
                    <Row type="flex" justify="center">
                        <Col span={ 14 } className="tagcloud">
                            <Link to="/learntags/ALL" id="all" className={tagName == "ALL"?"alltagchecked":null} >show all</Link>
                            <Link to="/learntags/HTML" className={tagName == "HTML"?"tagchecked":null} >HTML<sup>12</sup></Link>
                            <Link to="/learntags/CSS" className={tagName == "CSS"?"tagchecked":null}>CSS</Link>
                            <Link to="/learntags/JS专题" className={tagName == "JS专题"?"tagchecked":null}>JS专题</Link>
                            <Link to="/learntags/Git" className={tagName == "Git"?"tagchecked":null}>Git</Link>
                            <Link to="/learntags/工具、库与框架" className={tagName == "工具、库与框架"?"tagchecked":null}>工具、库与框架</Link>
                            <Link to="/learntags/Web前端安全" className={tagName == "Web前端安全"?"tagchecked":null}>Web前端安全</Link>
                            <Link to="/learntags/Web前端测试" className={tagName == "Web前端测试"?"tagchecked":null}>Web前端测试</Link>
                            <Link to="/learntags/前端面试" className={tagName == "前端面试"?"tagchecked":null}>前端面试</Link>
                            <Link to="/learntags/后端" className={tagName == "后端"?"tagchecked":null}>后端</Link>
                            <Link to="/learntags/资源环境" className={tagName == "资源环境"?"tagchecked":null}>资源环境</Link>
                            <Link to="/learntags/计算机科学" className={tagName == "计算机科学"?"tagchecked":null}>计算机科学</Link>
                        </Col>
                        <Col span={14} className="tag">{tagName}</Col>
                        <Col span={14} className="articles" >
                            <LearnBody tagName={tagName} />
                        </Col>
                    </Row>
                </Col>
                <Footer />
            </div>
        );
    }
}