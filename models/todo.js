const db = require('../config/database');

exports.getAllTodos = function(callback) {
    db.query('SELECT * FROM todos', callback);
};

exports.getTodoById = function(id, callback) {
	db.query('SELECT * FROM todos WHERE id = ?', [id], callback);
};

exports.createTodo = function(todo, callback) {
	db.query('INSERT INTO todos SET ?', todo, callback);
};

exports.updateTodo = function(id, todo, callback) {
	db.query('UPDATE todos SET ? WHERE id = ?', [updateTodo, id], callback);
};

exports.deleteTodo = function(id, callback) {
	db.query('DELETE FROM todos WHERE id = ?', [id], callback);
};