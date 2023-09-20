"use strict";
// test typescript for crud
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.arrTodo = exports.CrudOperation = void 0;
var CrudOperation = /** @class */ (function () {
    function CrudOperation(todo) {
        // define variable
        this.todo = [];
        this.todo = todo;
    }
    CrudOperation.prototype.getTodo = function () {
        this.todo.map(function (item) {
            return {
                id: item.id,
                title: item.title,
                description: item.description,
                completed: item.completed
            };
        });
    };
    CrudOperation.prototype.getTodoById = function (id) {
        return this.todo.find(function (item) { return item.id === id; });
    };
    CrudOperation.prototype.addTodo = function (todo) {
        this.todo.push(todo);
    };
    CrudOperation.prototype.updateTodo = function (id, updateTodo) {
        var getID = this.todo.find(function (item) { return item.id === id; });
        if (getID) {
            return Object.assign(getID, updateTodo);
        }
        return 'Update not executed';
    };
    CrudOperation.prototype.updateTodoUsingFindIndex = function (id, updateTodoList) {
        var findById = this.todo.findIndex(function (item) { return item.id === id; });
        if (findById !== -1) {
            var updated = __assign(__assign({}, this.todo[findById]), updateTodoList);
            this.todo[findById] = updated;
            return updated;
        }
        return 'Update not executed';
    };
    CrudOperation.prototype.deleteTodo = function (id) {
        var getIndex = this.todo.findIndex(function (item) { return item.id === id; });
        if (getIndex !== -1) {
            return this.todo.splice(getIndex, 1);
        }
        else {
            return 'Not found todo';
        }
    };
    CrudOperation.prototype.deleteTodoAnotherMethod = function (id) {
        return (this.todo = this.todo.filter(function (item) { return item.id !== id; }));
    };
    CrudOperation.prototype.filterTodoByQuery = function (searchQuery) {
        if (typeof searchQuery === 'string') {
            return this.todo.filter(function (item) { return item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase()); });
        }
        else if (typeof searchQuery === 'boolean') {
            return this.todo.filter(function (item) { return item.completed.valueOf() === searchQuery; });
        }
        return 'No filter found';
    };
    CrudOperation.prototype.filterByWildCard = function (wildcard) {
        var wildCardReplacement = wildcard.replace(/\*/g, '');
        return this.todo.filter(function (item) { return item.title.toLowerCase().includes(wildCardReplacement); });
    };
    CrudOperation.prototype.filterDoubleWildCard = function (wildcard) {
        var wildCardReplacement = wildcard.replace(/\*/g, '.*');
        var ctvRegEx = new RegExp(wildCardReplacement, 'i');
        return this.todo.filter(function (item) { return ctvRegEx.test(item.title); });
    };
    CrudOperation.prototype.countWildCardLength = function (strLength) {
        var counter = 0;
        for (var _i = 0, strLength_1 = strLength; _i < strLength_1.length; _i++) {
            var char = strLength_1[_i];
            if (char === '*') {
                counter++;
            }
        }
        return counter;
    };
    CrudOperation.prototype.filterTodoList = function (searchQuery) {
        if (this.countWildCardLength(searchQuery) === 1) {
            return this.filterByWildCard(searchQuery);
        }
        else if (this.countWildCardLength(searchQuery) > 1) {
            return this.filterDoubleWildCard(searchQuery);
        }
        else {
            return this.filterTodoByQuery(searchQuery);
        }
    };
    return CrudOperation;
}());
exports.CrudOperation = CrudOperation;
exports.arrTodo = [
    {
        id: 1,
        title: 'Todo 1',
        description: 'Hello my frist todo',
        completed: true
    },
    {
        id: 2,
        title: 'Todo 2',
        description: 'Hello my second todo',
        completed: false
    },
    {
        id: 3,
        title: 'Todo 3',
        description: 'Hello my third todo',
        completed: true
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
