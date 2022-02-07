import React from 'react';
import './index.less';

const CSSWorld: React.FC = () => {
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
    <div className="dialog-container">
      <div className="dialog">
        <div className="content">内容区域</div>
      </div>
    </div>
  </>;
};

export default CSSWorld;