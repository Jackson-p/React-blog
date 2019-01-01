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
    componentDidMount(){
        const url = `https://api.github.com/repos/Jackson-p/Jackson-p.github.io/issues`;
        axios.get(url).then((response) => {
            const data = response.data;
            this.setState({Learnlist:data})
        }).catch(e =>{
            console.log(e);
        })
    }
    render(){
        const tagName = this.props.tagName;
        const currentpage = this.state.Currentpage;
        const learnlist = this.state.Learnlist;
        const Learnlist = learnlist?
        learnlist.map((article, index) => {
            let reg = /[\#\`{3}\*]/g;;
            let contentBefore = article.body.replace(reg,"");
            let subtitle = contentBefore.substring(0,200)+"...";
            let label = article.labels[0].name;
            if(tagName == "show all" || label == tagName){
                return <LearnItem key={index} title = {article.title} subtitle = {subtitle} />;
            }
        })
        :
        "加载中";
        const pagetotal = learnlist.length;

        return (
            <div>
                { Learnlist }
                <div className="learn-footer">
                    <Pagination current={currentpage} onChange={this.props.handlePageChange} total={pagetotal} />
                </div>
            </div>
        );
    }
}