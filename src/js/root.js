import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import Diary from './components/diary';
import Content from './components/content';
import Learn from './components/learn';
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
                            <Route path="/diaries/:num" component={Diary} />
                            <Route path="/learn" component={Learn} />
                            <Route path="/learntags/:tagName" component={Learn} />
                            <Route path="/contents/:num" component={Content} />
                            <Route path="/demos" component={Demo} />
                            <Route path="/about" component={About} />
                        </div>
                </Router>
        );
    }  
}

ReactDOM.render(<Root />, document.getElementById('root'));
