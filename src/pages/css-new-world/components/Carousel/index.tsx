/* 旋转木马 */
import * as React from 'react';

import './index.less';

type ImgProp = {
  alt?: string;
  src: string;
}

type IProps = {
  imgs: ImgProp[];
};

const Carousel: React.FC<IProps> = (props) => {
  const { imgs } = props;
  const [currIndex, setCurrIndex] = React.useState(0);

  const handleRotate: React.MouseEventHandler<Element> = (e) => {
    const { currentTarget } = e;
    const index = (currIndex || 0) + 1;
    (currentTarget as HTMLElement).style.transform = 'rotateY(' + index * 40 + 'deg)';
    setCurrIndex(index);
  };

  return (
    <div className="stage">
      <div id="container" className="container" onClick={handleRotate}>
        {
          imgs.map((img, index) => {
            return <img
              data-index={index}
              className={`piece-${index + 1} piece`}
              key={index}
              src={img.src}
              alt={img.alt} />;
          })
        }
      </div>
    </div>
  );
};

export default Carousel;