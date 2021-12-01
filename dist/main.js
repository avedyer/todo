/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ writeId)
/* harmony export */ });
function writeId (currentIds) {

    let newId =Math.floor(Math.random() * (2**32));


    while (currentIds.includes(newId)) {
        newId = Math.floor(Math.random() * (2**32));
    }
    
    return newId;
}


/***/ }),

/***/ "./src/modules/note.js":
/*!*****************************!*\
  !*** ./src/modules/note.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Note)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/modules/helpers.js");
/* harmony import */ var _noteList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noteList.js */ "./src/modules/noteList.js");




class Note {
    constructor (title, content) {
        this.id = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_noteList_js__WEBPACK_IMPORTED_MODULE_1__["default"].getIds());
        this.title = title;
        this.content = content;
        //this.date = helpers.today(); 
        this.pinned = false;
    }
}

/***/ }),

/***/ "./src/modules/noteList.js":
/*!*********************************!*\
  !*** ./src/modules/noteList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note.js */ "./src/modules/note.js");


class NoteList {
    constructor() {
        this.notes = []
    }

    add(note) {
        this.notes.push(note);
    }

    getIds() {
        let ids = []

        for (let note of this.notes) {
            ids.push(note.id);
        }

        return ids
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new NoteList());

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/modules/helpers.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/modules/todoList.js");



class Project {
    constructor (title, dueDate) {
        this.id = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectIds());
        this. title = title;
        this.dueDate = dueDate;
        this.tasks = [];
    }
}

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/modules/helpers.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/modules/todoList.js");



class Task {
    constructor (title, dueDate, priority) {
        this.id = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskIds());
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");


class TodoList {
    constructor () {
        this.projects = []

        //this.projects.push(new Project('Home', '09/14/22'));    
        //new Project('Today', helpers.date.today())
        //new Project('This Week', helpers.date.jump(7))
    }

    addProject(project) {
        this.projects.push(project);
    }

    getProjectIds() {
        let ids = []

        for (let project of this.projects) {
            ids.push(project.id);
        }

        return ids
    }

    getTaskIds() {
        let ids = []

        for (let project of this.projects) {
            for (let task of project.tasks) {
                ids.push(task.id)
            }
        }

        return ids
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TodoList());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/note.js */ "./src/modules/note.js");
/* harmony import */ var _modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todoList.js */ "./src/modules/todoList.js");
/* harmony import */ var _modules_noteList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/noteList.js */ "./src/modules/noteList.js");
/* harmony import */ var _modules_helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/helpers.js */ "./src/modules/helpers.js");









const body = document.querySelector('body');
body.innerHTML = "testing";

console.log("testing");

let testTask = new _modules_task_js__WEBPACK_IMPORTED_MODULE_0__["default"]('walk dog', 'december 8th 2021', 'low');
let testNote = new _modules_note_js__WEBPACK_IMPORTED_MODULE_2__["default"]('groceries', 'avocado, mango, milk, rice');
let testProject = new _modules_project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('sell house', '06/02/2022');

testProject.tasks.push(testTask);

_modules_noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"].add(testNote);

_modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(testProject);

