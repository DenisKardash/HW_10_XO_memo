import { Component } from 'react';

export class Cell extends Component {
	render() {
		const props = this.props;
		return (
			<button
				className="cell-flex text-6xl border-2 rounded-lg 
					border-gray-950 bg-white hover:bg-orange-50"
				onClick={props.onClick}
			>
				{props.value}
			</button>
		);
	}
}
