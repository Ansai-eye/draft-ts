import React from 'react';
import { Button } from 'antd';

import './index.less';

function wait(message: string): void {
  setTimeout(function timer() {
    alert(message);
  }, 1000);
}

const JsAdvanced: React.FC = () => {
  return (
    <div className="js-advanced">
      <Button onClick={() => wait('this is what i say!')}>say message</Button>
    </div>
  );
};

export default JsAdvanced;