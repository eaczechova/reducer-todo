import React, { useState, useReducer } from 'react';
import { toDoListReducer, initialToDoListState } from './reducers/toDoReducer';
import ToDoForm from './components/ToDoForm';
import ItemsList from './components/ItemsList';
import ClearCompleted from './components/ClearCompleted';

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

	const removerItem = (id) => {
		dispatch({ type: 'REMOVE_ITEM', id: id });
	};

	return (
		<main>
			<ToDoForm
				handleSubmit={handleSubmit}
				handleChanges={handleChanges}
				toDoItem={toDoItem}
			/>
			<ItemsList
				toggleComplet={toggleComplet}
				toDoListState={toDoListState}
				removerItem={removerItem}
			/>
			<ClearCompleted dispatch={dispatch} />
		</main>
	);
};

export default ToDoList;
