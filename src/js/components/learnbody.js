import React from 'react';
import LearnItem from './learnitem';
import { Pagination } from 'antd';
import { getIssues, calcPagetotal} from '@/utils/utils';
import '../../css/learnbody.css';

export default class LearnBody extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tagName : props.tagName,
            learnlist : '加载中...',
            currentpage : 1,
            totalpages : -1//代表分页器还未渲染
        };
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
            this.setState({totalpages:totalpages})
            if(!data || data.length ==0){
                data = <h1>暂无数据哦</h1>
            }
            this.setState({learnlist:data});
        }).catch(e => console.log(e));
    }
    handlePages(page){
        this.setState({learnlist:'加载中...'})
        this.setState({currentpage : page},this.showIssues(this.state.tagName,page));
    }
    componentDidMount(){
        this.showIssues(this.props.tagName);
    };
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