const body = document.querySelector('body');
body.innerHTML = "testing";

console.log('testing');

const testVar = 42;

window.testVar = testVar;

function Todo (title, desc, dueDate, priority, tasks) {
    this.title = title
    this.desc = desc
    this.dueDate = dueDate
    this.priority = priority
    this.tasks = tasks
}

testTodo = new Todo('fix garage door', '', 'December 2nd, 2021', 'medium', ['remove door', 'find manual', 'order parts']);