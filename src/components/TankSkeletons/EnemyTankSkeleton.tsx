import React, { FC } from 'react';
import styles from './TankSkeleton.module.scss';
import { useGridObjectState } from '../Grid/Grid.helpers';

const EnemyTankSkeleton: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();
  const classes = [styles.EnemyTankSkeleton, styles.TankSkeleton].join(' ');
  return <div style={inlineStyles} className={classes} />;
};

export default EnemyTankSkeleton;
