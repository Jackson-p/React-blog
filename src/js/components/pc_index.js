import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCMiddle from './pc_middle';
import 'antd/dist/antd.css';

export default class PCIndex extends React.Component{
    render(){
        return (
            <div>
                <PCHeader />
                <PCMiddle />
            </div>
        );
    };
}