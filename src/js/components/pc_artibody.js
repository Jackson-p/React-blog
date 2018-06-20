import React from 'react';
import { Row ,Col} from 'antd';
import 'antd/dist/antd.css';
import '../../css/PCArtibody.css';
import PropTypes from 'prop-types';
import axios from 'axios';
export default class PCArtiBody extends React.Component{

    constructor() {
        super();
        this.state = {
            artiContent : null,
        };
    }
    componentDidMount(){
        const url  = `https://api.github.com/repos/201585052/201585052.github.io/issues/1`;
        axios.get(url).then((response) => {
            console.log(response);
            const data = response.data;
            const articontent = data.body;
            this.setState({ artiContent: articontent });
            console.log(data.body);
        }).catch(e => console.log(e));
    }
    render(){
        return(
                <div className="arti-container">
                    <Row>
                        <Col xs={24} sm={24} md={18}>{this.state.artiContent}</Col>
                        <Col xs={0} sm={0} md={6}>233333</Col>
                    </Row>
                </div>
        );
    }
}