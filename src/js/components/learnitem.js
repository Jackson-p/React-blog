import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/learnitem.css';

export default class LearnItem extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="previews">
                <Link to={`/contents/${this.props.num}`} className="links">
                    <p className="post-title">{this.props.title}</p>
                    <p className="post-subtitle">{this.props.subtitle}</p>
                </Link>
                <hr />
            </div>
        )
    }
}