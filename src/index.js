import Task from './modules/task.js';
import Project from './modules/project.js';
import Note from './modules/note.js'
import TodoList from './modules/todoList.js';
import NoteList from './modules/noteList.js';
import writeId from './modules/helpers.js'


const body = document.querySelector('body');
body.innerHTML = "testing";

console.log("testing");

let testTask = new Task('walk dog', 'december 8th 2021', 'low');
let testNote = new Note('groceries', 'avocado, mango, milk, rice');
let testProject = new Project('sell house', '06/02/2022');

testProject.tasks.push(testTask);

NoteList.add(testNote);

TodoList.addProject(testProject);

if(!localStorage.getItem('todoList')){
    populateStorage();
}

else{
    TodoList.projects = JSON.parse(localStorage.getItem('todoList'));
    NoteList.notes = JSON.parse(localStorage.getItem('noteList'));
}

function populateStorage(){
    console.log("populating...")
    localStorage.setItem('todoList', JSON.stringify(TodoList.projects));
    localStorage.setItem('noteList', JSON.stringify(NoteList.notes));
}

window.TodoList = TodoList
window.testTask = testTask
window.writeId = writeId
window.NoteList = NoteList
window.Project = Project