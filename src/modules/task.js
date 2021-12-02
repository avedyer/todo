import {writeId} from './helpers.js';
import TodoList from './todoList.js';
import dateFormat, { masks } from "dateformat";
const now = new Date();

export default class Task {
    constructor (title, dueDate, priority) {
        this.id = writeId(TodoList.getTaskIds());
        this.title = title;
        this.dueDate = dateFormat(dueDate, "paddedShortDate");
        this.priority = priority;
    }
}