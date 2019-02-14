import React from 'react';
import { Row ,Col} from 'antd';
import ArtiBody from './artibody';
import '../../css/arti.css';

export default class Arti extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Col className="midarti" span={24}>
                <Row type="flex" justify="center">
                    <Col span={18}>
                        <div className="arti-head"><h2>Life</h2></div>
                    </Col>
                    <Col span={18}>
                        <ArtiBody label="Life"/>
                    </Col>
                </Row>
            </Col>
        );
    }
}