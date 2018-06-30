import React from 'react';
import 'antd/dist/antd.css';
import '../../img/bcg.jpg';
import '../../css/PCMiddle.css';
export default class PCMiddle extends React.Component{

    constructor(){
        super();
        this.state = {
            hidOpa:1,
            hidtrans:0
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.scrollMidHide.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener('scroll');
    }
    scrollMidHide(){
        // console.log(document.documentElement.scrollTop);
        let trans = (document.documentElement.scrollTop - 200)/4;
        let opatemp = this.state.hidOpa;
        if(opatemp-0.01*trans<=0){
            opatemp = 0;
        }else if(opatemp-0.01*trans>=1){
            opatemp = 1;
        }else{
            opatemp -= 0.01*trans;
        }
        let transtemp = this.state.hidtrans;
        if(transtemp+5*trans<=0){
            transtemp = 0;
        }else if(transtemp+5*trans>=400){
            transtemp = 400;
        }else{
            transtemp += 5*trans;
        }
        this.setState({hidOpa : opatemp});
        this.setState({hidtrans : transtemp})
    }
    render(){
        let HidMid = {
            opacity:`${this.state.hidOpa}`,
            transform:`translateY(${this.state.hidtrans}px)`,
            transition:'all 1s'
        }
        return(
            <section id="hero" className="scrollme">
                <div className="midimg">
                    <div className="midtext" style={HidMid} >
                        <h1>We must be willing to get rid of the life we've planned,
                            so as to have the life that is waiting for us.
                        </h1>
                        <img src='./src/img/gitt.png' />
                        <img src='./src/img/zhi.png' id = 'zhi' />
                    </div>
                </div>
            </section>
        );
    }
}