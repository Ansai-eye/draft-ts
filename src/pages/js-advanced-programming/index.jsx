import React, { useState, useEffect } from 'react';

import './index.less';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function JsAdvanced() {
  const [dom, setDom] = useState({});

  useEffect(() => {
    console.log('dom', dom);
  }, [dom]);


  return <h2 ref={setDom}>
    <p>try to edit my content!</p>
    <p>try to edit my content2!</p>
  </h2>;
}