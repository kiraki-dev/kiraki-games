import { GameObject } from './GameObject';

export interface GerbState {
  isDestroyed: boolean;
}

export class GerbObject extends GameObject<GerbState> {
}
