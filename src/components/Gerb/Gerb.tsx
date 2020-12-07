import React, { FC } from 'react';
import styles from './Gerb.module.scss';
import standingStateImg from '../../assets/images/other/gerb.svg';
import destroyedStateImg from '../../assets/images/other/gerb_destroyed.svg';
import { useGridObjectState } from '../Grid/Grid.helpers';
import { GerbState } from '../../models/GerbObject';

const Gerb: FC = () => {
  const [state, inlineStyles] = useGridObjectState<GerbState>();
  const gerbImg = state.isDestroyed ? destroyedStateImg : standingStateImg;

  return (
    <img className={styles.Gerb} style={inlineStyles} src={gerbImg} alt="" />
  );
};

export default Gerb;
