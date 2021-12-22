import React, { useState,useDebugValue } from 'react';

export default function Home2(): JSX.Element {
  console.log('rerendered=====');
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
