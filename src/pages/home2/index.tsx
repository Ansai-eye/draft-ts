import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import PageContext from './page-context';

interface IContextVal {
  theme: string;
  changeTheme: () => void;
  lang: string;
  changeLang: () => void;
}

export default function Home2(): JSX.Element {
  const [theme, setTheme] = useState<string>('red');
  const [lang, setLang] = useState<string>('zh');
  const changeTheme = () => {
    setTheme(theme === 'red' ? 'green' : 'red');
  };
  const changeLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };
  const contextVal: IContextVal = {
    theme,
    changeTheme,
    lang,
    changeLang,
  };

  const callback = (
    id, // 发生提交的 Profiler 树的 “id”
    phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions // 属于本次更新的 interactions 的集合
  ) => {
    console.log(id);
    console.log(phase);
    console.log(actualDuration);
    console.log(baseDuration);
    console.log(startTime);
    console.log(commitTime);
    console.log(interactions);
  };

  return (
    <React.Profiler id="context" onRender={callback}>
      <PageContext.Provider value={contextVal}>
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      </PageContext.Provider>
    </React.Profiler>
  );
}

function Header(): JSX.Element {
  const ctx = useContext(PageContext);
  return ReactDOM.createPortal(
    <div style={{ border: `1px solid ${ctx.theme}` }}>
      <button onClick={ctx.changeTheme}>
        {ctx.lang === 'zh' ? '切换主题' : 'change theme'}
      </button>
      <button onClick={ctx.changeLang}>
        {ctx.lang === 'zh' ? '切换语言' : 'change lang'}
      </button>
    </div>,
    document.body
  );
  return (
    <div style={{ border: `1px solid ${ctx.theme}` }}>
      <button onClick={ctx.changeTheme}>
        {ctx.lang === 'zh' ? '切换主题' : 'change theme'}
      </button>
      <button onClick={ctx.changeLang}>
        {ctx.lang === 'zh' ? '切换语言' : 'change lang'}
      </button>
    </div>
  );
}

function Body(): JSX.Element {
  return <></>;
}

function Footer(): JSX.Element {
  return <></>;
}
