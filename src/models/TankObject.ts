import { GameObject } from './GameObject';

export declare type TankDirection = 'up' | 'down' | 'left' | 'right';
export declare type TankColor = 'yellow' | 'white' | 'green' | 'red';
export declare type TankType = 'tank-type-1' | 'tank-type-2' | 'tank-type-3'
|'tank-type-4' | 'tank-type-5' | 'tank-type-6' | 'tank-type-7' | 'tank-type-8';

export class TankState {
  constructor (
    readonly color: TankColor,
    readonly type: TankType,
    readonly direction: TankDirection,
    readonly isMoving = false
  ) { }
}

export class TankObject extends GameObject<TankState> { }
