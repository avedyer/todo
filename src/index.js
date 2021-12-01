import Task from './modules/task.js';
import Project from './modules/project.js';
import Note from './modules/note.js'
import TodoList from './modules/todoList.js';
import NoteList from './modules/noteList.js';
import writeId from './modules/helpers.js'
import noteList from './modules/noteList.js';


const body = document.querySelector('body');
body.innerHTML = "testing";

console.log("testing");

let testTask = new Task('walk dog', 'december 8th 2021', 'low');
let testNote = new Note('groceries', 'avocado, mango, milk, rice');
let testProject = new Project('sell house', '06/02/2022');

testProject.tasks.push(testTask);

NoteList.add(testNote);

TodoList.addProject(testProject);

window.TodoList = TodoList
window.testTask = testTask
window.writeId = writeId
window.NoteList = NoteList
window.Project = Project