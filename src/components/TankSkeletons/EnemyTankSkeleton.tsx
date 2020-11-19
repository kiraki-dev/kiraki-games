import React, { FC } from 'react';
import styles from './TankSkeleton.module.scss';
import { useGridObjectState } from '../Grid/Grid.helpers';

const EnemyTankSkeleton: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();
  return <div style={inlineStyles} className={[styles.EnemyTankSkeleton, styles.TankSkeleton].join(' ')} />;
};

export default EnemyTankSkeleton;
