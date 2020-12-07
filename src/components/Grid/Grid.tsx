import React, { FC, useEffect, useRef } from 'react';
import styles from './Grid.module.scss';
import { GridState } from './Grid.state';
import GridObjectView from './GridObjectView';

const GRID_SIZE = 32;
const GRID_SIZE_VAR_NAME = '--grid-size';

export interface GridProps {
  state: GridState;
}

const Grid: FC<GridProps> = (props: GridProps) => {
  const gridElRef = useRef<HTMLDivElement>(null);

  useEffect(() => setGridSizeToElement(gridElRef.current), []);

  return (
    <div ref={gridElRef} className={styles.Grid}>
      {
        props.state.objects.map((obj) => (
          <GridObjectView key={obj.objectId} {...obj} />
        ))
      }
    </div>
  );
};

export default Grid;

const setGridSizeToElement = (elem: HTMLDivElement | null): void => {
  elem?.style.setProperty(GRID_SIZE_VAR_NAME, GRID_SIZE.toString());
};
