import React from 'react';
import './index.less';

const Chapter4: React.FC = () => {
  return (
    <>
      <section className="bevel"></section>
      <hr />
      <section className="hyphen">
        The only way to get rid of a temptation is to yield to it.
      </section>
      <hr />
      <section className="break-line">
        <dl>
          <dt>Name:</dt>
          <dd>Lea Verou</dd>

          <dt>Email:</dt>
          <dd>18251984729@163.com</dd>
          <dd>142404@qq.com</dd>

          <dt>Location:</dt>
          <dd>Earth China</dd>
        </dl>
      </section>
      <hr />
      <section className="stripe-under-text">
        <code>
          while (true) {'{'} <br />
          &nbsp;var d = new Date();
          <br />
          &nbsp;if(d.getDate() == 1 && d.getMonth() == 3) {'{'} <br />
          &nbsp;&nbsp;alert(Hello); <br />
          &nbsp;{'}'} <br />
          {'}'}
        </code>
      </section>
    </>
  );
};

export default Chapter4;
