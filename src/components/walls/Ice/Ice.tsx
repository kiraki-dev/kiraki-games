import React, { FC } from 'react';

import style from './Ice.module.scss';
import { useGridObjectState } from '../../Grid/Grid.helpers';

const Ice: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();
  return <div style={inlineStyles} className={style.Ice} />;
};

export default Ice;
