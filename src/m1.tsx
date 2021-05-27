import * as React from 'react';

interface IProps {
  children: React.ReactNode
}

const TestPage: React.FC<IProps> = (props:IProps) => {
  return <div>
    {props.children}
  </div>;
};

export default TestPage;