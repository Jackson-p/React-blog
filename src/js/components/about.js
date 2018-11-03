import React from 'react';
import '../../css/about.css';
import Header from './header';
import Footer from './footer';
import { Steps, Button, message } from 'antd';
const Step = Steps.Step;


const steps = [{
  title: '关于本站',
  content: 
  <div className="intro-content" >
    <h4>HOME发送一些感想或技术随笔</h4>
    <h4>Learn将重要的基础知识体系化</h4>
    <h4>Demo一些尝试希望他们会有用或有趣</h4>
    <h4>建站希望自己能保持乐趣、提高自己才能造福别人orz</h4>
    <h4>有个地方记录自己的价值观也不错嘿嘿</h4>
  </div>
}, {
  title: '关于本人',
  content: 
  <div className="intro-content" >
      <h4>不会给自己设限，说干什么就干什么。</h4>
      <h4>在代码和音符中可能会难以自拔</h4>
      <h4>健身和养生我觉得是工作必不可少的部分</h4>
      <h4>生活很美好，用心生活、快乐社交</h4>
      <h4>我怕打针h...hh</h4>
  </div>
}, {
  title: '关于理想',
  content: 
  <div className="intro-content" >
      <h4>希望用平时技术积累的60%来解决工作的问题</h4>
      <h4>希望能做到前端 -> 后台 -> 多端 -> 全栈</h4>
      <h4>希望可以活得很精彩，不和产品打架</h4>
      <h4>希望希望实现，世界和平</h4>
  </div>
}];
export default class About extends React.Component{
    constructor(){
        super();
        this.state = {
            current:0
        }
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
    render(){
        const { current } = this.state;
        return (
            <div className="pc-about">
                <Header selectedhead={4} />
                <div className="block"></div>
                <div className="about-container">
                    <div className="about-content">
                        <Steps current={current} className="about-content-steps">
                            {steps.map(item => <Step key={item.title} title={item.title} className="about-content-step" />)}
                        </Steps>
                        <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                            {
                                current < steps.length - 1
                                && <Button type="primary" onClick={() => this.next()} className="about-next">Next</Button>
                            }
                            {
                                current === steps.length - 1
                                && <Button disabled type="primary" onClick={() => message.success('Processing complete!')} className="about-next">Done</Button>
                            }
                            {
                                current > 0
                                && (
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()} className="about-prev">
                                Previous
                                </Button>
                                )
                            }
                            {
                                current == 0
                                && (
                                <Button disabled style={{ marginLeft: 8 }} onClick={() => this.prev()} className="about-prev">
                                Previous
                                </Button>
                                )
                            }
                                <div className="clear-both"></div>
                            </div>
                        </div>
                </div>
                <Footer />
            </div>
        );
    };
}