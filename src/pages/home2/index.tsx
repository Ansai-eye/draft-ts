import React, { useState, useContext, useReducer } from 'react';
import PageContext, { IContextVal } from './page-context';

type CountState = {
  count: number;
};

type CountAction = {
  type: string;
  payload?: number;
};

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

const initialState: CountState = { count: 0 };
function reducer(state: CountState, action: CountAction) {
  switch (action.type) {
  case 'increment':
    return { count: state.count + 1 };
  case 'decrement':
    return { count: state.count - 1 };
  default:
    return { count: state.count };
  }
}

function Body(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

function Footer(): JSX.Element {
  return <>here is footer</>;
}
