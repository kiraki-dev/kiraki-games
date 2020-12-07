import { EngineCommand, EngineCommandName, EngineEvent, EngineEventName } from '../EngineCommand';

export type GameCommandName = Extract<EngineCommandName, 'go-left'>;
export type GameEventName = Extract<EngineEventName, 'went-left'>;

export class GameCommand extends EngineCommand {
  constructor (
    commandName: GameCommandName,
    readonly gameId: string
  ) {
    super(commandName);
  }
}

export class GameObjectCommand extends GameCommand {
  constructor (
    commandName: GameCommandName,
    gameId: string,
    readonly objectId: string
  ) {
    super(commandName, gameId);
  }
}

export class GameEvent extends EngineEvent {
  constructor (
    eventName: GameEventName,
    readonly gameId: string
  ) {
    super(eventName);
  }
}

export class GameObjectEvent extends GameEvent {
  constructor (
    eventName: GameEventName,
    gameId: string,
    readonly objectId: string
  ) {
    super(eventName, gameId);
  }
}
