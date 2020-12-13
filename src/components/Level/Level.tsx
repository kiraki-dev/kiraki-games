import React, { FC } from 'react';
import styles from './Level.module.scss';

const Level: FC<Readonly<{ lvl: number; }>> = (props: Readonly<{ lvl: number; }>) => (
  <div className={styles.Level}>
    <div className={styles.Img} />
    <div>
      <span>{props.lvl}</span>
    </div>
  </div>
);

export default Level;
