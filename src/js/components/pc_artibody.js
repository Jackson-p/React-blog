import React from 'react';
import { Row ,Col} from 'antd';
import 'antd/dist/antd.css';
import '../../css/PCArtibody.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import PCArtiTem from './pc_artiTem';
export default class PCArtiBody extends React.Component{

    //这一部分用来展示所有当前博文的相关信息，包括博文时间，博文标签，部分正文,
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
            console.log(data);
            this.setState({artilist:data})
        }).catch(e => console.log(e));  
    };
    render(){

            const artilist = this.state.artilist;//这种问题以前遇到过的，必须用解构赋值
            const Artilist = artilist.length ?
            artilist.map((article,index) => {
                    const timel = this.transTime(article.created_at);
                    return <PCArtiTem key={index} title={article.title} content={article.body} time={timel} />
            }) 
            :
            "加载中";
            console.log(Artilist);
        return(
                <div className="arti-container">{Artilist}</div>
        );
    }
}