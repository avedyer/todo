import Task from './task.js';
import Project from './project.js';
import Note from './note.js'
import TodoList from './todoList.js';
import NoteList from './noteList.js';
import {populateStorage} from './helpers.js';
import todoList from './todoList.js';
import dateFormat, { masks } from "dateformat";

export default class UI {

    constructor() {
        this.currentProject = todoList.projects[0];
    }

    static body = document.querySelector('body')

    static testBody() {
        this.body.innerHTML = "testing UI"
    }

    static loadUI () {
        this.body.append(this.loadSidebar(), this.loadContainer('project', TodoList.projects[0]));
    }

    static loadSidebar() {
        // TODO nav sidebar with project list
        let sidebar = document.querySelector('.sidebar')

        if (!sidebar) {
            sidebar = document.createElement('div');
            sidebar.classList.add('sidebar');
        }

        else {
            sidebar.innerHTML = ''
        }

        const noteTab = document.createElement('div');
        noteTab.classList.add('tab');
        noteTab.innerHTML = "Notes"

        noteTab.onclick = () => {
            this.loadContainer('note', NoteList.notes);
        }

        const projectTab = document.createElement('div');
        projectTab.classList.add('tab');
        projectTab.innerHTML = "Projects";

        projectTab.onclick = () => {
            this.loadContainer('project', TodoList.projects[0])
        }

        const projectList = document.createElement('ul');

        for (const project of TodoList.projects) {
            const projectEl = document.createElement('li');
            
            const projectTitle = document.createElement('span');
            projectTitle.innerHTML = project.title;

            projectTitle.onclick = () => {
                this.loadContainer('project', project);
            }

            const editEl = document.createElement('button');
                editEl.innerHTML = 'edit';
                editEl.onclick = () => {
                    projectEl.parentElement.replaceChild(this.loadProjectForm(project), projectEl);
                }

            const delEl = document.createElement('button');
            delEl. innerHTML = 'Delete'
            delEl.onclick = () => {
                TodoList.removeProject(project);
                this.loadSidebar();
            }

            projectEl.append(projectTitle, editEl, delEl);
            
            projectList.append(projectEl);
        }

        const addProjectButton = document.createElement('button');
            addProjectButton.innerHTML = '+';
            addProjectButton.onclick = () => {
                sidebar.append(this.loadProjectForm());
                
            } 

        sidebar.append(noteTab, projectTab, projectList, addProjectButton);

        return sidebar
    }

    static loadContainer(type, list) {
        // TODO - Container for task/note lists

        let listContainer = document.querySelector('.listContainer');

        if (!listContainer) {
            listContainer = document.createElement('div');
            listContainer.classList.add('listContainer');

            listContainer.append(this.loadProject(list));
        }

        else {
            listContainer.innerHTML = '';

            switch (type) {
                case 'project':
                    listContainer.append(this.loadProject(list));
                    break
                case 'note':
                    listContainer.append(this.loadNoteList(NoteList.notes));
            }

        }

        return listContainer
    }

    static loadProject (project) {
        // TODO - Load in todo items
        if (!project) {
            let project = this.currentProject;
        }

        let projectContainer = document.createElement('div');
        projectContainer.classList.add('projectContainer');

        const projectHeader = document.createElement('h2');
        projectHeader.innerHTML = project.title;

        const taskList = document.createElement('ul')
        taskList.classList.add('taskList')

        for (const task of project.tasks) {
            
            taskList.append(this.loadTask(task));
        }

        const newTaskButton = document.createElement('button');
        newTaskButton.innerHTML = '+'

        newTaskButton.onclick = () => {projectContainer.append(this.loadTaskForm(project))};

        projectContainer.append(projectHeader, taskList, newTaskButton);

        this.currentProject = project;

        return projectContainer
    }
    
    static loadNoteList() {
        // TODO - Load in notes
        // seperate pinned / not pinned

        let noteContainer = document.querySelector('.noteContainer');

        if(noteContainer) {
            noteContainer.innerHTML = '';
        }

        else {
            noteContainer = document.createElement('div');
            noteContainer.classList.add('noteContainer');
        }

        for (const note of NoteList.notes) {
            noteContainer.append(this.loadNote(note));
        }

        const newNoteButton = document.createElement('button');
            newNoteButton.innerHTML = '+'
            newNoteButton.onclick = () => {noteContainer.append(this.loadNoteForm())};

        noteContainer.append(newNoteButton);

        return noteContainer
    }

    static loadNote (note) {
        const noteEl = document.createElement('div');
            noteEl.classList.add('note');

            const noteTitle = document.createElement('h3');
            noteTitle.classList.add("noteTitle");
            noteTitle.innerHTML = note.title;

            const noteContent = document.createElement('p');
            noteContent.classList.add('noteContent');
            noteContent.innerHTML = note.content;

            const editEl = document.createElement('button');
                editEl.innerHTML = 'Edit';
                editEl.onclick = () => {
                    noteEl.parentElement.replaceChild(this.loadNoteForm(note), noteEl);
                }

            const delEl = document.createElement('button');
                delEl. innerHTML = 'Delete'
                delEl.onclick = () => {
                    NoteList.remove(note);
                    this.loadNoteList();
            }

            noteEl.append(noteTitle, noteContent, editEl, delEl);

            return noteEl
    }

