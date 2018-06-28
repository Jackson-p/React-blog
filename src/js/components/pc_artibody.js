import React from 'react';
import { Row ,Col} from 'antd';
import 'antd/dist/antd.css';
import '../../css/PCArtibody.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import PCArtiTem from './pc_artiTem';
export default class PCArtiBody extends React.Component{

    //这一部分用来展示所有当前博文的相关信息，包括博文时间，博文标签，部分正文,需要能根据相关的标签提取到制定类的文章
    //具体细化由每个PCArtiTem
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
        const url  = `https://api.github.com/repos/201585052/201585052.github.io/issues`;
        axios.get(url).then((response) => {
            const data = response.data;
            this.setState({artilist:data})
            console.log(data);
        }).catch(e => console.log(e));  
    };
    render(){
            let tagName = this.props.tagName;
            const artilist = this.state.artilist;
            const Artilist = artilist.length ?
            artilist.map((article,index) => {
                    const timel = this.transTime(article.created_at);
                    const content = article.body.substring(0,200)+"...";
                    const label = article.labels[0].name;
                    if(tagName == "" || tagName == label || tagName == undefined){
                        return <PCArtiTem key={index} title={article.title} content={content} time={timel} num={article.number} label={label} />
                    }else{
                        return;
                    }               
            }) 
            :
            "加载中";
        return(
                <div className="arti-container">{Artilist}</div>
        );
    }
}