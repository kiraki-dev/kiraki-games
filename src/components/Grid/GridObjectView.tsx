import React, { FC } from 'react';
import Gerb from '../Gerb';
import Explosion from '../explosions/Explosion';
import { GridObjectContext } from './Grid.helpers';
import { GridObject, GridObjectType } from '../../viewModels/GridObject';

const GRID_OBJECT_COMPONENTS: Record<GridObjectType, FC> = {
  gerb: Gerb,
  explosion: Explosion
};

const GridObjectView: FC<GridObject> = (gridObject: GridObject) => {
  const ObjectComponent = GRID_OBJECT_COMPONENTS[gridObject.type];

  return (
    <GridObjectContext.Provider value={gridObject}>
      <ObjectComponent />
    </GridObjectContext.Provider>
  );
};

export default GridObjectView;
