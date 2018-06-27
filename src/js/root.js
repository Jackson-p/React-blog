import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './components/pc_index';
import PCContent from './components/pc_content';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import 'antd/dist/antd.css';

export default class Root extends React.Component{
    render(){
        return (
                <Router>
                        <div>
                            <Route exact path="/" component={PCIndex} ></Route>
                            <Route path="/contents/:num" component={PCContent} ></Route>
                        </div>
                </Router>
        );
    }  
}

ReactDOM.render(<Root />, document.getElementById('root'));
