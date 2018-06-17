import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './components/pc_header';
import PCMiddle from './components/pc_middle';
//import 'antd/dist/antd.css';

class Index extends React.Component{
    render(){
        return (
            <div>
                <PCHeader />
                <PCMiddle />
            </div>
        );
    }  
}

ReactDOM.render(<Index />, document.getElementById('root'));
