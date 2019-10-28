import { h, Preact } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

const ToDo = () => {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState('');

	return (<div class={style.todo}>
		<h1 class="title">ToDo</h1>

		{todos.map((item, i) => {
			return (<ul class="todoList">
				<li key={i}>{item}</li>
			</ul>)
		})}

		<input type="text"
		placeholder="Add a todo item here..."
		class="todoInput"
		onChange={(e) => {setText(e.target.value)}}/>

		<button
			type="button"
			class="updateBtn"
			onClick={() => {
			const newTodos = todos.concat(text);
			setTodos(newTodos);
		}}>Add Task</button>
	</div>
	)
};

export default ToDo;