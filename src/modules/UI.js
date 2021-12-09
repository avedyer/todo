import Task from './task.js';
import Project from './project.js';
import Note from './note.js'
import TodoList from './todoList.js';
import NoteList from './noteList.js';
import {populateStorage} from './helpers.js';
import todoList from './todoList.js';
import dateFormat, { masks } from "dateformat";

export default class UI {

    static currentProject = todoList.projects[0];
    static body = document.querySelector('body')

    // Initial Loadout

    static loadUI () {
        this.body.append(this.loadSidebar(), this.loadContainer('project', TodoList.projects[0]));
    }


    // Navigation bar for switching between projects and notes

    static loadSidebar() {
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
        
        const noteTabHeader = document.createElement('h3');    
            noteTabHeader.innerHTML = "Notes"

        noteTab.onclick = () => {
            this.loadContainer('note', NoteList.notes);
            projectList.classList.add('hidden');
            noteTab.classList.add('selected')
            projectTab.classList.remove('selected')
        }

        noteTab.append(noteTabHeader);

        const projectTab = document.createElement('div');
            projectTab.classList.add('tab');

        const projectTabHeader = document.createElement('h3');
            projectTabHeader.innerHTML = "Projects";

        projectTab.append(projectTabHeader); 

        projectTab.onclick = () => {
            this.loadContainer('project', TodoList.projects[0])
            projectList.classList.remove('hidden');
            projectTab.classList.add('selected');
            noteTab.classList.remove('selected')
        }

        const projectList = document.createElement('ul');
            projectList.classList.add('projectList', 'hidden');

        // List project names for view selection

        for (const project of TodoList.projects) {
            const projectEl = document.createElement('li');
            
            const projectTitle = document.createElement('span');
                projectTitle.innerHTML = project.title;
                projectTitle.onclick = () => {
                    this.loadContainer('project', project);
                }

            const editEl = document.createElement('button');
                editEl.innerHTML = '✎';
                editEl.onclick = () => {
                    projectEl.parentElement.replaceChild(this.loadProjectForm(project), projectEl);
                }

            const delEl = document.createElement('button');
                delEl. innerHTML = 'x'
                delEl.onclick = () => {
                    TodoList.removeProject(project);
                    this.loadSidebar();
                }

            projectEl.append(projectTitle, editEl, delEl);
            
            projectList.append(projectEl);
        }

        const addProjectButton = document.createElement('button');
            addProjectButton.innerHTML = '+';
            addProjectButton.onclick = () => {projectList.append(this.loadProjectForm());}
            
        projectList.append(addProjectButton);    

        sidebar.append(noteTab, projectTab, projectList);

        return sidebar
    }

    static loadContainer(type, list) {

        // Load generic container for projects or lists, load in content based on arguments

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

        // Load project container with editing, deleting, sorting functionality

        if (!project) {
            let project = this.currentProject;
        }

        let projectContainer = document.querySelector('.projectContainer');
        
        if (!projectContainer) {
            projectContainer = document.createElement('div');
            projectContainer.classList.add('projectContainer');
        }

        else {
            projectContainer.innerHTML = '';
        }

        const projectHeader = document.createElement('h2');
            projectHeader.innerHTML = project.title;

        const taskList = document.createElement('table')
            taskList.classList.add('taskList');

        const priorityEl = document.createElement('td');
            priorityEl.innerHTML = 'Priority';
            priorityEl.classList.add('priority');

            priorityEl.onclick = () => {
                TodoList.prioritySort(project);
                this.loadProject(project);
            }
        
        const dateEl = document.createElement('td');
            dateEl.innerHTML = 'Due Date'
            dateEl.classList.add('date');

            dateEl.onclick = () => {
                TodoList.dateSort(project);
                this.loadProject(project);
            }

        const gridFiller = document.createElement('td');

        const listHeader = document.createElement('tr');
            listHeader.classList.add('task')

        listHeader.append(gridFiller, gridFiller.cloneNode(), dateEl, priorityEl, gridFiller.cloneNode(), gridFiller.cloneNode());

        taskList.append(listHeader);
        

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
        
        // Load container for notes, with seperation between pinned/unpinned notes, and new task button

        let noteContainer = document.querySelector('.noteContainer');

        if(!noteContainer) {
            noteContainer = document.createElement('div');
            noteContainer.classList.add('noteContainer');
        }

        else {
            noteContainer.innerHTML = '';
        }

        const pinnedContainer = document.createElement('div');
            pinnedContainer.classList.add('pinned', 'noteSection');

        const unpinnedContainer = document.createElement('div');
            unpinnedContainer.classList.add('unpinned', 'noteSection');

        for (let note of NoteList.notes) {
            note.pinned ? pinnedContainer.append(this.loadNote(note)) : unpinnedContainer.append(this.loadNote(note));
        }

        const newNoteButton = document.createElement('button');
            newNoteButton.innerHTML = '+'
            newNoteButton.classList.add('addButton');
            newNoteButton.onclick = () => {
                noteContainer.append(this.loadNoteForm());
            }

        noteContainer.append(pinnedContainer, unpinnedContainer, newNoteButton);

        return noteContainer
    }

