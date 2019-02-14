import React from 'react';
import ArtiTem from './artitem';
import { Pagination } from 'antd';
import { getIssues, transTime, calcPagetotal} from '@/utils/utils';
import '../../css/artibody.css';

export default class ArtiBody extends React.Component{

    //这一部分用来展示所有当前博文的相关信息，包括博文时间，博文标签，部分正文,需要能根据相关的标签提取到制定类的文章
    //具体细化由每个ArtiTem
    constructor() {
        super();
        this.state = {
            artilist : '加载中...',
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
                this.setState({artilist:data});
            }
        }).catch(e => console.log(e));
    }
    handlePages(page){
        this.setState({currentpage : page},this.showIssues(this.props.label,page));
    }
    componentDidMount(){
        this.showIssues(this.props.label);
    };
    componentWillUnmount(){
        this._isMounted = false;
    }
    render(){
        const reg = /[\#\`{3}\*]i/g;
        let timel,contentBefore,content;
        let artilist = this.state.artilist;
        let Artilist = Array.isArray(artilist) ?
        artilist.map((article,index) => {
                timel = transTime(article.created_at);
                contentBefore = article.body.replace(reg,"");
                content = contentBefore.substring(0,200)+"...";
                return <ArtiTem key={index} title={article.title} content={content} time={timel} num={article.number} />      
        }) 
        :
        artilist
        return(
                <div className="arti-container">
                    <div className="arti-body">{Artilist}</div>
                    <div className="arti-footer">
                        {this.state.totalpages >= 0 && <Pagination defaultCurrent={1} onChange={this.handlePages.bind(this)} total={this.state.totalpages*10} />}
                    </div>
                </div>
        );
    }
}