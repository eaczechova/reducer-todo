import React from 'react';

const ClearCompleted = ({ dispatch }) => {
	return (
		<div className="form-wrapper">
			<button
				className="clean"
				onClick={() => dispatch({ type: 'FILTER_COMPLETED' })}
			>
				Clear Completed
			</button>
		</div>
	);
};

export default ClearCompleted;
