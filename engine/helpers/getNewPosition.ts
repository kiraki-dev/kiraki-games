import { GameObjectPosition } from '../../src/models/GameObject';

const STEP_SIZE = 1;

type DirectionToGo = 'left' | 'right' | 'top' | 'bottom';

const GET_POSITION_FOR_DIRECTION_TO_GO: Record<DirectionToGo, (obj: GameObjectPosition) => GameObjectPosition> = {
  left: (pos) => new GameObjectPosition(pos.x - STEP_SIZE, pos.y),
  right: (pos) => new GameObjectPosition(pos.x + STEP_SIZE, pos.y),
  top: (pos) => new GameObjectPosition(pos.x, pos.y - STEP_SIZE),
  bottom: (pos) => new GameObjectPosition(pos.x, pos.y + STEP_SIZE)
};

const getNewPosition = (direction: DirectionToGo, oldPosition: GameObjectPosition): GameObjectPosition => {
  const { [direction]: getPositionForDirection } = GET_POSITION_FOR_DIRECTION_TO_GO;

  return getPositionForDirection(oldPosition);
};

export default getNewPosition;
