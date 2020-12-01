import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { useGridObjectState } from '../Grid/Grid.helpers';
import { TankState } from '../../models/TankObject';
import styles from './Tank.module.scss';

const Tank: FC = (): ReactElement => {
  const [state, inlineStyles] = useGridObjectState<TankState>();

  return (
    <div
      data-tank-color={state.color}
      data-tank-direction={state.direction}
      data-tank-type={state.type}
      className={classNames([styles.Tank, state.isMoving && styles.isMoving])}
      style={inlineStyles}
    />
  );
};

export default Tank;
