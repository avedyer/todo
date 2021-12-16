import Task from './modules/task.js';
import Project from './modules/project.js';
import Note from './modules/note.js'
import TodoList from './modules/todoList.js';
import NoteList from './modules/noteList.js';
import {writeId, populateStorage} from './modules/helpers.js';
import UI from './modules/UI.js';

import './styles.css';



// TESTING - FOR LATER REMOVAL

console.log("testing");

let testTask = new Task('walk dog', 'December 8 2021', 'low');
let testNote = new Note('groceries', 'avocado, mango, milk, rice');
let testProject = new Project('sell house');

//UI.testBody()

/*

testProject.tasks.push(testTask);
NoteList.add(testNote);
TodoList.addProject(testProject);
NoteList.add(new Note('me mow', "he's very small but big evil"));
NoteList.add(new Note('movies', 'Death of Stalin, Interstellar, Alien'))

*/

// INITIATE LOCAL STORAGE

if(!localStorage.getItem('todoList')){
    console.log("local storage empty");

    populateStorage('todoList', TodoList.projects);
    populateStorage('noteList', NoteList.notes);
}

else{
    TodoList.projects = JSON.parse(localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [];
    NoteList.notes = JSON.parse(localStorage.getItem('noteList')) ? JSON.parse(localStorage.getItem('noteList')) : [];
}

if (!TodoList.projects[0]) {
    console.log(TodoList.projects[0])
    console.log('initializing default project')
    const defaultProject = new Project('Home')
    TodoList.addProject(defaultProject);
    console.log(TodoList.projects[0])
}

UI.loadUI();

// MAPPING WINDOW VARS TO SCRIPT VARS

window.TodoList = TodoList
window.testTask = testTask
window.testNote = testNote
window.writeId = writeId
window.NoteList = NoteList
window.Project = Project
window.Task = Task
window.Note = Note
window.populateStorage = populateStorage
window.UI = UI