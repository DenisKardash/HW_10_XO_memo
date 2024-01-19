import React from 'react';
import styles from  './cell.module.css';

export const Cell = (props) => {
	return (
		<button className={styles.cell} onClick={props.onClick}>
			{props.value}
		</button>
	);
};
