export type GameObjectType = 'gerb' | 'explosion';

export class GameObjectPosition {
  constructor (readonly x: number, readonly y: number) {}
}

export class GameObject<T> {
  constructor (
    readonly gameId: string,
    readonly objectId: string,
    readonly objectType: GameObjectType,
    readonly position: GameObjectPosition,
    readonly state: T
  ) {}
}
