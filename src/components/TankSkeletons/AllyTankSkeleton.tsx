import React, { FC } from 'react';
import styles from './TankSkeleton.module.scss';
import { useGridObjectState } from '../Grid/Grid.helpers';

const AllyTankSkeleton: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();
  const classes = [styles.TankSkeleton, styles.AllyTankSkeleton].join(' ');
  return <div style={inlineStyles} className={classes} />;
};

export default AllyTankSkeleton;
