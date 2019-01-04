import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import Diary from './components/diary';
import Content from './components/content';
import Learn from './components/learn';
import Demo from './components/demo';
import About from './components/about';
import {HashRouter as Router,Route} from 'react-router-dom';
//import '@babel/polyfill';
import axios from 'axios';
import 'antd/dist/antd.css';
//require('es6-promise').polyfill();
//https://blog.csdn.net/LiangHui0914/article/details/78908386

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
store.requestCancel = source.cancel();//保存到全局变量，以供路由切换时使用
const http = axios.create({
    cancelToken:source.token
});
http.interceptors.request.use(config => {
    config.cancelToken = store.source.token;
    return config;
}, err =>{
    return Promise.reject(err);
})



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
