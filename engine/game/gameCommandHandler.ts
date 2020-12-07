import { GameCommandName } from './GameCommand';
import { GoLeftCommand, goLeftCommandName } from '../commands/goLeft/GoLeftCommand';
import goLeftCommandHandler from '../commands/goLeft/goLeftCommandHandler';
import { EngineCommand, EngineCommandHandler, EngineEvent } from '../EngineCommand';
import { WentLeftEvent } from '../commands/goLeft/GoLeftEvent';

type GameCommandHandlerInput = GoLeftCommand;
type GameEventHandlerOutput = WentLeftEvent;
type GameCommandHandler = (command: GameCommandHandlerInput) => GameEventHandlerOutput;

const GAME_COMMAND_HANDLERS: Record<GameCommandName, GameCommandHandler> = {
  [goLeftCommandName]: goLeftCommandHandler
};

const gameCommandHandler: EngineCommandHandler = (command: EngineCommand) => {
  const handler = GAME_COMMAND_HANDLERS[command.commandName];

  if (!(handler as unknown)) {
    throw new Error(`Invalid Engine command ${command.commandName}`);
  }

  return <EngineEvent>handler(<GameCommandHandlerInput>command);
};

export default gameCommandHandler;
