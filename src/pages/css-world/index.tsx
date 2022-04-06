import React from 'react';

import { usePageTitle } from '@/hooks';

import './index.less';


const CSSWorld: React.FC = () => {
  usePageTitle('内联元素与流');
  const str = '中国x Sphinx Aghfy';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const strArr = str.split('');
  return <>
    <div className="container">
      <img src="https://demo.cssworld.cn/images/common/m/1.jpg" />
    </div>

    {/* <div className="strut"><span></span></div> */}

    {/* 行高 */}
    {/* <div className="demo-line-height">xxx</div> */}

    {/* 行距，半行距 */}
    {/* <div className="line-distance">
      <span>sphinx</span>
    </div> */}
    {/* <div className="line-distance">
      <span>sphinx</span>
    </div> */}

    {/* <div className="font-compaire en-write-line-1">
      <div className="median"></div>
      {
        strArr.map((item, index) => {
          return <span key={index} className="x-font x-font-1">{item}</span>;
        })
      }
    </div>

    <div className="font-compaire en-write-line-2">
      <div className="median"></div>
      {
        strArr.map((item, index) => {
          return <span key={index} className="x-font x-font-2">{item}</span>;
        })
      }
    </div> */}

    {/* <div className="font-compaire en-write-line-3">
      <div className="median"></div>
      <span className="x-font x-font-3">中国x Sphinx Aghfy</span>
    </div> */}

    {/* <span className="x-font x-font-alone x-font-3">中国x Sphinx Aghfy</span> */}

    {/* 行高对块级元素的影响 */}
    {/* <div className="demo-block-line-height">
      x<img height="96" src="https://demo.cssworld.cn/images/common/m/1.jpg" />
    </div> */}

    {/* vertical-align示例*/}
    {/* <div className="demo-vertical-align">
      <span className="x">x</span>&nbsp;<span className="text">文本x</span>
    </div> */}
  </>;
};

export default CSSWorld;