    static loadTask (task) {
        const taskEl = document.createElement('li');
        taskEl.classList.add('task');

        const checkEl = document.createElement('input');
            if (task.complete) {
                checkEl.setAttribute('checked', true);
            }
            checkEl.setAttribute('type', 'checkbox');
            checkEl.onclick = () => {TodoList.toggleCompletion(task)};

        const titleEl = document.createElement('span');
        titleEl.innerHTML = task.title;

        const dateEl = document.createElement('span');
        dateEl.innerHTML = task.dueDate;

        const editEl = document.createElement('button');
            editEl.innerHTML = 'Edit';
            editEl.onclick = () => {
                taskEl.parentElement.replaceChild(this.loadTaskForm(this.currentProject, task), taskEl);
                
            }

        const delEl = document.createElement('button');
        delEl. innerHTML = 'Delete'
        delEl.onclick = () => {
            todoList.removeTask(task);
            this.loadContainer('project', this.currentProject);
        }

        taskEl.append(checkEl, titleEl, dateEl, editEl, delEl);

        return taskEl
    }

    static focusNote() {
        // TODO note pop out
    }

    static loadTaskForm (project, task) {

        const taskForm = document.createElement('form');
            taskForm.setAttribute('onsubmit', 'return false');
            taskForm.classList.add('taskForm');

        const titleInput = document.createElement('input')
            titleInput.setAttribute('type', 'text');
            titleInput.setAttribute('placeholder', 'Title');
            titleInput.setAttribute('required', true);

        const dateLabel = document.createElement('label');
            dateLabel.setAttribute('for', 'dueDate');
            dateLabel.innerHTML = 'Due Date'

        const dateInput = document.createElement('input');
            dateInput.setAttribute('type', 'date');
            dateInput.setAttribute('name', 'dueDate');

        if (task) {
            titleInput.value = task.title;
            dateInput.value = task.dueDate;
        }

        taskForm.append(titleInput, dateLabel, dateInput);

        const priorityVals = ['Low', 'Medium', 'High'];

        const prioritySelector = document.createElement('div');

        for (let i=0; i<priorityVals.length; ++i) {

            const priorityLabel = document.createElement('label');
            priorityLabel.setAttribute('for', priorityVals[i]);
            priorityLabel.innerHTML = priorityVals[i]

            const priorityOpt = document.createElement('input');
            priorityOpt.setAttribute('type', 'radio');
            priorityOpt.name = 'priority';
            priorityOpt.value = priorityVals[i]
            if (task && task.priority.toLowerCase() === priorityVals[i].toLowerCase()) {
                priorityOpt.setAttribute('checked', true)
            }

            else if (!task && i === 1) {
                priorityOpt.setAttribute('checked', true);
            }

            prioritySelector.append(priorityOpt, priorityLabel);
        }

        const submitButton = document.createElement('button');
            submitButton.innerHTML = 'Submit';

        const cancelButton = document.createElement('button');
            cancelButton.innerHTML = 'Cancel';
            cancelButton.onclick = () => {
                if (task) {
                    taskForm.parentElement.replaceChild(this.loadTask(task), taskForm);
                }
                else {
                    this.deleteElement(taskForm)
                }
            };

        taskForm.append(titleInput, dateLabel, dateInput, prioritySelector, submitButton, cancelButton);

        taskForm.onsubmit = () => {   

            let newTask = new Task(titleInput.value, dateInput.value, document.querySelector('input[name="priority"]:checked').value);

            if (task) {
                newTask.id = task.id;
                TodoList.replaceTask(newTask, task, project);
            }
            else {
                TodoList.addTask(project, newTask);
            }
            this.loadContainer('project', project);
        };

        return taskForm
    }

    static loadProjectForm(project) {

        const projectForm = document.createElement('form');
            projectForm.setAttribute('onsubmit', 'return false');

        const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');

        const submitButton = document.createElement('button');
            submitButton.innerHTML = 'Submit';

        const cancelButton = document.createElement('button');
            cancelButton.innerHTML = 'Cancel';
            cancelButton.onclick = () => {this.deleteElement(projectForm)};

        if (project){
            titleInput.value = project.title;
        }

        projectForm.append(titleInput, submitButton, cancelButton);

        projectForm.onsubmit = () => {

            let newProject = new Project(titleInput.value);

            if (project) {
                newProject.id = project.id;
                TodoList.replaceProject(newProject, project);
            }

            else {
                TodoList.addProject(newProject);
            }

            this.loadSidebar();
            this.loadContainer('project', newProject);

            return false
        }

        return projectForm
    }

    static loadNoteForm (note) {
        
        const noteForm = document.createElement('form');
            noteForm.setAttribute('onsubmit', 'return false');

        const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');

        const contentInput = document.createElement('textarea');
            contentInput.setAttribute('rows', '8');
            contentInput.setAttribute('cols', '32');  

        const submitButton = document.createElement('button');
            submitButton.innerHTML = 'Submit';

        const cancelButton = document.createElement('button');
            cancelButton.innerHTML = 'Cancel';
            cancelButton.onclick = () => {this.deleteElement(noteForm)};

        if (note) {
            titleInput.value = note.title;
            contentInput.value = note.content;
        }
        
        noteForm.append(titleInput, contentInput, submitButton, cancelButton);

        noteForm.onsubmit = () => {
            let newNote = new Note (titleInput.value, contentInput.value);

            if (note) {
                newNote.id = note.id;
                newNote.pinned = note.pinned;

                NoteList.replace(newNote, note);
            }
            
            else {
                NoteList.add(newNote);
            }
            this.loadContainer('note');
        }

        return noteForm
    }

    static deleteElement(element) {
        element.parentElement.removeChild(element);
    }
}