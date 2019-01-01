import React from 'react';
import {Link} from 'react-router-dom';
import Header from './header';
import LearnBody from './learnbody';
import { Col, Row } from 'antd';
import '../../css/learn.css';

export default class Learn extends React.Component{
    constructor(){
        super();
        this.state = {
            choseTag: 0
            //0:all,1:HTML,2:CSS,3:JS,4:Git,5:Tools,6:safety,7:test,8:view,9:backend,10:sourceenv
        };
    }
    handleChoose(n){
        this.setState({choseTag:n});
        return this;
    }
    render(){
        let tagName = (typeof(this.props.match.params.tagName) == "undefined")?"ALL":this.props.match.params.tagName;
        //const alltags = ['show all', 'HTML', 'CSS', 'JS专题', 'Git', '工具、库与框架', 'Web前端安全', 'Web前端测试', '前端面试', '后端', '资源环境'];
        const choseTag = this.state.choseTag;
        //console.log(choseTag);
        return(
            <div>
                <Header />
                <div className="block"></div>
                <Col span={24} className="container">
                    <Row type="flex" justify="center">
                        <Col span={ 14 } className="tagcloud">
                            <Link to="/learntags/ALL" id="all" className={choseTag == 0?"alltagchecked":null} onClick={this.handleChoose.bind(this, 0)}>show all</Link>
                            <Link to="/learntags/HTML" className={choseTag == 1?"tagchecked":null} onClick={this.handleChoose.bind(this, 1)}>HTML<sup>12</sup></Link>
                            <Link to="/learntags/CSS" className={choseTag == 2?"tagchecked":null} onClick={this.handleChoose.bind(this, 2)}>CSS</Link>
                            <Link to="/learntags/JS专题" className={choseTag == 3?"tagchecked":null} onClick={this.handleChoose.bind(this, 3)}>JS专题</Link>
                            <Link to="/learntags/Git" className={choseTag == 4?"tagchecked":null} onClick={this.handleChoose.bind(this, 4)}>Git</Link>
                            <Link to="/learntags/工具、库与框架" className={choseTag == 5?"tagchecked":null} onClick={this.handleChoose.bind(this, 5)}>工具、库与框架</Link>
                            <Link to="/learntags/Web前端安全" className={choseTag == 6?"tagchecked":null} onClick={this.handleChoose.bind(this, 6)}>Web前端安全</Link>
                            <Link to="/learntags/Web前端测试" className={choseTag == 7?"tagchecked":null} onClick={this.handleChoose.bind(this, 7)}>Web前端测试</Link>
                            <Link to="/learntags/前端面试" className={choseTag == 8?"tagchecked":null} onClick={this.handleChoose.bind(this, 8)}>前端面试</Link>
                            <Link to="/learntags/后端" className={choseTag == 9?"tagchecked":null} onClick={this.handleChoose.bind(this, 9)}>后端</Link>
                            <Link to="/learntags/资源环境" className={choseTag == 10?"tagchecked":null} onClick={this.handleChoose.bind(this, 10)} >资源环境</Link>
                        </Col>
                        <Col span={14} className="tag">{tagName}</Col>
                        <Col span={14} className="articles" >
                            <LearnBody tagName={tagName} />
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}