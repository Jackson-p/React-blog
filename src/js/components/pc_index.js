import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCMiddle from './pc_middle';
import PCArti from './pc_arti';
import PCFooter from './pc_footer';
import 'antd/dist/antd.css';
import { BackTop } from 'antd';

export default class PCIndex extends React.Component{
//考虑到一个window下只有一个onscroll监听事件，只得把pc_header和pc_middle的效果加到这里
    render(){

        const tagName = this.props.match?this.props.match.params.tagName:"";
        return (
            <div>
                <PCHeader selectedhead={1}/>
                <PCMiddle />
                <PCArti tagName={tagName}/>
                <PCFooter />
                <BackTop />
            </div>
        );
    };
}