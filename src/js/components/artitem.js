import React from 'react';
import '../../css/artitem.css';
import {HashRouter as Router,Route,Link} from 'react-router-dom'

export default class ArtiTem extends React.Component {

    constructor(){
        super();
    }
    render(){
        return (
            <div className="pc-artiTem" >
                <div className="pc-artiTem-head">
                    <h3>{this.props.title}</h3>
                    <span>{this.props.time} | <Link to={`/tags/${this.props.label}`}>{this.props.label} </Link> </span>
                </div>
                <div className="pc-artiTem-body">
                    <p>{this.props.content}</p>
                    <Link to={`/contents/${this.props.num}`} >...</Link>
                </div>
            </div>
        );
    };
}

