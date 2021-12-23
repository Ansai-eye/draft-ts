import React from 'react';

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
