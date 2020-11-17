import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import { GridObject, GridObjectPosition, GridObjectType } from './Grid.state';
import Gerb from '../Gerb';
import Explosion from '../explosions';
import { GerbProps } from '../Gerb/Gerb';
import { numberToCssBlock } from '../../utils/html-helpers';
import styles from './Grid.module.scss';

type ObjectPropType = GerbProps | undefined;

const GRID_OBJECT_COMPONENTS: Record<GridObjectType, FC<ObjectPropType>> = {
  gerb: Gerb,
  explosion: Explosion
};

const GridObjectView: FC<GridObject> = (gridObject: GridObject) => {
  const ObjectComponent = GRID_OBJECT_COMPONENTS[gridObject.type];

  const { props = {} as PropsWithChildren<undefined> } = gridObject;
  const positionStyles = getPositionStyles(gridObject.position);

  return (
    <div className={styles.ObjectView} style={positionStyles}>
      <ObjectComponent {...props} />
    </div>
  );
};

export default GridObjectView;

const getPositionStyles = (location: GridObjectPosition): CSSProperties => {
  const translate = `translate(${numberToCssBlock(location.x)}, ${numberToCssBlock(location.y)})`;
  return {
    transform: translate
  };
};
