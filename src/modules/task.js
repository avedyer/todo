import newId from './helpers.js'
import TodoList from './todoList.js';

export default class Task {
    constructor (title, dueDate, priority) {
        this.id = newId(TodoList.getTaskIds());
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}