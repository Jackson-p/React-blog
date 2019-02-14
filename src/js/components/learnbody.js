import React from 'react';
import LearnItem from './learnitem';
import { Pagination, Spin } from 'antd';
import { getIssues, calcPagetotal, interceptors} from '@/utils/utils';
import '../../css/learnbody.css';

export default class LearnBody extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tagName : props.tagName,
            learnlist : '加载中...',
            currentpage : 1,
            totalpages : -1,//代表分页器还未渲染
            loading:false
        };
        this._isMounted = true;
        this.pagesize = 6;
    }
    componentWillReceiveProps(nextProps){
        //说明标签发生了变化，其他状态都需要初始化
        this.setState({tagName: nextProps.tagName, learnlist : '加载中...', currentpage : 1, totalpages : -1}
          ,this.showIssues(nextProps.tagName));
    }
    showIssues(label='',currentpage = 1, pagesize=this.pagesize, keyword=""){
        label = label == 'ALL'?'':label;
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
                this.setState({totalpages:totalpages, learnlist:data});
            }
        }).catch(e => console.log(e));
    }
    handlePages(page){
        this.setState({learnlist:'加载中...', currentpage : page},this.showIssues(this.state.tagName,page));
    }
    componentDidMount(){
        this.showIssues(this.props.tagName);
    };
    componentWillUnmount(){
        this._isMounted = false;
    }
    render(){
        const reg = /[\#\`{3}\*]i/g;
        let contentBefore,content;
        let learnlist = this.state.learnlist;
        let Learnlist = Array.isArray(learnlist) ?
        learnlist.map((article,index) => {
                contentBefore = article.body.replace(reg,"");
                content = contentBefore.substring(0,200)+"...";
                return <LearnItem key={index} title={article.title} subtitle={content} num={article.number} />      
        }) 
        :
        learnlist;

        interceptors.request.use((req) => {
            if(this._isMounted){
                this.setState({loading:true});
            }
            return req;
        }, (err) => console.log(err));

        interceptors.response.use((res) => {
            if(this._isMounted){
                this.setState({loading:false});
            }
            return res;
        }, (err) => console.log(err));

        return (
            <Spin size="large" spinning={this.state.loading}>
                <div className="learn-list">{ Learnlist }</div>
                <div className="learn-footer">
                    {this.state.totalpages >= 0 && <Pagination defaultCurrent={1} onChange={this.handlePages.bind(this)} total={this.state.totalpages*10} />}
                </div>
            </Spin>
        );
    }
}