import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCMiddle from './pc_middle';
import PCArti from './pc_arti';
import 'antd/dist/antd.css';
import '../../css/PCIndex.css';

export default class PCIndex extends React.Component{

    render(){

        const tagName = this.props.match?this.props.match.params.tagName:"";
        return (
            <div>
                <PCHeader />
                <PCMiddle />
                <div className='midarti'>
                    <PCArti tagName={tagName}/>
                </div>
            </div>
        );
    };
}