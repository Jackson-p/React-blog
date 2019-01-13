import React from 'react';
import '../../css/artibody.css';
import axios from 'axios';
import ArtiTem from './artitem';
import { Pagination } from 'antd';
export default class ArtiBody extends React.Component{

    //这一部分用来展示所有当前博文的相关信息，包括博文时间，博文标签，部分正文,需要能根据相关的标签提取到制定类的文章
    //具体细化由每个ArtiTem
    constructor() {
        super();
        this.state = {
            artilist : ''
        };
    }
    transTime(timel){
        var reg = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/i;
        //return timel.substring(0,10);
        return reg.exec(timel)[0];
    };
    componentDidMount(){
        this._isMounted = true;
        const url  = `https://api.github.com/repos/Jackson-p/Jackson-p.github.io/issues`;
        axios.get(url).then((response) => {
            const data = response.data;
            if(this._isMounted){
                this.setState({artilist:data})
            }
        }).catch(e => console.log(e));  
    };
    componentWillUnmount(){
        this._isMounted = false;
    }
    render(){
        let currentpage = this.props.currentpage;
        let artilist = this.state.artilist;
        let articlecnt = 0;
        let timel,contentBefore,content;
        const reg = /[\#\`{3}\*]/g;
        const pagearticlenum = 6;
        const label = "Life";
        let Artilist = artilist.length ?
        artilist.map((article,index) => {
                timel = this.transTime(article.created_at);
                contentBefore = article.body.replace(reg,"");
                content = contentBefore.substring(0,200)+"...";
                if(article.labels[0].name == label){
                    if(articlecnt >= (currentpage - 1) * pagearticlenum && articlecnt <= currentpage * pagearticlenum - 1){
                        articlecnt++;
                        return <ArtiTem key={index} title={article.title} content={content} time={timel} num={article.number} label={label} />
                    }
                    articlecnt++;
                }            
        }) 
        :
        "加载中";
        let pagetotal = 0;
        if(articlecnt > 0){
            pagetotal = articlecnt % pagearticlenum ? articlecnt/pagearticlenum : Math.ceil(articlecnt/pagearticlenum);
            pagetotal *= 10;
            // console.log(pagetotal);
        }
        return(
                <div className="arti-container">
                    <div className="arti-body">{Artilist}</div>
                    <div className="arti-footer">
                        {pagetotal > 0 && <Pagination current={currentpage} onChange={this.props.handlePageChange} total={pagetotal} />}
                    </div>
                </div>
        );
    }
}