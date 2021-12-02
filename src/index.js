import Task from './modules/task.js';
import Project from './modules/project.js';
import Note from './modules/note.js'
import TodoList from './modules/todoList.js';
import NoteList from './modules/noteList.js';
import {writeId, populateStorage} from './modules/helpers.js';


// TESTING - FOR LATER REMOVAL

const body = document.querySelector('body');
body.innerHTML = "testing";

console.log("testing");


let testTask = new Task('walk dog', 'December 8 2021', 'low');
let testNote = new Note('groceries', 'avocado, mango, milk, rice');
let testProject = new Project('sell house');


/*
testProject.tasks.push(testTask);
NoteList.add(testNote);
TodoList.addProject(testProject);
*/


// INITIATE LOCAL STORAGE

if(!localStorage.getItem('todoList')){
    console.log("local storage empty");
    populateStorage('todoList', TodoList.projects);
    populateStorage('noteList', NoteList.notes);
}

else{
    TodoList.projects = JSON.parse(localStorage.getItem('todoList'));
    NoteList.notes = JSON.parse(localStorage.getItem('noteList'));
}


//MAPPING WINDOW VARS TO SCRIPT VARS

window.TodoList = TodoList
window.testTask = testTask
window.testNote = testNote
window.writeId = writeId
window.NoteList = NoteList
window.Project = Project
window.Task = Task
window.Note = Note
window.populateStorage = populateStorage