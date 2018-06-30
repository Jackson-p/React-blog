import React from 'react';
import 'antd/dist/antd.css';
import '../../css/PCHeader.css';
import {Link} from 'react-router-dom';

export default class PCHeader extends React.Component{
    componentDidMount(){
        this.node.scrollIntoView();
    }
    render(){
        return (
            <div className = 'header' ref={node => this.node = node} >
                <div className = 'banner'>
                    <div className = 'banner-header'>
                        <img src = './src/img/head.jpeg'  />
                        <h1>&nbsp;Jackson</h1>
                    </div>
                    <ul className = 'banner-tag'>
                        <Link to="/" ><li>Home</li></Link>
                        <a href="https://wjp.gitbook.io/mybook/" target="_blank" ><li>Learn</li></a>
                        <Link to="/demos" ><li>Demo</li></Link>
                        <Link to="/about" ><li>About</li></Link>
                    </ul>
                    {/* <embed  id='peoclock' width="200" height="55"  src="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_tr.swf" quality="high" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowscriptaccess="always" /> */}
                </div>
            </div>
        );
    }
}