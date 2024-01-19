import React from 'react';
import styles from './game-area.module.css';

import { Cell } from '../cell/cell';

export const GameArea = ({ cells, click }) => {
	return (
		<div className={styles.gameArea}>
			{cells.map((cell, i) => (
				<Cell key={i} value={cell} onClick={() => click(i)} />
			))}
		</div>
	);
};
 