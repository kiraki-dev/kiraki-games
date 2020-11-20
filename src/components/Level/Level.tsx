import React, { FC } from 'react';
import styles from './Level.module.scss';
import lvlFlagImg from '../../assets/images/other/level_flag.png';

const Level: FC<Readonly<{ lvl: number; }>> = (props: Readonly<{ lvl: number; }>) => (
  <div className={styles.Level}>
    <img src={lvlFlagImg} alt="" />
    <div>
      <span>{props.lvl}</span>
    </div>
  </div>
);

export default Level;
