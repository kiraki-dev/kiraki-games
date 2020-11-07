import React, { FC } from 'react';

import style from './ConcreteWall.module.scss';
import concrete from '../../../assets/images/walls/wall_2.svg';

const ConcreteWall: FC = () => <img src={concrete} className={style.Concrete} alt="concrete" />;

export default ConcreteWall;
