import React from 'react';
import 'antd/dist/antd.css';
import '../../css/diary.css';
import Header from './header';
import Back from './back';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
// import {HashRouter as Link} from 'react-router-dom'
import Footer from './footer';
import Review from './review';

export default class Content extends React.Component{
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
        const url = `https://api.github.com/repos/Jackson-p/Jackson-p.github.io/issues/
        ${this.props.match.params.num}`;
        axios.get(url).then((response) => {
            const data = response.data;
            this.setState({content:data});
            //console.log(data);
        }).catch(e => console.log(e));
        const url2 = `https://api.github.com/repos/Jackson-p/Jackson-p.github.io/issues/
        ${this.props.match.params.num}/comments`;
        axios.get(url2).then((response) => {
            const data2 = response.data;
            this.setState({comments:data2});
            console.log(data2);
        }).catch(e => console.log(e));
        this.node.scrollIntoView();
    }
    render(){
        const labelName = "Life";
        let content = this.state.content;
        let time = this.transTime(content.created_at);
        let title = content.title;
        let bodyInput = content.body;
        let bodyOutput;
        let comments = this.state.comments;
        let Comments = comments.length?
        comments.map((comment,index) => {
            let temptime = this.transTime(comment.created_at);
            return <Review key={index} name={comment.user.login} commcont={comment.body} time={temptime} />
        })
        :
        <div className="cometoreview">暂无评论，欢迎评论</div>;
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
        });
        if(bodyInput){
            bodyOutput = marked(bodyInput);
        }else{
            bodyOutput = "加载中...";
        }
        
        return(
            <div>
                <Header selectedhead={1} />
                <div className="block" ref={(node) => this.node=node}></div>
                <div className="diary-container">
                    <div className="diary-header">
                        <span>{time} | Life</span>
                        <h1>{title}</h1>
                    </div>
                    <div className="diary-body" dangerouslySetInnerHTML={{ __html: bodyOutput }}>

                    </div>
                    <div className="content-review">
                        <div className="review-title">
                            <h3>评 论</h3>
                        </div>
                        <div className="review-hr"></div>
                        <div className="review-subtitle-deco"></div>
                        <div className="review-subtitle">最新</div>
                        {Comments}
                        <div className="content-block"><a href={`https://github.com/Jackson-p/Jackson-p.github.io/issues/${this.props.match.params.num}`} target="_blank" ><button>去评论</button></a></div>
                    </div>
                </div>
                <Back />
                <Footer />
            </div>
        );
    }
}