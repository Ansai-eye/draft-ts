import React from 'react';
import './index.less';

const CSSWorld: React.FC = () => {
  const str = '中国x Sphinx Aghfy';
  const strArr = str.split('');
  return <>
    <div className="font-compaire en-write-line-1">
      <div className="median"></div>
      {
        strArr.map((item, index) => {
          return <span key={index} className="x-font x-font-1">{item}</span>;
        })
      }

    </div>
    <div className="font-compaire en-write-line-2">
      <div className="median"></div>
      <span className="x-font x-font-2">中国x Sphinx Aghfy</span>
    </div>
    <div className="font-compaire en-write-line-3">
      <div className="median"></div>
      <span className="x-font x-font-3">中国x Sphinx Aghfy</span>
    </div>
    <span className="x-font x-font-alone x-font-3">中国x Sphinx Aghfy</span>
    <div className="demo-line-height">
      {/* <span>hello</span> */}
    </div>
    <div className="line-distance">
      <span>sphinx</span>
    </div>
  </>;
};

export default CSSWorld;