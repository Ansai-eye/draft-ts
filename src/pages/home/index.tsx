import React, { useState } from 'react';

import { usePow, useCreation } from '@/hooks';
import './index.less';

export default function Home(): JSX.Element {
  const [flag, setFlag] = useState<boolean>(false);
  const data = usePow([1, 2, 3]);

  const getNewData = () => {
    return Math.random();
  };

  const nowData = useCreation(() => getNewData(), []);

  return <>
    <span>这是第一句话</span>&nbsp;&nbsp;<span className="decoration">这是第二句话</span>
    <div>这是第三句话</div>
    <div>这是第四句话</div>
    <section>
      <p data-clstag="hello">父元素设置text-decoration: dashed underline;</p>
      <p>子元素设置text-decoration: wavy overline;</p>
    </section>
    <section>
      <div>数字：{JSON.stringify(data)}</div>
      <button onClick={() => { setFlag(v => !v); }}>切换</button>
      <div>切换状态：{JSON.stringify(flag)}</div>
    </section>
    <section>
      <div>正常函数：{getNewData()}</div>
      <div>useCreation包裹后的： {nowData}</div>
      <button onClick={() => { setFlag(v => !v); }}>渲染</button>
    </section>
  </>;
}
