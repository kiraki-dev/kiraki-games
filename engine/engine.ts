import { EngineCommand, EngineCommandHandler, EngineCommandName } from './EngineCommand';
import gameCommandHandler from './game/gameCommandHandler';

const ENGINE_COMMAND_HANDLERS: Partial<Record<EngineCommandName, EngineCommandHandler>> = {};

const processEngineCommand = (command: EngineCommand): void => {
  const handler = ENGINE_COMMAND_HANDLERS[command.commandName] ?? gameCommandHandler;

  if (!(handler as unknown)) {
    throw new Error(`Invalid Engine command ${command.commandName}`);
  }

  const event = handler(command);

  // todo: send command
  // eslint-disable-next-line no-console
  console.log(event);
};

export default processEngineCommand;
