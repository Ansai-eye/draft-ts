import * as React from 'react';

import './index.less';

export type MusicLoadingProps = {
  delay?: number; // 动画播放延时
  animationGap?: number; // 动画时间间隔，单位 ms
};

const MusicLoading: React.FC<MusicLoadingProps> = (props) => {
  console.log('MusicLoadingProps=====', props);
  return (
    <div className="music-loading">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  );
};

export default MusicLoading;