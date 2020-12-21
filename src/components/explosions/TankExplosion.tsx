import React, { FC } from 'react';
import classes from './TankExplosion.module.scss';
import { useGridObjectState } from '../Grid/Grid.helpers';

const TankExplosion: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();
  return <div style={inlineStyles} className={classes.TankExplosion} />;
};

export default TankExplosion;
