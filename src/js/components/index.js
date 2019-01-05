import React from 'react';
import Header from './header';
import Middle from './middle';
import Arti from './arti';
import Footer from './footer';
// import 'antd/dist/antd.css';
import { BackTop } from 'antd';
import '../../css/index.css';

export default class Index extends React.Component{
//考虑到一个window下只有一个onscroll监听事件，只得把header和middle的效果加到这里
    render(){

        return (
            <div>
                <Header selectedhead={1}/>
                <Middle />
                <Arti />
                <Footer />
                <BackTop />
            </div>
        );
    };
}