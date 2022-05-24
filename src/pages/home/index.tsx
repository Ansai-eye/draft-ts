import React from 'react';

import './index.less';

export default function Home(): JSX.Element {
  return <>
    <span>这是第一句话</span>&nbsp;&nbsp;<span className="decoration">这是第二句话</span>
    <div>这是第三句话</div>
    <div>这是第四句话</div>
    <section>
      <p>父元素设置text-decoration: dashed underline;</p>
      <p>子元素设置text-decoration: wavy overline;<wavy /></p>
      
    </section>
  </>;
}
