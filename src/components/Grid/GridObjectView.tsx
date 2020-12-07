import React, { FC } from 'react';
import Gerb from '../Gerb';
import Explosion from '../explosions/Explosion';
import { GridObjectContext } from './Grid.helpers';
import { GameObject, GameObjectType } from '../../models/GameObject';

const GRID_OBJECT_COMPONENTS: Record<GameObjectType, FC> = {
  gerb: Gerb,
  explosion: Explosion
};

const GridObjectView: FC<GameObject<unknown>> = (object: GameObject<unknown>) => {
  const ObjectComponent = GRID_OBJECT_COMPONENTS[object.objectType];

  return (
    <GridObjectContext.Provider value={object}>
      <ObjectComponent />
    </GridObjectContext.Provider>
  );
};

export default GridObjectView;
