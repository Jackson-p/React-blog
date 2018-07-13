import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './components/pc_index';
import PCContent from './components/pc_content';
import PCDemo from './components/pc_demo';
import PCAbout from './components/pc_about';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import 'antd/dist/antd.css';
require('es6-promise').polyfill();

export default class Root extends React.Component{
    render(){
        return (
                <Router>
                        <div>
                            <Route exact path="/" component={PCIndex} />
                            <Route path="/contents/:num" component={PCContent} />
                            <Route path="/tags/:tagName" component={PCIndex} />
                            <Route path="/demos" component={PCDemo} />
                            <Route path="/about" component={PCAbout} />
                        </div>
                </Router>
        );
    }  
}

ReactDOM.render(<Root />, document.getElementById('root'));
