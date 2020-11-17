import React, { FC, useState } from 'react';
import Grid from '../Grid/Grid';
import { BattleCityState } from './BattleCity.state';
import styles from './BattleCity.module.scss';
import { GridObjectPosition } from '../Grid/Grid.state';

const defaultState: Readonly<BattleCityState> = {
  isPaused: false,
  grid: {
    gridObjects: [
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      { id: 'explosion-1', type: 'explosion', position: new GridObjectPosition(0, 0) },
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      { id: 'gerb-1', type: 'gerb', props: { isDestroyed: true }, position: new GridObjectPosition(14, 30) },
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      { id: 'gerb-2', type: 'gerb', props: { isDestroyed: false }, position: new GridObjectPosition(16, 30) }
    ]
  },
  upcomingEnemies: 5
};

const BattleCity: FC = () => {
  const [state] = useState(defaultState);

  return (
    <div className={styles.BattleCity}>
      <Grid state={state.grid} />
    </div>
  );
};

export default BattleCity;
