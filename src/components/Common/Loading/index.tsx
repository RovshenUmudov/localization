import React from 'react';
import { Spin } from 'antd';
import clsx from 'clsx';
import { SpinSize } from 'antd/lib/spin';

import './index.scss';

interface Loading {
  size?: SpinSize;
  absolute?: boolean;
  visible: boolean;
}

const Loading = ({ size, absolute, visible }: Loading) => visible ? (
  <div className={clsx('loading', absolute ? 'absolute' : '')}>
    <Spin size={size} />
  </div>
) : null;

Loading.defaultProps = {
  size: 'large',
  absolute: false,
};

export default Loading;
