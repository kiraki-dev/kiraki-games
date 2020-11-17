import { GridState } from '../Grid/Grid.state';

export interface BattleCityState {
  isPaused: boolean;
  grid: GridState;
  upcomingEnemies: number;
}
