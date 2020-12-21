import React, { FC } from 'react';

import style from './BrickWall.module.scss';
import { useGridObjectState } from '../../Grid/Grid.helpers';

const BrickWall: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();
  return <div style={inlineStyles} className={style.Brick} />;
};

export default BrickWall;
