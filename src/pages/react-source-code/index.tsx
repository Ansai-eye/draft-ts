import React, { useState } from 'react';

const ReactSourceCode: React.FC = () => {
  return <Father>
    <Child />
  </Father>;
};

type FatherProps = {
  children?: React.ReactNode;
};

const Child: React.FC = () => {
  console.log('Child');
  return <div>Children</div>;
};

const Father: React.FC = (props: FatherProps) => {
  const [num, setNum] = useState<number>(0);
  return <div onClick={() => setNum(num + 1)}>
    {num}
    {props.children}
  </div>;
};

export default ReactSourceCode;
