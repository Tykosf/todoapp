import React from 'react';

const TodoInput = ({  item, handleChange, handleSubmit, editItem }) => {
	return (
		<div className='card card-body my-3'>
			<form onSubmit={handleSubmit}>
				<div className='input-group'>
					<div className='input-group-prepend'>
						<div className='input-group-text bg-primary text-white'>
							<i className='fas fa-tasks' />
						</div>
					</div>
					<input 
						type='text' 
						className='form-control text-capitalize'
						placeholder='add your task'
						value={item}
						onChange={handleChange}
					/>
				</div>
				<button type='submit'
					className={editItem ? 
					'btn btn-block btn-success mt-3 text-capitalize'
					: 'btn btn-block btn-primary mt-3 text-capitalize'}
				>
				{editItem ? 'edit item' : 'add item'}
				</button>
			</form>
		</div>
	)

export default TodoInput
