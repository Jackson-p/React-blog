import React from 'react';
import '../../css/review.css'

export default class Review extends React.Component{
    constructor(){
        super();
    }
    transTime(timel){
        if(timel == undefined)
            return;
        var reg = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/i;
        //return timel.substring(0,10);
        return reg.exec(timel)[0];
    };
    render(){
        let commenttime = this.transTime(this.props.time);
        return (
            <div className="review-item">
                <h3>{this.props.name}:</h3>
                <p>{this.props.commcont}</p>
                <i>{commenttime}</i>
            </div>
        );
    };
}