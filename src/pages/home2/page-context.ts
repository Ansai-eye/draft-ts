import React from 'react';

interface IContextVal {
  theme: string;
  changeTheme: () => void;
  lang: string;
  changeLang: () => void;
}

const PageContext = React.createContext({
  theme: '',
  changeTheme: () => {
    console.log('hello');
  },
  lang: '',
  changeLang: () => {
    console.log('hello');
  },
});

export default PageContext;
export { IContextVal };
