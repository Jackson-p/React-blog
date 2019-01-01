import React from 'react';
import '../../css/learnitem.css';

export default class LearnItem extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="previews">
                <a href="www.baidu.com" className="links">
                    <p className="post-title">{this.props.title}</p>
                    <p className="post-subtitle">{this.props.subtitle}</p>
                </a>
                <hr />
            </div>
        )
    }
}