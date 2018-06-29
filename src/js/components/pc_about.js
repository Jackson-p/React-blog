import React from 'react';
import '../../css/PCAbout.css';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import { Steps, Button, message } from 'antd';
const Step = Steps.Step;


const steps = [{
  title: '关于本站',
  content: <h1>'因为版权问题弃用原来的csdn，即各种技术尝试博客：https://blog.csdn.net/jikexueyuan5555/article/list/'</h1>
}, {
  title: '关于本人',
  content: 'Second-content',
}, {
  title: '关于理想',
  content: 'Last-content',
}];
export default class PCAbout extends React.Component{
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
                <PCHeader />
                <div className="about-container">
                    <div className="about-content">
                        <Steps current={current}>
                            {steps.map(item => <Step key={item.title} title={item.title} />)}
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
                            </div>
                        </div>
                </div>
                <PCFooter />
            </div>
        );
    };
}