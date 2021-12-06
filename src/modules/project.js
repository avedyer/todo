import {writeId} from './helpers.js';
import TodoList from './todoList.js';

export default class Project {
    constructor (title) {
        this.id = writeId(TodoList.getProjectIds());
        this. title = title;
        this.tasks = [];
    }
}