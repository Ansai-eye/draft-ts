import React, { useState } from 'react';
import { Chapter1, Chapter2, Chapter4 } from './components';

export default function JieMi(): JSX.Element {
  const [showChap1] = useState<boolean>(false);
  const [showChap2] = useState<boolean>(false);
  return (
    <>
      {
        showChap1 &&
        <Chapter1 />
      }
      {
        showChap2 &&
        <>
          <hr />
          <Chapter2 />
        </>
      }

      <hr />
      <Chapter4 />
    </>
  );
}
