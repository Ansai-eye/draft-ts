import * as React from 'react';

import './index.less';

type IProps = {
  className?: string;
  maskCloseable?: boolean; //是否点击遮罩层关闭遮罩
  visible?: boolean;
  onClose?: () => void;
};

const Popup: React.FC<IProps> = (props) => {
  const [classNames, setClassNames] = React.useState(['popup']);
  React.useEffect(() => {
    if (props.className) {
      const propClassNames = props.className.split(' ');
      setClassNames(c => [
        ...c,
        ...propClassNames,
      ]);
    }
  }, [props.className]);

  React.useEffect(() => {
    if (props.visible) {
      setClassNames(c => [
        ...c,
        'active'
      ]);
    } else {
      setClassNames(c => {
        return c.filter(i => i !== 'active');
      });
    }
  }, [props.visible]);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent) => {
    const { target } = e;
    const isContent = (target as HTMLDivElement).className === 'content';
    if (!isContent && props.maskCloseable) {
      props.onClose && props.onClose();
    }
  };

  return (
    <div className={classNames.join(' ')} onClick={handleClick}>
      <div className="content">底部浮层</div>
    </div>
  );
};

export default Popup;