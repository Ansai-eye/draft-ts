import React from 'react';

import { usePageTitle } from '@/hooks';

import './index.less';

interface IMsg {
  avatorUrl: string
  avatorAlt?: string
  name: string
  txt?: string
  dataSelf?: boolean
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

interface IMsgItem {
  msg: IMsg
}

const MsgItem: React.FC = (props: IMsgItem) => {
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

const CSSNewWorld: React.FC = () => {
  usePageTitle('CSS新世界');
  return <>
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
  </>;
};

export default CSSNewWorld;