import { GameObject } from '../../models/GameObject';

export interface GridState {
  objects: GameObject<unknown>[];
}
