import React from 'react';
import 'antd/dist/antd.css';
import '../../css/PCContent.css';
import PCHeader from './pc_header';
import PCBack from './pc_back';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import PCFooter from './pc_footer';

export default class PCContent extends React.Component{
    //这一部分我们称之为正文。。嗯
    constructor(){
        super();
        this.state ={
            content:"",
            comments:""
        };
    };
    transTime(timel){
        if(timel == undefined)
            return;
        var reg = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/i;
        //return timel.substring(0,10);
        return reg.exec(timel)[0];
    };
    componentDidMount(){
        const url = `https://api.github.com/repos/201585052/201585052.github.io/issues/
        ${this.props.match.params.num}`;
        axios.get(url).then((response) => {
            const data = response.data;
            this.setState({content:data});
            //console.log(data);
        }).catch(e => console.log(e));
        const url2 = `https://api.github.com/repos/201585052/201585052.github.io/issues/
        ${this.props.match.params.num}/comments`;
        axios.get(url2).then((response) => {
            const data2 = response.data;
            this.setState({comments:data2});
            console.log(data2);
        }).catch(e => console.log(e));
        this.node.scrollIntoView();
    }
    render(){
        const content = this.state.content;
        const time = this.transTime(content.created_at);
        const labelName = content.labels ? content.labels[0].name:"";
        const title = content.title;
        const bodyInput = content.body;
        let bodyOutput;
        const comments = this.state.comments;
        const Comments = comments.length?
        comments.map((comment,index) => {
            return <li key={index}>{comment.user.login}:{comment.body}</li>;
        })
        :
        <div className="cometoreview">暂无评论，欢迎评论</div>;
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
        });
        if(bodyInput){
            bodyOutput = marked(bodyInput);
        }else{
            bodyOutput = "";
        }
        
        return(
            <div>
                <PCHeader selectedhead={1} />
                <div className="block" ref={(node) => this.node=node}></div>
                <div className="content-container">
                    <div className="content-header">
                        <span>{time} | <Link to={`/tags/${labelName}`}>{labelName}</Link></span>
                        <h1>{title}</h1>
                    </div>
                    <div className="content-body" dangerouslySetInnerHTML={{ __html: bodyOutput }}>

                    </div>
                    <div className="content-review">
                        <div className="review-title">
                            <h3>评 论</h3>
                        </div>
                        <div className="review-hr"></div>
                        <div className="review-subtitle-deco"></div>
                        <div className="review-subtitle">最新</div>
                        {Comments}
                        <div className="content-block"></div>
                    </div>
                </div>
                <PCBack />
                <PCFooter />
            </div>
        );
    }
}