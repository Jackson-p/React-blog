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
    <h4>因为版权问题弃用原来的csdn，即各种技术尝试博客：<a href="https://blog.csdn.net/jikexueyuan5555/article/list/" >地址</a></h4>
    <h4>HOME发送一些感想或技术随笔</h4>
    <h4>Learn将重要的基础知识体系化</h4>
    <h4>Demo一些尝试希望他们会有用或有趣</h4>
    <h4>建站希望自己能保持乐趣、提高自己才能造福别人orz</h4>
  </div>
}, {
  title: '关于本人',
  content: 
  <div className="intro-content" >
      <h4>良好的生活习惯、健身、社交与工作事业一样必不可少</h4>
      <h4>音乐、美食就像是人生的选修课，分数高了一样开心</h4>
      <h4>工作还在努力地找</h4>
      <h4>对谈恋爱已经不抱任何希望了，只想发财</h4>
      <h4>邮箱：wangyipingweb@foxmail.com</h4>
  </div>
}, {
  title: '关于理想',
  content: 
  <div className="intro-content" >
      <h4>大前端的时代已经到来</h4>
      <h4>希望可以精通js并做一些有价值的东西</h4>
      <h4>移动端的部分和后台的部分觉得是学好前端后，WebDeveloper应该掌握的</h4>
      <h4>Python爱好者，数据分析和机器学习真的有空就玩玩</h4>
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