window.TodoList = _modules_todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"]
window.testTask = testTask
window.writeId = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"]
window.NoteList = _modules_noteList_js__WEBPACK_IMPORTED_MODULE_4__["default"]
window.Project = _modules_project_js__WEBPACK_IMPORTED_MODULE_1__["default"]
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlOztBQUVmOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVndDO0FBQ0o7QUFDUDs7QUFFZDtBQUNmO0FBQ0Esa0JBQWtCLHVEQUFLLENBQUMsMkRBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmlCO0FBQ0s7O0FBRXRCO0FBQ2Y7QUFDQSxrQkFBa0IsdURBQUssQ0FBQyxrRUFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZnQztBQUNLOztBQUV0QjtBQUNmO0FBQ0Esa0JBQWtCLHVEQUFLLENBQUMsK0RBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZpQzs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7OztVQ3RDZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDTTtBQUNQO0FBQ1M7QUFDQTtBQUNIO0FBQ0c7OztBQUc3QztBQUNBOztBQUVBOztBQUVBLG1CQUFtQix3REFBSTtBQUN2QixtQkFBbUIsd0RBQUk7QUFDdkIsc0JBQXNCLDJEQUFPOztBQUU3Qjs7QUFFQSxnRUFBWTs7QUFFWix1RUFBbUI7O0FBRW5CLGtCQUFrQiw0REFBUTtBQUMxQjtBQUNBLGlCQUFpQiwyREFBTztBQUN4QixrQkFBa0IsNERBQVE7QUFDMUIsaUJBQWlCLDJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9ub3RlLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL25vdGVMaXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JpdGVJZCAoY3VycmVudElkcykge1xuXG4gICAgbGV0IG5ld0lkID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMioqMzIpKTtcblxuXG4gICAgd2hpbGUgKGN1cnJlbnRJZHMuaW5jbHVkZXMobmV3SWQpKSB7XG4gICAgICAgIG5ld0lkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIqKjMyKSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBuZXdJZDtcbn1cbiIsImltcG9ydCBkZWZhdWx0RXhwb3J0IGZyb20gJy4vaGVscGVycy5qcydcbmltcG9ydCBOb3RlTGlzdCBmcm9tICcuL25vdGVMaXN0LmpzJ1xuaW1wb3J0IG5ld0lkIGZyb20gJy4vaGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZSB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMuaWQgPSBuZXdJZChOb3RlTGlzdC5nZXRJZHMoKSk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgLy90aGlzLmRhdGUgPSBoZWxwZXJzLnRvZGF5KCk7IFxuICAgICAgICB0aGlzLnBpbm5lZCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnXG5cbmNsYXNzIE5vdGVMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ub3RlcyA9IFtdXG4gICAgfVxuXG4gICAgYWRkKG5vdGUpIHtcbiAgICAgICAgdGhpcy5ub3Rlcy5wdXNoKG5vdGUpO1xuICAgIH1cblxuICAgIGdldElkcygpIHtcbiAgICAgICAgbGV0IGlkcyA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgbm90ZSBvZiB0aGlzLm5vdGVzKSB7XG4gICAgICAgICAgICBpZHMucHVzaChub3RlLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOb3RlTGlzdCgpIiwiaW1wb3J0IG5ld0lkIGZyb20gJy4vaGVscGVycy5qcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBuZXdJZChUb2RvTGlzdC5nZXRQcm9qZWN0SWRzKCkpO1xuICAgICAgICB0aGlzLiB0aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxufSIsImltcG9ydCBuZXdJZCBmcm9tICcuL2hlbHBlcnMuanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5pZCA9IG5ld0lkKFRvZG9MaXN0LmdldFRhc2tJZHMoKSk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn0iLCJpbXBvcnQgUHJvamVjdCAgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jbGFzcyBUb2RvTGlzdCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cblxuICAgICAgICAvL3RoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSG9tZScsICcwOS8xNC8yMicpKTsgICAgXG4gICAgICAgIC8vbmV3IFByb2plY3QoJ1RvZGF5JywgaGVscGVycy5kYXRlLnRvZGF5KCkpXG4gICAgICAgIC8vbmV3IFByb2plY3QoJ1RoaXMgV2VlaycsIGhlbHBlcnMuZGF0ZS5qdW1wKDcpKVxuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdElkcygpIHtcbiAgICAgICAgbGV0IGlkcyA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RzKSB7XG4gICAgICAgICAgICBpZHMucHVzaChwcm9qZWN0LmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHNcbiAgICB9XG5cbiAgICBnZXRUYXNrSWRzKCkge1xuICAgICAgICBsZXQgaWRzID0gW11cblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgICAgICAgICAgIGlkcy5wdXNoKHRhc2suaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWRzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVG9kb0xpc3QoKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2suanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QuanMnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9tb2R1bGVzL25vdGUuanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi9tb2R1bGVzL3RvZG9MaXN0LmpzJztcbmltcG9ydCBOb3RlTGlzdCBmcm9tICcuL21vZHVsZXMvbm90ZUxpc3QuanMnO1xuaW1wb3J0IHdyaXRlSWQgZnJvbSAnLi9tb2R1bGVzL2hlbHBlcnMuanMnXG5pbXBvcnQgbm90ZUxpc3QgZnJvbSAnLi9tb2R1bGVzL25vdGVMaXN0LmpzJztcblxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuYm9keS5pbm5lckhUTUwgPSBcInRlc3RpbmdcIjtcblxuY29uc29sZS5sb2coXCJ0ZXN0aW5nXCIpO1xuXG5sZXQgdGVzdFRhc2sgPSBuZXcgVGFzaygnd2FsayBkb2cnLCAnZGVjZW1iZXIgOHRoIDIwMjEnLCAnbG93Jyk7XG5sZXQgdGVzdE5vdGUgPSBuZXcgTm90ZSgnZ3JvY2VyaWVzJywgJ2F2b2NhZG8sIG1hbmdvLCBtaWxrLCByaWNlJyk7XG5sZXQgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdCgnc2VsbCBob3VzZScsICcwNi8wMi8yMDIyJyk7XG5cbnRlc3RQcm9qZWN0LnRhc2tzLnB1c2godGVzdFRhc2spO1xuXG5Ob3RlTGlzdC5hZGQodGVzdE5vdGUpO1xuXG5Ub2RvTGlzdC5hZGRQcm9qZWN0KHRlc3RQcm9qZWN0KTtcblxud2luZG93LlRvZG9MaXN0ID0gVG9kb0xpc3RcbndpbmRvdy50ZXN0VGFzayA9IHRlc3RUYXNrXG53aW5kb3cud3JpdGVJZCA9IHdyaXRlSWRcbndpbmRvdy5Ob3RlTGlzdCA9IE5vdGVMaXN0XG53aW5kb3cuUHJvamVjdCA9IFByb2plY3QiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=