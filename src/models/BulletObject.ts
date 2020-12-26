import { GameObject } from './GameObject';

type BulletDirections = 'up' | 'right' | 'down' | 'left';

export interface BulletState {
  direction: BulletDirections;
}

export class BulletObject extends GameObject<BulletState> {
}
