import { GameEventName, GameObjectEvent } from '../../game/GameCommand';
import { GameObjectPosition } from '../../../src/models/GameObject';

export const wentLeftEventName: GameEventName = 'went-left';

export class WentLeftEvent extends GameObjectEvent {
  constructor (
    gameId: string,
    objectId: string,
    readonly position: GameObjectPosition | null
  ) {
    super(wentLeftEventName, gameId, objectId);
  }
}
