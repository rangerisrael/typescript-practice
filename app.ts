import { arrTodo, CrudOperation } from './todo'; // Adjust the path as needed

const getTodo = new CrudOperation(arrTodo);

const todoList = document.getElementById('todoList') as HTMLElement;

const { todo } = getTodo;



function onEditFunc() {
	alert('Edit button clicked');
}

todo.map((item) => {
	const el = `<tr><td>${item.title}</td>
	<td>${item.description}</td>
	<td><input type='checkbox' checked='${item.completed}'/></td>
	<td><button class='bg-white text-black hover:bg-teal-500  font-semibold px-5 py-2 border-gray-400 rounded shadow' type='button' onclick='onEditFunc();'>Edit</button></td>
	<td><button type='button' class='bg-white text-black hover:bg-teal-500  font-semibold px-5 py-2 border-gray-400 rounded shadow'>Delete</button></td></tr>`;

	todoList.innerHTML += el;
});


