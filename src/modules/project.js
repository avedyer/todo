import newId from './helpers.js'
import TodoList from './todoList.js';

export default class Project {
    constructor (title, dueDate) {
        this.id = newId(TodoList.getProjectIds());
        this. title = title;
        this.dueDate = dueDate;
        this.tasks = [];
    }
}