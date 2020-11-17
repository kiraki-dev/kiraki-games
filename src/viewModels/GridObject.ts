export interface GerbState {
  isDestroyed: boolean;
}

export type GridObjectState = GerbState | undefined;

export type GridObjectType = 'gerb' | 'explosion';

export class GridObjectPosition {
  constructor (public x: number, public y: number) {}
}

export class GridObject {
  constructor (
    readonly id: string,
    readonly type: GridObjectType,
    readonly position: GridObjectPosition,
    readonly state?: GridObjectState
  ) {}
}
