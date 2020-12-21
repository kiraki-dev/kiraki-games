import React, { FC } from 'react';

import style from './Forest.module.scss';
import { useGridObjectState } from '../../Grid/Grid.helpers';

const Forest: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();
  return <div style={inlineStyles} className={style.Forest} />;
};

export default Forest;
