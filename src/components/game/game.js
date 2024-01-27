import { Component } from 'react';
import { connect } from 'react-redux';

import { GameArea } from '../game-area/game-area';
import { checkWinner } from '../constants';

export class GameContiner extends Component {
	render() {
		const { changePlayer, startNewGame, gameArea, playerXNext } = this.props;

		const winner = checkWinner(gameArea);

		const cellClick = (index) => {
			const checkGameArea = gameArea;
			if (winner || checkGameArea[index]) return;
			checkGameArea[index] = playerXNext ? 'X' : 'O';
			changePlayer(); //
		};

		return (
			<div
				className="cont-flex border-4 rounded-xl
					bg-neutral-900 border-orange-400"
			>
				<p className="mb-5 text-orange-400 text-xl">
					{winner ? 'WINNER !!!! - ' + winner : 'ходит - ' + (playerXNext ? 'X' : 'O')}
				</p>
				<GameArea cells={gameArea} click={cellClick} />
				<button
					className=" w-40 h-10 m-5 border-2	border-orange-400 
					text-orange-400 hover:bg-gray-500 rounded-md"
					onClick={startNewGame}
				>
					New Game
				</button>
			</div>
		);
	}
}

export const mapDispathToProps = (dispatch) => ({
	changePlayer: () =>
		dispatch({
			type: 'CHANGE_PLAYER',
		}),

	startNewGame: () =>
		dispatch({
			type: 'RESET_GAME',
		}),
});

export const mapStateToProps = (state) => ({
	gameArea: state.gameArea,
	playerXNext: state.playerXNext,
});

export const Game = connect(mapStateToProps, mapDispathToProps)(GameContiner);
