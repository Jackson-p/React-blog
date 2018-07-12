import React from 'react';
import '../../css/PCReview.css'

export default class PCReview extends React.Component{
    render(){
        return (
            <div className="review-item">
                <h3>{this.props.name}:</h3>
                <p>{this.props.commcont}</p>
                <i>{this.props.time}</i>
            </div>
        );
    };
}