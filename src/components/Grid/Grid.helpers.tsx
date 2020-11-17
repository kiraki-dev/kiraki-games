import { createContext, CSSProperties, useContext } from 'react';
import { numberToCssBlock } from '../../utils/html-helpers';
import { GridObject, GridObjectPosition, GridObjectState } from '../../viewModels/GridObject';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const GridObjectContext = createContext<GridObject | null>(null);

export const useGridObjectState = <T extends GridObjectState>(): [T, CSSProperties] => {
  const gridObject = useContext(GridObjectContext);

  if (!gridObject) {
    throw new Error('Missing provider for GridObject');
  }

  return [gridObject.state as T, getPositionStyles(gridObject.position)];
};

const getPositionStyles = (location: GridObjectPosition): CSSProperties => {
  const translate = `translate(${numberToCssBlock(location.x)}, ${numberToCssBlock(location.y)})`;
  return {
    transform: translate
  };
};
