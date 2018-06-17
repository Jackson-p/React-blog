import React from 'react';
import 'antd/dist/antd.css';
import '../../css/PCHeader.css';

export default class PCHeader extends React.Component{
    render(){
        return (
            <div className = 'header'>
                <div className = 'banner'>
                    <div className = 'banner-header'>
                        <img src = './src/img/head.jpeg' />
                        <h1>&nbsp;Jackson</h1>
                    </div>
                    <ul className = 'banner-tag'>
                        <li><a>Home</a></li>
                        <li><a>Learn</a></li>
                        <li><a>Demo</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}