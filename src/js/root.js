import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import Content from './components/content';
import Demo from './components/demo';
import About from './components/about';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import 'antd/dist/antd.css';
//require('es6-promise').polyfill();

class Root extends React.Component{
    render(){
        return (
                <Router>
                        <div>
                            <Route exact path="/" component={Index} />
                            <Route path="/contents/:num" component={Content} />
                            <Route path="/tags/:tagName" component={Index} />
                            <Route path="/demos" component={Demo} />
                            <Route path="/about" component={About} />
                        </div>
                </Router>
        );
    }  
}

ReactDOM.render(<Root />, document.getElementById('root'));
