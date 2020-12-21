import React, { FC } from 'react';

import style from './Water.module.scss';
import { useGridObjectState } from '../../Grid/Grid.helpers';

const Water: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();
  return <div style={inlineStyles} className={style.Water} />;
};

export default Water;
