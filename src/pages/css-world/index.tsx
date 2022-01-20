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
  </>;
};

export default CSSWorld;