import React from 'react';

const ToDo = ({ task, toggleComplet, removerItem }) => {
	return (
		<li className={`task${task.completed ? ' completed' : ''}`}>
			<span onClick={() => toggleComplet(task.id)}>
				{task.completed ? (
					<i className="fa fa-check-square-o" aria-hidden="true" />
				) : (
					<i className="fa fa-square-o" aria-hidden="true" />
				)}
			</span>
			<span>{task.title}</span>
			<span onClick={() => removerItem(task.id)}>X</span>
		</li>
	);
};

export default ToDo;
