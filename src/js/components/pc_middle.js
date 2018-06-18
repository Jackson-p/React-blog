import React from 'react';
import PCArti from './components/pc_arti.js';
import 'antd/dist/antd.css';
import '../../css/PCMiddle.css';
export default class PCMiddle extends React.Component{
    render(){
        return(
            <section id="hero" className="scrollme">
                <div className="midimg">
                    <div className="midtext">
                        <h1>We must be willing to get rid of the life we've planned,
                            so as to have the life that is waiting for us.
                        </h1>
                        <img src='./src/img/gitt.png' />
                        <img src='./src/img/zhi.png' id = 'zhi' />
                    </div>
                </div>
                <div className='midarti'>
                    <PCArti />
                </div>
            </section>
        );
    }
}