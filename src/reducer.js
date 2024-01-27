export const initialState = {
	gameArea: Array(9).fill(null),
	playerXNext: true,
};

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'RESET_GAME':
			return {
				...state,
				gameArea: Array(9).fill(null),
			};

		case 'CHANGE_PLAYER':
			return {
				...state,
				playerXNext: !state.playerXNext,
			};

		default:
			return state;
	}
};
