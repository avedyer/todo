import Task from './task.js';
import Project from './project.js';
import Note from './note.js'
import TodoList from './todoList.js';
import NoteList from './noteList.js';
import {populateStorage} from './helpers.js';
import todoList from './todoList.js';

export default class UI {

    static body = document.querySelector('body')

    static testBody() {
        this.body.innerHTML = "testing UI"
    }

    static loadUI () {
        this.body.append(this.loadSidebar(), this.loadContainer('project', TodoList.projects[0]));
    }

    static loadSidebar() {
        // TODO nav sidebar with project list
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');

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
            projectEl.innerHTML = project.title;

            projectEl.onclick = () => {
                this.loadContainer('project', project);
            }
            
            projectList.append(projectEl);
        }

        sidebar.append(noteTab, projectTab, projectList);

        return sidebar
    }

    static loadContainer(type, list) {
        // TODO - Container for task/note lists

        let listContainer = document.querySelector('.listContainer');
        console.log(!listContainer);

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
                    listContainer.append(this.loadNoteList(list))
            }

        }

        return listContainer
    }

    static loadProject (project) {
        // TODO - Load in todo items
        const projectContainer = document.createElement('div');
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

        return projectContainer
    }
    
    static loadNoteList() {
        // TODO - Load in notes
        // seperate pinned / not pinned

        const noteContainer = document.createElement('div');
        noteContainer.classList.add('noteContainer');

        for (const note of NoteList.notes) {

            const noteEl = document.createElement('div');
            noteEl.classList.add('note');

            const noteTitle = document.createElement('h3');
            noteTitle.classList.add("noteTitle");
            noteTitle.innerHTML = note.title;

            const noteContent = document.createElement('p');
            noteContent.classList.add('noteContent');
            noteContent.innerHTML = note.content;

            noteEl.append(noteTitle, noteContent);

            noteContainer.append(noteEl);
        }

        const newNoteButton = document.createElement('button');
        newNoteButton.innerHTML = '+'

        noteContainer.append(newNoteButton);

        return noteContainer
    }

    static loadTask (task) {
        const taskEl = document.createElement('li');
        taskEl.classList.add('task');

        const checkEl = document.createElement('input');
        checkEl.setAttribute('type', 'checkbox');

        const titleEl = document.createElement('span');
        titleEl.innerHTML = task.title;

        const dateEl = document.createElement('span');
        dateEl.innerHTML = task.dueDate;

        const editEl = document.createElement('button');
        editEl.innerHTML = 'Edit';

        const delEl = document.createElement('button');
        delEl. innerHTML = 'Delete'

        taskEl.append(checkEl, titleEl, dateEl, editEl, delEl);

        return taskEl
    }

    static focusNote() {
        // TODO note pop out
    }

    static loadTaskForm (project) {

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

        taskForm.append(titleInput, dateLabel, dateInput);

        const priorityVals = ['Low', 'Medium', 'High'];

        for (let i=0; i<priorityVals.length; ++i) {

            const priorityLabel = document.createElement('label');
            priorityLabel.setAttribute('for', priorityVals[i]);
            priorityLabel.innerHTML = priorityVals[i]

            const priorityOpt = document.createElement('input');
            priorityOpt.setAttribute('type', 'radio');
            priorityOpt.name = 'priority';
            priorityOpt.value = priorityVals[i]

            taskForm.append(priorityOpt, priorityLabel);
        }

        const submitButton = document.createElement('button');
        submitButton.innerHTML = 'Submit';

        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';

        taskForm.append(submitButton, cancelButton);

        taskForm.onsubmit = () => {
            
            const newTask = new Task(titleInput.value, dateInput.value, document.querySelector('input[name="priority"]:checked').value);
            TodoList.addTask(project, newTask);

            this.deleteElement(taskForm)
            this.loadContainer('project', project);
        };

        return taskForm
    }

    static deleteElement(element) {
        element.parentElement.removeChild(element);
    }
}