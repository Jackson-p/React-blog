import React from 'react';
import Header from './header';
import Footer from './footer';
import LearnBody from './learnbody';
import { Col, Row, Spin} from 'antd';
import '../../css/learn.css';


// interceptors.request.use((req) => {
//     this.setState({loading:true})
//     return req;
// }, (err) => console.log(err));

// interceptors.response.use((res) => {
//     this.setState({loading:false})
//     return res;
// }, (err) => console.log(err));

export default class Learn extends React.Component{
    constructor(){
        super();
        this.state = {
            chosentag:'ALL',
            loading:false
        }
        
    }
    setTag(val){
        this.setState({chosentag:val});
    }
    handleLoading(loadingbool){
        console.log(loadingbool);
        //this.setState({loading:loadingbool});
    }
    render(){
        const tagNames = ['HTML', 'CSS', 'JS专题', 'Git', '工具、库与框架', 'Web前端安全', 'Web前端测试', '前端面试', '后端', '资源环境', '计算机科学'];
        //请求太耗时了，能省就省吧。
        const chosentag = this.state.chosentag;
        const tagall = <a id="all" className={chosentag == 'ALL' ? "alltagchecked" :  null} onClick={this.setTag.bind(this, 'ALL')} >show all</a>;
        const taglist = tagNames.map((val, index) => {
            return <a key={index} className={chosentag == val ?"tagchecked":null} onClick={this.setTag.bind(this, val)}>{ val }</a>;
        });
        return(
            <Spin spinning={this.state.loading} size="large">
                <Header selectedhead={2}/>
                <div className="block"></div>
                <Col span={24} className="container">
                    <Row type="flex" justify="center" className="learns" >
                        <Col md={14} span={24} className="tagcloud">
                            { tagall }
                            { taglist }
                        </Col>
                        <Col md={14} span={24} className="tag">{ chosentag }</Col>
                        <Col md={{span:14, offset:1}} span={24}>
                            <LearnBody tagName={ chosentag } handleLoading={ this.handleLoading.bind(this) } />
                        </Col>
                    </Row>
                </Col>
                <Footer />
            </Spin>
        );
    }
}