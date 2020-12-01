import React, { FC, useState } from 'react';
import produce from 'immer';
import Grid from '../Grid/Grid';
import { BattleCityState } from './BattleCity.state';
import styles from './BattleCity.module.scss';
import { GameObject, GameObjectPosition, GameObjectType } from '../../models/GameObject';
import { tankColorsList, tankDirectionsList, tankTypesList } from '../Tank/Tank.helpers';

const INITIAL_COUNT = 20;
const gameObjectTypeItems: GameObjectType[] = ['gerb', 'explosion', 'tank'];

const defaultState: Readonly<BattleCityState> = {
  isPaused: false,
  grid: {
    objects: []
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

const addItemsToState = (state: Readonly<BattleCityState>, items: GameObject<unknown>[]): Readonly<BattleCityState> => {
  return produce(state, (draft) => {
    draft.grid.objects = [...draft.grid.objects, ...items];
  });
};

const getNewItems = (count: number, start = 0): GameObject<unknown>[] => Array.from({ length: count }, (item, ind) => {
  const type: GameObjectType = getRandomItem(gameObjectTypeItems);
  const state = getRandomState(type);
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const position = new GameObjectPosition(getRandomInt(30), getRandomInt(30));

  return new GameObject('', `${type}-${start + ind}`, type, position, state);
});

const getRandomInt = (max: number, min = 0): number => Math.floor(Math.random() * (max - min)) + min;

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const getRandomBoolean = (): boolean => !!getRandomInt(2);

const getRandomItem = <T extends unknown>(array: T[]): T => {
  return array[getRandomInt(array.length)];
};

// eslint-disable-next-line complexity
const getRandomState = (type: GameObjectType): unknown | undefined => {
  switch (type) {
    case 'gerb':
      return { isDestroyed: getRandomBoolean() };
    case 'tank':
      return {
        color: getRandomItem(tankColorsList),
        direction: getRandomItem(tankDirectionsList),
        type: getRandomItem(tankTypesList),
        isMoving: getRandomBoolean()
      };
    case 'explosion':
    default:
      return undefined;
  }
};
