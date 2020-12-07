import { GoLeftCommand } from './GoLeftCommand';
import { WentLeftEvent } from './GoLeftEvent';
import resolveGame from '../../helpers/resolveGame';
import getNewPosition from '../../helpers/getNewPosition';

const goLeftCommandHandler = (command: GoLeftCommand): WentLeftEvent => {
  const game = resolveGame(command.gameId);
  const object = game.getObject(command.objectId);

  const positionToGo = getNewPosition('left', object.position);

  const canMove = game.isPositionAvailable(positionToGo);

  // todo: save object state change with game

  return new WentLeftEvent(
    command.gameId,
    object.objectId,
    canMove ? positionToGo : null
  );
};

export default goLeftCommandHandler;
