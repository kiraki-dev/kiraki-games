import React, { FC } from 'react';
import classNames from 'classnames';
import { useGridObjectState } from '../Grid/Grid.helpers';
import classes from './Bullet.module.scss';
import { BulletState } from '../../models/BulletObject';

const Bullet: FC = () => {
  const [state, inlineStyles] = useGridObjectState<BulletState>();
  return <div style={inlineStyles} className={classNames([classes.Bullet, classes[state.direction]])} />;
};

export default Bullet;
