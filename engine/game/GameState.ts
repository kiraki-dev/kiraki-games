import { GameObject } from '../../src/models/GameObject';

export default class GameState {
  constructor (readonly objects: GameObject<unknown>[]) {}
}
