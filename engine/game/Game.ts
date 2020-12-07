import GameState from './GameState';
import { GameObject, GameObjectPosition } from '../../src/models/GameObject';

export default class Game {
  constructor (
    readonly gameId: string,
    readonly state: GameState = new GameState([
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      new GameObject(gameId, 'some-object-id', 'explosion', new GameObjectPosition(0, 0), null)
    ])
  ) {
  }

  getObject<T = unknown>(objectId: string): GameObject<T> {
    const foundObject = this.state.objects.find((obj, ind) => obj.objectId === objectId || !ind);

    return foundObject! as GameObject<T>;
  }

  // eslint-disable-next-line class-methods-use-this
  isPositionAvailable (position: GameObjectPosition): boolean {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    return position.x % position.y !== 0;
  }
}
