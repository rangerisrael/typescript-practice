"use strict";
exports.__esModule = true;
var todo_1 = require("./todo"); // Adjust the path as needed
var getTodo = new todo_1.CrudOperation(todo_1.arrTodo);
var todoList = document.getElementById('todoList');
var todo = getTodo.todo;
function onEditFunc() {
    alert('Edit button clicked');
}
todo.map(function (item) {
    var el = "<tr><td>".concat(item.title, "</td>\n\t<td>").concat(item.description, "</td>\n\t<td><input type='checkbox' checked='").concat(item.completed, "'/></td>\n\t<td><button class='bg-white text-black hover:bg-teal-500  font-semibold px-5 py-2 border-gray-400 rounded shadow' type='button' onclick='onEditFunc();'>Edit</button></td>\n\t<td><button type='button' class='bg-white text-black hover:bg-teal-500  font-semibold px-5 py-2 border-gray-400 rounded shadow'>Delete</button></td></tr>");
    todoList.innerHTML += el;
});
