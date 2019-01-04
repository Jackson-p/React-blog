import React from 'react';
import axios from 'axios';
import LearnItem from './learnitem';
import { Pagination } from 'antd';
import '../../css/learnbody.css';

export default class LearnBody extends React.Component{
    constructor(){
        super();
        this.state = {
            Learnlist:'',
            Currentpage:1
        }
    }
    handlePageChange(page){
        this.setState({Currentpage:page});
    }
    componentDidMount(){
        const url = `https://api.github.com/repos/Jackson-p/Jackson-p.github.io/issues`;
        if(this.state.Learnlist.length == 0){
            axios.get(url).then((response) => {
                const data = response.data;
                this.setState({Learnlist:data})
            }).catch(e =>{
                console.log(e);
            })
        }else{
            console.log('liaoliao');//这里的这个写法，暂时是没有啥意义的，因为每次都会重新渲染组件，这里留着代码是想想可不可以直接保留状态，不请求新数据
        }
    }
    render(){
        let tagName = this.props.tagName;
        let currentpage = this.state.Currentpage;
        let learnlist = this.state.Learnlist;
        let contentBefore,subtitle,label,articlecnt;
        articlecnt = 0;
        const pagearticlenum = 6;
        const reg = /[\#\`{3}\*]/g;
        let Learnlist = learnlist?
        learnlist.map((article, index) => {
            contentBefore = article.body.replace(reg,"");
            subtitle = contentBefore.substring(0,200)+"...";
            label = article.labels[0].name;
            if(tagName == "ALL" || label == tagName){
                if(articlecnt >= (currentpage - 1) * pagearticlenum && articlecnt <= currentpage * pagearticlenum - 1){
                    articlecnt++;
                    return <LearnItem key={index} title = {article.title} subtitle = {subtitle} num = {article.number} />;
                }
                articlecnt++;
            }
        })
        :
        "加载中...";
        let pagetotal = 0;
        if(articlecnt > 0){
            pagetotal = articlecnt % pagearticlenum ? articlecnt/pagearticlenum : Math.ceil(articlecnt/pagearticlenum);
            pagetotal *= 10;
            // console.log(pagetotal);
        }

        return (
            <div>
                <div className="learn-list">{ Learnlist }</div>
                <div className="learn-footer">
                    {
                        articlecnt > 0 && currentpage > 0 && pagetotal > 0 &&
                        <Pagination defaultCurrent={1} onChange={this.handlePageChange.bind(this)} total={pagetotal} />
                        //老实讲这里这个pagetotal不知道他是bug了还是咋的。。。。
                    }
                </div>
            </div>
        );
    }
}