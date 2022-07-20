import React from 'react';
import './index.less';

import { usePageTitle } from '@/hooks';

import './index.less';


const CSSWorld: React.FC = () => {
<<<<<<< HEAD
  usePageTitle('内联元素与流');
  const str = '中国x Sphinx Aghfy';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const strArr = str.split('');
  return <>
    <div className="container">
      xy<img src="https://demo.cssworld.cn/images/common/m/1.jpg" />
    </div>

    <div className="strut"><span></span></div>

    {/* 行高 */}
    <div className="demo-line-height">xxx</div>

    {/* 行距，半行距 */}
    <div className="line-distance">
      <span>sphinx</span>
    </div>
    {/* <div className="line-distance">
      <span>sphinx</span>
    </div> */}

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
      {
        strArr.map((item, index) => {
          return <span key={index} className="x-font x-font-2">{item}</span>;
        })
      }
    </div>

    <div className="font-compaire en-write-line-3">
      <div className="median"></div>
      <span className="x-font x-font-3">中国x Sphinx Aghfy</span>
    </div>

    <span className="x-font x-font-alone x-font-3">中国x Sphinx Aghfy</span>

    {/* 行高对块级元素的影响 */}
    <div className="demo-block-line-height">
      x<img height="96" src="https://demo.cssworld.cn/images/common/m/1.jpg" />
    </div>

    {/* vertical-align示例*/}
    <div className="demo-vertical-align">
      <span className="x">x</span>&nbsp;<span className="text">文本x</span>
    </div>
=======
  return <>
    <a>css world</a>
    <div className="clear">
      <div className="float-left">
        this is float element
      </div>
    </div>
    <ol>
      <li>li</li>
    </ol>
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>table</td>
        </tr>
      </tbody>
    </table>
    <footer>footer</footer>
    <div className="box">
      <p className="content">hello</p>
    </div>
    <div className="ao"></div>
    <div className="tu"></div>
    <div className="height-auto">
      <div className="child"></div>
    </div>
    <hr />
    <div className="ghost-node">
      <span></span>
    </div>
    <div>helloo</div>
    <div className="dot">
      正在加载中<span>...</span>
    </div>
    <div className="quotes">
      <p lang="ch"><span>这本书很赞！</span></p>
      <p lang="en"><span>this book is very good!</span></p>
      <p lang="no"><span>denne bog er fantastisk!</span></p>
    </div>
    <div className="counter"></div>
    <div className="login-and-registry">
      <a href="http://www.baidu.com">登录</a>
      <a href="http://www.baidu.com">注册</a>
    </div>
    <div className="rectangle">
      <img src="https://demo.cssworld.cn/images/4/cover-5-1.jpg" alt="test" />
    </div>
    <button id="btn"></button>
    <label htmlFor="btn">按钮</label>

    <div className="father">
      <div className="son"></div>
    </div>
    <div className="box-dot">
      <div className="dotted"></div>
    </div>
    <div className="triangle"></div>
    <div className="x-height">
      Hello 中国人<span>x</span><i className="icon-arrow"></i>
    </div>
    <div className="test-div-height">
      我是div
    </div>
    <span className="dib-baseline"></span>
    <span className="dib-baseline">x-baseline<sup>[1]</sup></span>
    <span className="dib-baseline">NH<sub>4</sub>HCO<sub>3</sub><sup>[2]</sup></span>
    {
      false && <div className="dialog-container">
        <div className="dialog">
          <div className="content">内容区域</div>
        </div>
      </div>
    }
    <ul className="test-float">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <a href="#">返回顶部</a>
    <div className="test-position-absolute">
      hello absolute
    </div>
    <div className="test-placeholder">
      <label className="placeholder" htmlFor="text">占位符</label>
      <input type="text" id="text" />
    </div>

    <form>
      <input type="submit" id="someId" className="clip"/>
      <label htmlFor="someId">提交</label>
    </form>
>>>>>>> 1f048d6a77acc2575efa005357a02ae4ea11cd29
  </>;
};

export default CSSWorld;