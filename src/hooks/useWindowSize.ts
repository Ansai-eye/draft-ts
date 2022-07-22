import * as React from 'react';

type WindowSize = 'large' | 'small' | 'medium';

const getSize = (): WindowSize => {
  return window.innerWidth > 1000 ? 'large' : 'small';
};

const useWindowSize = (): WindowSize => {
  const [size, setSize] = React.useState(getSize());
  React.useEffect(() => {
    const handler = () => {
      setSize(getSize());
    };
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return size;

};

export default useWindowSize;