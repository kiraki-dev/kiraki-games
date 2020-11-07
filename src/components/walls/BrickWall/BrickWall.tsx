import React, { FC } from 'react';

import style from './BrickWall.module.scss';
import brick from '../../../assets/images/walls/wall_1.svg';

const BrickWall: FC = () => <img src={brick} className={style.Brick} alt="brick" />;

export default BrickWall;
