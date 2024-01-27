import { Component } from 'react';
import { Cell } from '../cell/cell';

export class GameArea extends Component {
	render() {
		const { click, cells } = this.props;

		return (
			<div className="gameArea-flex bg-orange-400 w-80 h-80">
				{cells.map((cell, i) => (
					<Cell key={i} value={cell} onClick={() => click(i)} />
				))}
			</div>
		);
	}
}
