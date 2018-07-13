import React from 'react';
import '../../css/footer.css';
import {Col} from 'antd';

export default class Footer extends React.Component{
    render(){
        return(
            <Col className="pc-footer" span={24}>
                <div className="foot-container">
                    <h1>Web Developer</h1>
                    <p>Copyright©2018Jackson. All Rights Reserved.</p>
                </div>
            </Col>
        );
    };
}