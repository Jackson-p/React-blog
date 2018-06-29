import React from 'react';
import PCHeader from './pc_header';
import '../../css/PCDemo.css';
import PCFooter from './pc_footer';

export default class PCDemo extends React.Component{
    render(){
        return (
            <div className="demowhole">
                <PCHeader />
                <div className="demodis">
                    <h1>Demo</h1>
                    <a href="#">
                        <div className="demolist">
                            <div className="demohead">
                                <img src="http://cdn.alloyteam.com/assets/img/alloydesigner-8020c7.png" />
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="demolist">
                        
                        </div>
                    </a>
                    <a href="#">
                        <div className="demolist">
                        
                        </div>
                    </a>
                    <a href="#">
                        <div className="demolist">
                        
                        </div>
                    </a>
                </div>
                <PCFooter />
            </div>
        );
    };
}