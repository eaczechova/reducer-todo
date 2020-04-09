import React, { useState, useReducer } from 'react';
import { toDoListReducer, initialToDoListState } from './reducers/toDoReducer';

const ToDoList = () => {
	const [toDoListState, dispatch] = useReducer(
		toDoListReducer,
		initialToDoListState
	);

	const [toDoItem, setToDoItem] = useState({
		title: '',
	});

	const handleChanges = (e) => {
		setToDoItem({ title: e.target.value });
		console.log(toDoItem);
	};

	const toggleComplet = (id) => {
		dispatch({ type: 'TOGGLE_COMPLETE', id: id });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'HANDLE_SUBMIT', payload: toDoItem.title });
		setToDoItem({ title: '' });
	};
	console.log(toDoListState);
	console.log(initialToDoListState);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChanges}
					type="text"
					name="toDoItem"
					value={toDoItem.title}
				/>
				<button>Add</button>
			</form>

			<button onClick={() => dispatch({ type: 'FILTER_COMPLETED' })}>
				Clear Completed
			</button>

			<ul>
				{toDoListState.map((item) => {
					return (
						<li className={`task${item.completed ? ' completed' : ''}`}>
							<span onClick={() => toggleComplet(item.id)}>-</span>
							{item.title}
						</li>
					);
				})}
				{/* ) : (
					<p>List is empty</p>
				)} */}
			</ul>
		</div>
	);
};

export default ToDoList;
