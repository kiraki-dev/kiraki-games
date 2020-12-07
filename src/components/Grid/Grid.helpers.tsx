import { createContext, CSSProperties, useContext } from 'react';
import { numberToCssBlock } from '../../utils/html-helpers';
import { GameObject, GameObjectPosition } from '../../models/GameObject';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const GridObjectContext = createContext<GameObject<unknown> | null>(null);

export const useGridObjectState = <T extends unknown>(): [T, CSSProperties] => {
  const obj = useContext(GridObjectContext);

  if (!obj) {
    throw new Error('Missing provider for GridObject');
  }

  return [obj.state as T, getPositionStyles(obj.position)];
};

const getPositionStyles = (position: GameObjectPosition): CSSProperties => {
  const translate = `translate(${numberToCssBlock(position.x)}, ${numberToCssBlock(position.y)})`;
  return {
    transform: translate
  };
};
