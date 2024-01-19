import React from 'react';
import { GameArea } from '../game-area/game-area';
import { linesWins } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import styles from './game.module.css';

export const Game = () => {
	const dispatch = useDispatch();
	const gameArea = useSelector((state) => state.gameArea);
	const playerXNext = useSelector((state) => state.playerXNext);

	const checkWinner = (cells) => {
		for (let i = 0; i < linesWins.length; i += 1) {
			const [a, b, c] = linesWins[i];
			if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) return cells[a];
		}
	};

	const winner = checkWinner(gameArea);

	const cellClick = (index) => {
		const checkGameArea = gameArea;
		if (winner || checkGameArea[index]) return; // есть победитель или ячейка занята (return)
		checkGameArea[index] = playerXNext ? 'X' : 'O'; // определение хода ()
		changePlayer(); //
	};

	const changePlayer = () => {
		dispatch({
			type: 'CHANGE_PLAYER',
		});
	};

	const startNewGame = () => {
		dispatch({
			type: 'RESET_GAME',
		});
	};

	return (
		<div className={styles.container}>
			<p className={styles.info}>
				{winner ? 'WINNER !!!! - ' + winner : 'ходит ' + (playerXNext ? 'X' : 'O')}
			</p>
			<GameArea cells={gameArea} click={cellClick} />
			<button className={styles.reset_btn} onClick={startNewGame}>
				New Game
			</button>
		</div>
	);
};
