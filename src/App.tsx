import React, { FC } from 'react';
import styles from './App.module.scss';
import BattleCity from './components/BattleCity/BattleCity';

const App: FC = () => (
  <div className={styles.App}>
    <BattleCity />
  </div>
);

export default App;
