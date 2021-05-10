import * as React from 'react';

interface IProps {
  children: React.ReactNode
}

interface IState {

}

const App: React.FC<IProps, IState> = () => {
  return <div>
    hello
    </div>;
};

export default App;