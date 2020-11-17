import { GerbProps } from '../Gerb/Gerb';

export type GridObjectType = 'gerb' | 'explosion';

export class GridObjectPosition {
  constructor (public x: number, public y: number) {}
}

export type GridObjectProps = GerbProps | undefined;

export interface GridObject {
  id: string;
  type: GridObjectType;
  props?: GridObjectProps;
  position: GridObjectPosition;
}

export interface GridState {
  gridObjects: GridObject[];
}
