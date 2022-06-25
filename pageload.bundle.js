/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************************!*\
  !*** ./src/scripts/pageload.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
var createHeader = function () {
    var header = document.createElement("header");
    var h1 = document.createElement("h1");
    h1.textContent = "Le Riz";
    header.appendChild(h1);
    var nav = document.createElement("nav");
    var ul = document.createElement("ul");
    var names = ["Home", "Menu", "Contact"];
    for (var i = 0; i < 3; i++) {
        var li = document.createElement("li");
        if (i === 0) {
            li.classList.add("current-page");
        }
        li.id = "".concat(names[i], "-tab");
        li.textContent = names[i];
        ul.appendChild(li);
    }
    nav.appendChild(ul);
    header.appendChild(nav);
    return header;
};
var createMain = function () {
    var main = document.createElement("main");
    main.classList.add("home");
    var h2 = document.createElement("h2");
    h2.textContent = "Welcome to our site!";
    main.appendChild(h2);
    var mainp = document.createElement("p");
    mainp.textContent = "The pinnacle of fine dining";
    main.appendChild(mainp);
    return main;
};
var createFooter = function () {
    var footer = document.createElement("footer");
    footer.textContent = "Made by";
    var link = document.createElement("a");
    link.setAttribute("href", "https://github.com/Mynameisfrostwalker");
    link.textContent = " Mynameisfrostwalker";
    footer.appendChild(link);
    return footer;
};
var pageLoad = function () {
    var container = document.querySelector("#content");
    container === null || container === void 0 ? void 0 : container.appendChild(createHeader());
    container === null || container === void 0 ? void 0 : container.appendChild(createMain());
    container === null || container === void 0 ? void 0 : container.appendChild(createFooter());
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ3pCLE9BQU8sTUFBTTtBQUNqQixDQUFDO0FBRUQsSUFBTSxRQUFRLEdBQUc7SUFDYixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXJELFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUV2QyxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFFckMsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBRTNDLENBQUM7QUFFK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdHMvLi9zcmMvc2NyaXB0cy9wYWdlbG9hZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkxlIFJpelwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsZXQgbmFtZXMgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl07XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1wYWdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxpLmlkID0gYCR7bmFtZXNbaV19LXRhYmA7XG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gbmFtZXNbaV07XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gb3VyIHNpdGUhXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoMik7XG4gICAgY29uc3QgbWFpbnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtYWlucC50ZXh0Q29udGVudCA9IFwiVGhlIHBpbm5hY2xlIG9mIGZpbmUgZGluaW5nXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWlucCk7XG4gICAgcmV0dXJuIG1haW5cbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJNYWRlIGJ5XCI7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9NeW5hbWVpc2Zyb3N0d2Fsa2VyXCIpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBcIiBNeW5hbWVpc2Zyb3N0d2Fsa2VyXCI7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybiBmb290ZXJcbn1cblxuY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29udGFpbmVyPy5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5cbiAgICBjb250YWluZXI/LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5cbiAgICBjb250YWluZXI/LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxufVxuXG5leHBvcnQgeyBwYWdlTG9hZCwgY3JlYXRlTWFpbiB9O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=