import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
	return (
		<div className="todo-wrapper">
			<h3>My To-Do List</h3>
			<hr />
			<ul>
				{props.toDoListState.map((task) => (
					<ToDo
						key={task.id}
						task={task}
						toggleComplet={props.toggleComplet}
						removerItem={props.removerItem}
					/>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;
