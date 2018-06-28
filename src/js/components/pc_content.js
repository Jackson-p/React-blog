import React from 'react';
import 'antd/dist/antd.css';
import '../../css/PCContent.css';
import PCHeader from './pc_header';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import {HashRouter as Router,Route,Link} from 'react-router-dom'

export default class PCContent extends React.Component{
    //这一部分我们称之为正文。。嗯
    constructor(){
        super();
        this.state ={
            content:""
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
    }
    render(){
        const content = this.state.content;
        const time = this.transTime(content.created_at);
        const labelName = content.labels ? content.labels[0].name:"";
        const title = content.title;
        const bodyInput = content.body;
        let bodyOutput;
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
                <PCHeader />
                <div className="content-container">
                    <div className="content-header">
                        <span>{time} | <Link to={`/tags/${labelName}`}>{labelName}</Link></span>
                        <h1>{title}</h1>
                    </div>
                    <div className="content-body" dangerouslySetInnerHTML={{ __html: bodyOutput }}>
                    </div>
                </div>
            </div>
        );
    }
}