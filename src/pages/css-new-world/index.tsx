import React from 'react';

import { usePageTitle } from '@/hooks';

import './index.less';


const CSSNewWorld: React.FC = () => {
  usePageTitle('CSS新世界');
  return <>
    <button>CSS新世界</button>
    <p>感谢您的支持</p>
  </>;
};

export default CSSNewWorld;