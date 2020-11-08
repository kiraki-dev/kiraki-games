import React, { FC } from 'react';
import styles from './Gerb.module.scss';
import standingStateImg from '../../assets/images/other/gerb.svg';
import destroyedStateImg from '../../assets/images/other/gerb_destroyed.svg';

interface GerbProps {
  isDestroyed: boolean;
}

const Gerb: FC<GerbProps> = (props: Readonly<GerbProps>) => {
  const gerbImg = props.isDestroyed ? destroyedStateImg : standingStateImg;
  return (
    <img src={gerbImg} className={styles.Gerb} alt="" />
  );
};

export default Gerb;
