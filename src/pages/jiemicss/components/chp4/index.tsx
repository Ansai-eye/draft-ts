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
      <hr />
      <section className="text-decoration">
        The only way to{' '}
        <a href="https://www.baidu.com">get rid of a temptation</a> is to{' '}
        <a href="https://www.baidu.com">yield</a> to it.
      </section>
      <hr />
      <section className="word-effect">
        &ldquo;The only way to get rid of a temptation is to yield to it.&rdquo;
      </section>
      <section className="word-effect-2">
        <h1>
          <svg width="2em" height="1.2em">
            <use xlinkHref="#css" />
            <text id="css" y="1em">
              CSS
            </text>
          </svg>
        </h1>
      </section>
      <section className="word-effect-light">Glow</section>
      <section className="word-effect-circle">
        <svg viewBox="0 0 100 100">
          <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
          <text>
            <textPath xlinkHref="#circle">
              circular reasoning works because hello moto
            </textPath>
          </text>
        </svg>
      </section>
      <hr />
      <section className="cursor disabled">

      </section>
    </>
  );
};

export default Chapter4;
