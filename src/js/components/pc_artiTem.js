import React from 'react';
import { Row ,Col} from 'antd';
import '../../css/PCArtiTem.css';
import PropTypes from 'prop-types';

export default class PCArtiTem extends React.Component {

    constructor(){
        super();
    }
    render(){
        return (
            <div className="pc-artiTem" >
                <div className="pc-artiTem-head">
                    <h3>{this.props.title}</h3>
                    <span>{this.props.time} | 前端开发</span>
                </div>
                <div className="pc-artiTem-body">
                    <p>{this.props.content}</p>
                </div>
                <hr className="pc-artiTem-hr"/>
            </div>
        );
    };
}

