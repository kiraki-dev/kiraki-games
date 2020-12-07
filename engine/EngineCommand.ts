export type EngineCommandName = 'go-left';
export type EngineEventName = 'went-left';

export class EngineCommand {
  constructor (
    readonly commandName: EngineCommandName
  ) {}
}

export class EngineEvent {
  constructor (
    readonly eventName: EngineEventName
  ) {}
}

export type EngineCommandHandler = (command: EngineCommand) => EngineEvent;
