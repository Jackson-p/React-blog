import React from 'react';
import { Row ,Col} from 'antd';
import ArtiBody from './artibody';
import 'antd/dist/antd.css';
import '../../css/arti.css';

export default class Arti extends React.Component{
    constructor(){
        super();
        this.state = {
            currentpage:1
        }
        //this.handlePageChange.bind(this);
    }
    handlePageChange(page){
        this.setState({currentpage:page});
    }

    //这一页是首页博文展示部分整体的组件,根据tagName选择文章，默认是路由首页的所有文章
    //把分页器的组件也放在这里了，毕竟footer算是index吧
    render(){

        const ArtiHead = () => {
            let ArtiHeadname;
            if(this.props.tagName){
                ArtiHeadname = <h2>{this.props.tagName}</h2>
            }else{
                ArtiHeadname = <h2>Life</h2>;
            }
            return(
                <div className='arti-head'>
                    {ArtiHeadname}
                </div>
            )
        };
        let tagName = this.props.tagName;
        let currentpage = this.state.currentpage;
        return(
            <Col className='midarti' span={24}>
                <Row type="flex" justify="center">
                    <Col span={18}>
                        <ArtiHead />
                    </Col>
                    <Col span={18}>
                        <ArtiBody tagName={tagName} currentpage={currentpage} handlePageChange={this.handlePageChange.bind(this)}/>
                    </Col>
                </Row>
            </Col>
        );
    }
}