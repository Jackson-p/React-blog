import React from 'react';
import { Row ,Col} from 'antd';
import PCArtiBody from './pc_artibody';
import 'antd/dist/antd.css';
import '../../css/PCArti.css';
import PropTypes from 'prop-types';
import axios from 'axios';

const ArtiHead = () => (
        <div className='arti-head'>
            <h2>Life</h2>
        </div>
);
export default class PCArti extends React.Component{

    //这一页是首页博文展示部分整体的组件
    render(){
        return(
            <div>
                <ArtiHead />
                <PCArtiBody />
                
            </div>
        );
    }
}