import * as React from 'react';

import './index.less';

export type IProps = {

}

const Animation:React.FC<IProps> = () => {
  return(
    <div className="animation">
      <div className="fade-in"></div>
    </div>
  );
};

export default Animation;