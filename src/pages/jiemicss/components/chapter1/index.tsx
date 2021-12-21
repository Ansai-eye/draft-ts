import React from 'react';
import './index.less';

export default function Chapter1(): JSX.Element {
  return (
    <div className="chapter1">
      <section>Chapter1</section>
      <hr />
      <button>Yes!</button>
      <button className="cancel">Cancel</button>
      <button className="ok">OK</button>
      <hr />
      <a href="//www.baidu.com">
        baidu
        <div className="callout">
          Only letters, numbers, underscores ) and hyphens ()allowed!()a
        </div>
      </a>
    </div>
  );
}
