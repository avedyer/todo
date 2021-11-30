/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5ib2R5LmlubmVySFRNTCA9IFwidGVzdGluZ1wiO1xuXG5jb25zb2xlLmxvZygndGVzdGluZycpO1xuXG5jb25zdCB0ZXN0VmFyID0gNDI7XG5cbmNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCB0YXNrcykgPT4ge1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjLCBcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHRhc2tzXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdCAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCB0b2Rvcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgdG9kb3NcbiAgICB9O1xufVxuXG5jb25zdCBOb3RlID0gKHRpdGxlLCBjb250ZW50LCBkYXRlLCBwaW5uZWQpID0+IHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBkYXRlLFxuICAgICAgICBwaW5uZWRcbiAgICB9O1xufVxuXG5jb25zdCBkb21JbnRlcmZhY2UgPSAoKCkgPT4ge1xuICAgIHJldHVybiB7XG5cbiAgICB9O1xufSkoKTtcblxuY29uc3QgdG9kb01hbmFnZXIgPSAoKCkgPT4ge1xuICAgIHJldHVybiB7XG5cbiAgICB9O1xufSkoKTtcblxuY29uc3Qgbm90ZU1hbmFnZXIgPSAoKCkgPT4ge1xuXG4gICAgcmV0dXJuIHtcblxuICAgIH07XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIHtcblxuICAgIH07XG59KSgpO1xuXG5jb25zdCB0ZXN0VG9kbyA9IFRvZG8oJ2ZpeCBnYXJhZ2UgZG9vcicsICcnLCAnRGVjZW1iZXIgMm5kLCAyMDIxJywgJ21lZGl1bScsIFsncmVtb3ZlIGRvb3InLCAnZmluZCBtYW51YWwnLCAnb3JkZXIgcGFydHMnXSk7XG5cbmNvbnN0IHRlc3RQcm9qZWN0ID0gUHJvamVjdCgnZml4IHVwIGhvdXNlJywgJ25lZWQgdG8gc2VsbCBuZXh0IHllYXInLCAnRGVjZW1iZXIgMzFzdCwgMjAyMScsICdoaWdoJywgW3Rlc3RUb2RvXSk7XG5cbndpbmRvdy5kb21JbnRlcmZhY2UgPSBkb21JbnRlcmZhY2VcbndpbmRvdy50b2RvTWFuYWdlciA9IHRvZG9NYW5hZ2VyXG53aW5kb3cubm90ZU1hbmFnZXIgPSBub3RlTWFuYWdlclxud2luZG93LnByb2plY3RNYW5hZ2VyID0gcHJvamVjdE1hbmFnZXJcblxud2luZG93LnRlc3RWYXIgPSB0ZXN0VmFyXG5cbndpbmRvdy50ZXN0VG9kbyA9IHRlc3RUb2RvXG53aW5kb3cudGVzdFByb2plY3QgPSB0ZXN0UHJvamVjdCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==