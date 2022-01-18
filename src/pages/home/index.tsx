import React,{ useMemo, useState } from 'react';

type DimentionOpt = {
  propId: string;
  propName: string;
};

let index = 0;

export default function Home(): JSX.Element {
  const [chosenDimentionOpts,setChosenDimentionOpts] = useState<DimentionOpt[]>([]);
  const opts = useMemo(() => {
    const optArr = chosenDimentionOpts.map((el:DimentionOpt) => el.propId);
    return optArr;
  },[chosenDimentionOpts]);

  const handleAddDimension = ():void => {
    const item: DimentionOpt = {
      propId: String(index),
      propName: `hello${index}`
    };
    setChosenDimentionOpts([...chosenDimentionOpts,item]);
    index ++;
  };
  return <div>
    <ol>
      {
        opts.map((item:string) => {
          return <li key={item}>{item}</li>;
        })
      }
    </ol>
    <button onClick={handleAddDimension}>Click to add dimension</button>
  </div>;
}
