import React, { FC, useState } from 'react';
import Grid from '../Grid/Grid';
import { BattleCityState } from './BattleCity.state';
import styles from './BattleCity.module.scss';
import { GridObject, GridObjectPosition } from '../../viewModels/GridObject';

const INITIAL_COUNT = 20;

const defaultState: Readonly<BattleCityState> = {
  isPaused: false,
  grid: {
    gridObjects: []
  },
  upcomingEnemies: 5
};

const BattleCity: FC = () => {
  const [state] = useState(() => addItemsToState(defaultState, getNewItems(INITIAL_COUNT)));

  return (
    <div className={styles.BattleCity}>
      <Grid state={state.grid} />
    </div>
  );
};

export default BattleCity;

// todo: remove after having proper state management
const addItemsToState = (state: Readonly<BattleCityState>, items: GridObject[]): Readonly<BattleCityState> => ({
  ...state,
  grid: {
    gridObjects: [
      ...state.grid.gridObjects,
      ...items
    ]
  }
});

const getNewItems = (count: number, start = 0): GridObject[] => Array.from({ length: count }, (item, ind) => {
  const type = getRandomBoolean() ? 'gerb' : 'explosion';
  const state = type === 'gerb' ? { isDestroyed: getRandomBoolean() } : undefined;
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const position = new GridObjectPosition(getRandomInt(30), getRandomInt(30));

  return new GridObject(`${type}-${start + ind}`, type, position, state);
});

const getRandomInt = (max: number, min = 0): number => Math.floor(Math.random() * (max - min)) + min;

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const getRandomBoolean = (): boolean => !!getRandomInt(2);
