import React, { useState, Dispatch, SetStateAction, ReactNode, useEffect, InputHTMLAttributes } from 'react';
import testimg from '@/assets/img/test.jpg';
import testimg2 from '@/assets/img/test2.jpg';
import './index.less';

type MainProps = {
  setVisi: Dispatch<SetStateAction<boolean>>;
  visi: boolean;
  children?: ReactNode;
};

const Chapter4: React.FC = () => {
  const [visi, setVisi] = useState(false);
  const props: MainProps = {
    visi,
    setVisi
  };
  return (
    <>
      <Main {...props} />
      {
        visi &&
        <div className="modal" onClick={() => setVisi(false)}>
          O hai, I&apos;m a dialog. Click on me to dismiss.
        </div>
      }
    </>
  );
};

const Main: React.FC<MainProps> = (props: MainProps) => {
  const { visi, setVisi } = props;
  useEffect(() => {
    // 创建附加div，并用它包住第一个图片元素
    const div = document.createElement('div');
    const img = document.querySelector('img') as Node;
    const slider = document.querySelector('.iteractive-img');
    slider?.insertBefore(div, img);
    div.appendChild(img);
    // 创建滑块
    const range = document.createElement('input');
    range.type = 'range';
    range.oninput = function() {
      div.style.width = (this as InputHTMLAttributes<Range>).value + '%';
    };
    slider?.appendChild(range);
  }, []);
  return <main className={`${visi ? 'de-emphasized' : ''}`}>
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
    <section className="cursor disabled"></section>
    <hr />
    <section className="checkbox-customize">
      <input checked={visi} type="checkbox" name="checkbox" id="awsome" onChange={e => setVisi(e.target.checked)} />
      <label htmlFor="awsome">Awsome!</label>
    </section>
    <section className="scroll-reminder">
      <h2>Scroll reminder</h2>
      <h2>Scroll reminder</h2>
      <h2>Scroll reminder</h2>
      <h2>Scroll reminder</h2>
      <h2>Scroll reminder</h2>
      <h2>Scroll reminder</h2>
      <h2>Scroll reminder</h2>
      <h2>Scroll reminder</h2>
      <h2>Scroll reminder</h2>
    </section>
    <section className="iteractive-img">
      <img src={testimg} alt="Before" />
      <img src={testimg2} alt="After" />
    </section>
    <section className="self-adaption-content">
      <p>当开发者走投无路时，就只能对figure应用一个固定的width或max-width了，然后对 应用 可是这个方法无法充分利用有效空间；对于过小的图片来说，布局效果也很突兀。此外，响应式也无从谈起。</p>
      <figure>
        <img src={testimg} width={300} alt="test" />
        <figcaption>
          目前这个渲染结果距离我们的期望还有不小的差距：文本行比图片要宽多了。如何让figure的宽度由它内部的图片来决定，而不是由它的父元素来决定呢
        </figcaption>
      </figure>
      <p>当开发者走投无路时，就只能对figure应用一个固定的width或max-width了，然后对 应用 可是这个方法无法充分利用有效空间；对于过小的图片来说，布局效果也很突兀。此外，响应式也无从谈起。</p>
    </section>
    <footer>
      <div className="wrapper">
        这里是页脚的内容
      </div>
    </footer>
    <section className="vertical-align">
      <main>
        <h1>Am I centerd yet?</h1>
        <p>Center me, please!</p>
      </main>
    </section>
  </main>;
};

export default Chapter4;
