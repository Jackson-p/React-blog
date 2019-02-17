import React from 'react';
import Header from './header';
import Footer from './footer';
import LearnItem from './learnitem';
import { Col, Row, Spin, Pagination} from 'antd';
import { getIssues, calcPagetotal } from '@/utils/utils';
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
    constructor(props){
        super(props);
        this.state = {
            chosentag : props.location.state?props.location.state.chosentag
            :
            'ALL',
            loading : false,
            learnlist : '加载中...',
            currentpage : 1,
            totalpages : -1//代表分页器还未渲染
        }
        this._isMounted = true;
        this.pagesize = 6;
    }
    showIssues(label='',currentpage = 1, pagesize=this.pagesize, keyword=""){
        label = label == 'ALL'?'':label;
        this.setState({loading:true});
        getIssues({
            label:label,
            currentpage:currentpage,
            pagesize:pagesize,
            keyword:keyword
        }).then((response) => {
            let data = response.data.items;
            let totalpages = calcPagetotal(response.data.total_count, pagesize);
            if(!data || data.length ==0){
                data = <h1>暂无数据哦</h1>
            }
            if(this._isMounted){
                this.setState({totalpages:totalpages, learnlist:data, loading:false});
            }
        }).catch(e => console.log(e));
    }
    setTag(val){
        this.setState({chosentag:val, learnlist:'加载中...', currentpage : 1, totalpages : -1 }
         ,this.showIssues(val));
    }
    handlePages(page){
        this.setState({learnlist:'加载中...', currentpage : page}
         ,this.showIssues(this.state.chosentag ,page));
    }
    componentDidMount(){
        this.showIssues(this.state.chosentag);
    };
    componentWillUnmount(){
        this._isMounted = false;
    }
    render(){
        const tagNames = ['HTML', 'CSS', 'JS专题', 'Git', '工具、库与框架', 'Web前端安全', 'Web前端测试', '前端面试', '后端', '资源环境', '计算机科学'];
        //请求太耗时了，能省就省吧。
        const reg = /[\#\`{3}\*]i/g;
        let chosentag = this.state.chosentag;
        let tagall = <a id="all" className={chosentag == 'ALL' ? "alltagchecked" :  null} onClick={this.setTag.bind(this, 'ALL')} >show all</a>;
        let taglist = tagNames.map((val, index) => {
            return <a key={index} className={chosentag == val ?"tagchecked":null} onClick={this.setTag.bind(this, val)}>{ val }</a>;
        });
        let contentBefore,content;
        let learnlist = this.state.learnlist;
        let Learnlist = Array.isArray(learnlist) ?
        learnlist.map((article,index) => {
                contentBefore = article.body.replace(reg,"");
                content = contentBefore.substring(0,200)+"...";
                return <LearnItem key={index} title={article.title} subtitle={content} num={article.number} type={article.labels[0].name} />
        }) 
        :
        learnlist;
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
                            <div className="learn-list">{ Learnlist }</div>
                            <div className="learn-footer">
                                {this.state.totalpages >= 0 && <Pagination defaultCurrent={1} onChange={this.handlePages.bind(this)} total={this.state.totalpages*10} />}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Footer />
            </Spin>
        );
    }
}