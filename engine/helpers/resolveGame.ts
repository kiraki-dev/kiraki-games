import Game from '../game/Game';

// todo: fix this
let currentGame = new Game('');

const resolveGame = (gameId: string): Game => {
  currentGame = new Game(gameId, currentGame.state);
  return currentGame;
};

export default resolveGame;
