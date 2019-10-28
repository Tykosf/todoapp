<<<<<<< HEAD
import React from 'react';

const TodoItem = ({ title, handleDelete, handleEdit }) => {
	return(
		<li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
			<h6>{title}</h6>
			<div className='todo-icon'>
				<span className='mx-2 text-success'>
					<i className='fa fa-paint-brush' onClick={handleEdit} />
				</span>
				<span className='mx-2 text-danger'>
					<i className='fa fa-trash' onClick={handleDelete} />
				</span>
			</div>
		</li>
	)
=======
import React,{Component} from 'react';

class TodoItem extends Component{
    
    render(){
        const { title, handleDelete, handleEdit } = this.props;
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success">
                        <i className="fa fa-paint-brush" onClick={handleEdit} />
                    </span>

                    <span className="mx-2 text-danger">
                        <i className="fa fa-trash" onClick={handleDelete} />
                    </span>
                </div>
            </li>
        )
    }
>>>>>>> d640257707603c0c674ca783e605d8f228ec7d59
}

export default TodoItem