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

  return (
    <PageContext.Provider value={contextVal}>
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    </PageContext.Provider>
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
