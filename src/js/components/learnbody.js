import React from 'react';
import LearnItem from './learnitem';
import { Pagination } from 'antd';
import { getIssues, transTime, calcPagetotal} from '@/utils/utils';
import '../../css/learnbody.css';

export default class LearnBody extends React.Component{
    constructor() {
        super();
        this.state = {
            learnlist : '加载中...',
            currentpage : 1,
            totalpages : -1//代表分页器还未渲染
        };
        this._isMounted = true;
        this.pagesize = 6;
    }
    showIssues(label='',currentpage = this.state.currentpage, pagesize=this.pagesize, keyword=""){
        getIssues({
            label:label,
            currentpage:currentpage,
            pagesize:pagesize,
            keyword:keyword
        }).then((response) => {
            let data = response.data.items;
            let totalpages = calcPagetotal(response.data.total_count, pagesize);
            this.setState({totalpages:totalpages})
            if(!data || data.length ==0){
                data = <h1>暂无数据哦</h1>
            }
            if(this._isMounted){//请求的数据因为有延迟要避免内存泄漏
                this.setState({learnlist:data});
            }
        }).catch(e => console.log(e));
    }
    handlePages(page){
        this.setState({currentpage : page},this.showIssues(this.props.tagName,page));
    }
    componentDidMount(){
        this.showIssues(this.props.tagName);
    };
    componentWillUnmount(){
        this._isMounted = false;
    }
    render(){
        const reg = /[\#\`{3}\*]i/g;
        let timel,contentBefore,content;
        let learnlist = this.state.learnlist;
        let Learnlist = Array.isArray(learnlist) ?
        learnlist.map((article,index) => {
                timel = transTime(article.created_at);
                contentBefore = article.body.replace(reg,"");
                content = contentBefore.substring(0,200)+"...";
                return <LearnItem key={index} title={article.title} content={content} time={timel} num={article.number} />      
        }) 
        :
        learnlist

        return (
            <div>
                <div className="learn-list">{ Learnlist }</div>
                <div className="learn-footer">
                    {this.state.totalpages >= 0 && <Pagination defaultCurrent={1} onChange={this.handlePages.bind(this)} total={this.state.totalpages*10} />}
                </div>
            </div>
        );
    }
}