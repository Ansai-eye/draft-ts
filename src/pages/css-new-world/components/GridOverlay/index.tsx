/**
* demo css grid overlay
* @author jiangchuangshi@doba.com
* @date 2022/07/29 11:13
* @param {string} layout 布局
* @returns {jsx}
*/
import * as React from 'react';

import './index.less';

export type IProps = {
  layout?: string
}

const GridLayout: React.FC<IProps> = (props) => {
  console.log('props=====', props);
  
  return (
    <div className="demo-grid">
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
  );
};

export default GridLayout;
