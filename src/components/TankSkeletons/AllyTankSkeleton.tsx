import React, { FC } from 'react';
import styles from './TankSkeleton.module.scss';
import { useGridObjectState } from '../Grid/Grid.helpers';

const AllyTankSkeleton: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();
  return <div style={inlineStyles} className={[styles.AllyTankSkeleton, styles.TankSkeleton].join(' ')} />;
};

export default AllyTankSkeleton;
