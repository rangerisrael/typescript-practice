// test typescript for crud

//class component

interface Todo {
	id: number;
	title: string;
	description: string;
	completed: boolean;
}

export class CrudOperation {
	// define variable
	public todo: Todo[] = [];

	constructor(todo: Todo[]) {
		this.todo = todo;
	}

	getTodo() {
		this.todo.map((item) => {
			return {
				id: item.id,
				title: item.title,
				description: item.description,
				completed: item.completed,
			};
		});
	}

	getTodoById(id: number) {
		return this.todo.find((item) => item.id === id);
	}

	addTodo(todo: Todo) {
		this.todo.push(todo);
	}

	updateTodo(id: number, updateTodo: Partial<Todo>) {
		let getID = this.todo.find((item) => item.id === id);
		if (getID) {
			return Object.assign(getID, updateTodo);
		}
		return 'Update not executed';
	}

	updateTodoUsingFindIndex(id: number, updateTodoList: Partial<Todo>) {
		let findById = this.todo.findIndex((item) => item.id === id);
		if (findById !== -1) {
			const updated = { ...this.todo[findById], ...updateTodoList };
			this.todo[findById] = updated;

			return updated;
		}
		return 'Update not executed';
	}

	deleteTodo(id: number) {
		let getIndex = this.todo.findIndex((item) => item.id === id);

		if (getIndex !== -1) {
			return this.todo.splice(getIndex, 1);
		} else {
			return 'Not found todo';
		}
	}

	deleteTodoAnotherMethod(id: number) {
		return (this.todo = this.todo.filter((item) => item.id !== id));
	}

	filterTodoByQuery(searchQuery: unknown) {
		if (typeof searchQuery === 'string') {
			return this.todo.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase()));
		} else if (typeof searchQuery === 'boolean') {
			return this.todo.filter((item) => item.completed.valueOf() === searchQuery);
		}
		return 'No filter found';
	}

	filterByWildCard(wildcard: string) {
		const wildCardReplacement = wildcard.replace(/\*/g, '');
		return this.todo.filter((item) => item.title.toLowerCase().includes(wildCardReplacement));
	}

	filterDoubleWildCard(wildcard: string) {
		const wildCardReplacement = wildcard.replace(/\*/g, '.*');
		const ctvRegEx = new RegExp(wildCardReplacement, 'i');
		return this.todo.filter((item) => ctvRegEx.test(item.title));
	}

	countWildCardLength(strLength: string) {
		let counter = 0;
		for (const char of strLength) {
			if (char === '*') {
				counter++;
			}
		}

		return counter;
	}

	filterTodoList(searchQuery: string) {
		if (this.countWildCardLength(searchQuery) === 1) {
			return this.filterByWildCard(searchQuery);
		} else if (this.countWildCardLength(searchQuery) > 1) {
			return this.filterDoubleWildCard(searchQuery);
		} else {
			return this.filterTodoByQuery(searchQuery);
		}
	}
}

 export const arrTodo: Todo[] = [
	{
		id: 1,
		title: 'Todo 1',
		description: 'Hello my frist todo',
		completed: true,
	},
	{
		id: 2,
		title: 'Todo 2',
		description: 'Hello my second todo',
		completed: false,
	},
	{
		id: 3,
		title: 'Todo 3',
		description: 'Hello my third todo',
		completed: true,
	},
];

// const todo = new CrudOperation(arrTodo);
// todo.addTodo({
// 	id: 4,
// 	title: 'Todo 4',
// 	description: 'Hello todo list item',
// 	completed: true,
// });

// todo.updateTodoUsingFindIndex(4, { title: 'Hello moon', completed: true });

// todo.addTodo({
// 	id: 5,
// 	title: 'Todo 5',
// 	description: 'Hello todo list item',
// 	completed: false,
// });

// todo.deleteTodo(1);

// console.log(todo.filterTodoList('t*d*'));
