export const initialToDoListState = [
	{
		title: 'Learn about reducers',
		completed: false,
		id: Date.now(),
	},
];

export const toDoListReducer = (state, action) => {
	switch (action.type) {
		case 'HANDLE_SUBMIT':
			return [
				...state,
				{ title: action.payload, completed: false, id: Date.now() },
			];
		case 'TOGGLE_COMPLETE':
			return state.map((item) =>
				item.id === action.id
					? {
							...item,
							completed: !item.completed,
					  }
					: item
			);
		case 'FILTER_COMPLETED':
			return state.filter((item) => !item.completed);
		case 'REMOVE_ITEM':
			return state.filter((item) => item.id !== action.id);
		default:
			return state;
	}
};
