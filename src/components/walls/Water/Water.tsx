import React, { FC } from 'react';

import style from './Water.module.scss';
import waterSvg from '../../../assets/images/walls/wall_5.svg';

const Water: FC = () => <img src={waterSvg} className={style.Water} alt="water" />;

export default Water;
