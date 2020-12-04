import React, { FC } from 'react';
import styles from './Gerb.module.scss';
import { useGridObjectState } from '../Grid/Grid.helpers';
import { GerbState } from '../../models/GerbObject';

const Gerb: FC = () => {
  const [state, inlineStyles] = useGridObjectState<GerbState>();
  const classes = [styles.Gerb, state.isDestroyed ? styles.Destroyed : styles.Standing].join(' ');
  return (
    <div className={classes} style={inlineStyles} />
  );
};

export default Gerb;