    static loadNote (note) {

        // Load individual note with editing functionality

        const noteEl = document.createElement('div');
            noteEl.classList.add('note');

            const noteTitle = document.createElement('h3');
            noteTitle.classList.add("noteTitle");
            noteTitle.innerHTML = note.title;

            const pinEl = document.createElement('div');
                note.pinned ? pinEl.innerHTML = 'unpin' : pinEl.innerHTML = 'pin'
                pinEl.onclick = () => {
                    NoteList.togglePin(note);
                    NoteList.pinSort();
                    this.loadNoteList();
                }

            const noteContent = document.createElement('p');
                noteContent.classList.add('noteContent');
                noteContent.innerHTML = note.content;

            const editEl = document.createElement('button');
                editEl.innerHTML = '✎';
                editEl.onclick = () => {
                    noteEl.parentElement.replaceChild(this.loadNoteForm(note), noteEl);
                }

            const delEl = document.createElement('button');
                delEl. innerHTML = 'x'
                delEl.onclick = () => {
                    NoteList.remove(note);
                    this.loadNoteList();
            }

        noteEl.onclick = () => this.focusNote(noteEl);

        noteEl.append(noteTitle, pinEl, noteContent, editEl, delEl);

        return noteEl
    }

    static loadTask (task) {

        // Load individual task, with editing functionality

        const taskEl = document.createElement('tr');
            taskEl.classList.add('task');

        if (task.complete) {
            taskEl.classList.add('complete')
        }

        const checkContainer = document.createElement('td');

        const checkEl = document.createElement('input');
            if (task.complete) {
                checkEl.setAttribute('checked', true);
            }
            checkEl.setAttribute('type', 'checkbox');
            checkEl.onclick = () => {
                TodoList.toggleCompletion(task);
                taskEl.classList.toggle('complete');
            };
        
        checkContainer.append(checkEl);

        const titleEl = document.createElement('td');
            titleEl.innerHTML = task.title;
            titleEl.classList.add('title')

        const dateEl = document.createElement('td');
            dateEl.innerHTML = task.dueDate;
            dateEl.classList.add('date')
        
        const priorityEl = document.createElement('td')
            priorityEl.innerHTML = task.priority;
            priorityEl.classList.add('priority')

        const editContainer = document.createElement('td')
        
        const editEl = document.createElement('button');
            editEl.innerHTML = '✎';
            editEl.onclick = () => {
                taskEl.parentElement.replaceChild(this.loadTaskForm(this.currentProject, task), taskEl);
                
            }

        editContainer.append(editEl);

        const delContainer = document.createElement('td');

        const delEl = document.createElement('button');
            delEl. innerHTML = 'x'
            delEl.onclick = () => {
                todoList.removeTask(task);
                this.loadContainer('project', this.currentProject);
            }

        editContainer.append(delEl);

        taskEl.append(checkContainer, titleEl, dateEl, priorityEl, editContainer, delContainer);

        return taskEl
    }

    static loadTaskForm (project, task) {

        // Load form for new tasks.
        // Can be used for editing or creation from scratch. Checks for exisitng task argument to determine output.

        let taskForm = document.querySelector('.taskForm');

        if (taskForm) {
            return taskForm
        }

        else {
            taskForm = document.createElement('form');
            taskForm.setAttribute('onsubmit', 'return false');
            taskForm.classList.add('taskForm');
        }

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

        // Iterative creation of radio button selectors for priority. Defaults to medium, or preexisting task value.

        const prioritySelector = document.createElement('div');
        const priorityVals = ['Low', 'Medium', 'High'];

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
            submitButton.innerHTML = '✓';

        const cancelButton = document.createElement('button');
            cancelButton.innerHTML = 'x';
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

        // Load form for new project.
        // Can be used for editing or creation from scratch. Checks for exisitng project argument to determine output.

        let projectForm = document.querySelector('.projectForm');

        if (projectForm) {
            return projectForm
        }

        else {
            projectForm = document.createElement('form');
            projectForm.setAttribute('onsubmit', 'return false');
            projectForm.classList.add('projectForm');
        }

        const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');

        const submitButton = document.createElement('button');
            submitButton.innerHTML = '✓';

        const cancelButton = document.createElement('button');
            cancelButton.innerHTML = 'x';
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

        // Load form for new note.
        // Can be used for editing or creation from scratch. Checks for exisitng note argument to determine output.

        let noteForm = document.querySelector('.noteForm');

        if (noteForm) {
            return noteForm
        }

        else {
            noteForm = document.createElement('form');
            noteForm.setAttribute('onsubmit', 'return false');
        }
        

        const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');

        const contentInput = document.createElement('textarea');
            contentInput.setAttribute('rows', '8');
            contentInput.setAttribute('cols', '32');  

        const submitButton = document.createElement('button');
            submitButton.innerHTML = '✓';

        const cancelButton = document.createElement('button');
            cancelButton.innerHTML = 'x';
            cancelButton.onclick = () => {
                this.focusForm(noteForm);
                this.deleteElement(noteForm)
            };

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
            this.focusForm(noteForm);
        }

        this.focusForm(noteForm);

        return noteForm
    }

    static focusForm(formEl) {
        // TODO note pop out

        formEl.classList.toggle('focused');
        document.querySelector('.noteContainer').classList.toggle('unfocused');
    }

    static deleteElement(element) {
        element.parentElement.removeChild(element);
    }
}