import React, { FC } from 'react';
import classes from './Spawn.module.scss';
import { useGridObjectState } from '../Grid/Grid.helpers';

const Spawn: FC = () => {
  const [, inlineStyles] = useGridObjectState<undefined>();

  return <div style={inlineStyles} className={classes.Spawn} />;
};

export default Spawn;
