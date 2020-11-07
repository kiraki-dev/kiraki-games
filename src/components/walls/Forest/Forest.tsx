import React, { FC } from 'react';

import style from './Forest.module.scss';
import forest from '../../../assets/images/walls/wall_3.svg';

const Forest: FC = () => <img src={forest} className={style.Forest} alt="forest" />;

export default Forest;
