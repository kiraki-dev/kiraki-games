import React, { FC } from 'react';

import style from './ConcreteWall.module.scss';
import { useGridObjectState } from '../../Grid/Grid.helpers';

const ConcreteWall: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();
  return <div style={inlineStyles} className={style.Concrete} />;
};

export default ConcreteWall;
