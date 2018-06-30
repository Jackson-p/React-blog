import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCMiddle from './pc_middle';
import PCArti from './pc_arti';
import PCFooter from './pc_footer';
import 'antd/dist/antd.css';
import { BackTop } from 'antd';

export default class PCIndex extends React.Component{

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