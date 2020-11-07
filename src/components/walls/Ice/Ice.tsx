import React, { FC } from 'react';

import style from './Ice.module.scss';
import ice from '../../../assets/images/walls/wall_4.svg';

const Ice: FC = () => <img src={ice} className={style.Ice} alt="ice" />;

export default Ice;
