import React from 'react';

const ToDoForm = (props) => {
	return (
		<div className="form-wrapper">
			<form onSubmit={props.handleSubmit}>
				<input
					onChange={props.handleChanges}
					type="text"
					name="toDoItem"
					value={props.toDoItem.title}
				/>
				<button>Add</button>
			</form>
		</div>
	);
};

export default ToDoForm;
