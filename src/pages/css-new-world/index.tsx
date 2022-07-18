import React from 'react';

import { usePageTitle } from '@/hooks';

import './index.less';

interface IProps {
  name?: string
}

interface IMsg {
  avatorUrl: string
  avatorAlt?: string
  name: string
  txt?: string
  dataSelf?: boolean
}

interface IMsgItem {
  msg: IMsg
}

const msgList: IMsg[] = [
  {
    avatorUrl: 'https://demo.cssworld.cn/new/images/bg-1.jpg',
    avatorAlt: '桐须真冬',
    name: '桐须真冬',
    txt: '关于CSS逻辑属性的学习，大家有什么不懂的直接在群里问唯我同学吧。'
  },
  {
    avatorUrl: 'https://demo.cssworld.cn/new/images/bg-2.jpg',
    avatorAlt: '古桥文乃',
    name: '古桥文乃',
    txt: '好的'
  },
  {
    avatorUrl: 'https://demo.cssworld.cn/new/images/bg-3.jpg',
    avatorAlt: '绪方理珠',
    name: '绪方理珠',
    txt: '关于CSS逻辑属性的学习，大家有什么不懂的直接在群里问唯我同学吧。'
  },
  {
    avatorUrl: 'https://demo.cssworld.cn/new/images/bg-4.jpg',
    avatorAlt: '武元润香',
    name: '武元润香',
    txt: 'o'
  },
  {
    avatorUrl: 'https://demo.cssworld.cn/new/images/bg-5.jpg',
    avatorAlt: '唯我成幸',
    name: '唯我成幸',
    txt: '大家有什么想要了解的吗？',
    dataSelf: true
  },
];

const MsgItem = (props: IMsgItem) => {
  const { msg } = props;
  return <section className="msg-item" data-self={msg.dataSelf}>
    <img className="msg-avator" alt={msg.avatorAlt} src={msg.avatorUrl} />
    <div className="msg-info">
      <span className="msg-user">{msg.name}</span>
      <div className="msg-txt">
        <p>{msg.txt}</p>
      </div>
    </div>
  </section>;
};

const CSSNewWorld: React.FC<IProps> = (props) => {
  const { name, children } = props;
  console.log('children=====', children);
  usePageTitle('CSS新世界');
  return <>
    <div>{name}</div>
    <div className="header">
      <a href="../" className="logo" title="回到demo首页"></a>
    </div>
    <button>CSS新世界</button>
    <p>感谢您的支持</p>
    <div className="logic-prop">
      <button>确定</button>
      <button>取消</button>
    </div>

    <div className="msg-list">
      <header className="msg-header">CSS逻辑属性学习群</header>
      {
        msgList.map((msg, index) => {
          return <MsgItem key={index} msg={msg} />;
        })
      }
    </div>
    {/* <div className="demo-inset">
      hello inset
    </div> */}
    <div className="demo-border"></div>
    <div className="demo-position-sticky"></div>
    <div className="demo-font">
      <p>&#x263a;</p>
      <p className="emoji">&#x263a;</p>
    </div>
    <div className="demo-background">
      <button className="btn-add"></button>
      <button className="btn-sub"></button>
    </div>
    <p className="text-gradient">我是渐变文字</p>
    <div className="demo-opacity">
      <div className="father opacity1">
        <div className="son"></div>
      </div>
      <div className="father opacity2">
        <div className="son"></div>
      </div>
    </div>
    <div className="demo-capitalize">
      <p>hello</p>
      <p>world</p>
    </div>
    <div className="demo-auto-button-color">
      <button className="button">hello moto</button>
    </div>
    <div className="pie-simple p10">
      <div className="pie-left"></div>
      <div className="pie-right"></div>
    </div>
    <div className="pie-simple p40">
      <div className="pie-left"></div>
      <div className="pie-right"></div>
    </div>
    <div className="pie-simple p80">
      <div className="pie-left"></div>
      <div className="pie-right"></div>
    </div>
    <section className="demo-box-shadow">
      <button className="normal">正常</button>
      <button className="primary">主要</button>
      <button className="warning">警示</button>
    </section>
    <div className="demo-multi-border"></div>
    <div className="demo-loading"></div>
    {/* <div id="guide-overlap"></div> */}
    <div className="demo-calc mt80 mb80">
      <div className="bar bar60"></div>
    </div>
  </>;
};

export default CSSNewWorld;