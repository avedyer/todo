const body = document.querySelector('body');
body.innerHTML = "testing";

console.log('testing');

const testVar = 42;

const Todo = (title, desc, dueDate, priority, tasks) => {
    
    return {
        title,
        desc, 
        dueDate,
        priority,
        tasks
    };
}

function Project (title, desc, dueDate, priority, todos) {
    return {
        title,
        desc,
        dueDate,
        priority,
        todos
    };
}

const Note = (title, content, date, pinned) => {

    return {
        title,
        content,
        date,
        pinned
    };
}

const domInterface = (() => {
    return {

    };
})();

const todoManager = (() => {
    return {

    };
})();

const noteManager = (() => {

    return {

    };
})();

const projectManager = (() => {
    return {

    };
})();

const testTodo = Todo('fix garage door', '', 'December 2nd, 2021', 'medium', ['remove door', 'find manual', 'order parts']);

const testProject = Project('fix up house', 'need to sell next year', 'December 31st, 2021', 'high', [testTodo]);

window.domInterface = domInterface
window.todoManager = todoManager
window.noteManager = noteManager
window.projectManager = projectManager

window.testVar = testVar

window.testTodo = testTodo
window.testProject = testProject