import React, { FC } from 'react';
import classes from './Explosion.module.scss';
import { useGridObjectState } from '../Grid/Grid.helpers';

const Explosion: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();

  return <div style={inlineStyles} className={classes.Explosion} />;
};

export default Explosion;
