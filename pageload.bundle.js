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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTEEsSUFBTSxZQUFZLEdBQUc7SUFDakIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLElBQUksS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUV4QyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3ZCLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDcEM7UUFDRCxFQUFFLENBQUMsRUFBRSxHQUFHLFVBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFNLENBQUM7UUFDMUIsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN0QjtJQUVELEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsSUFBTSxVQUFVLEdBQUc7SUFDZixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsRUFBRSxDQUFDLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQztJQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsS0FBSyxDQUFDLFdBQVcsR0FBRyw2QkFBNkIsQ0FBQztJQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sSUFBSTtBQUNmLENBQUM7QUFFRCxJQUFNLFlBQVksR0FBRztJQUNqQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQy9CLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztJQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLHNCQUFzQixDQUFDO0lBQzFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsT0FBTyxNQUFNO0FBQ2pCLENBQUM7QUFFRCxJQUFNLFFBQVEsR0FBRztJQUNiLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFckQsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBRXZDLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUVyQyxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFFM0MsQ0FBQztBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10cy8uL3NyYy9zY3JpcHRzL3BhZ2Vsb2FkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiTGUgUml6XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxldCBuYW1lcyA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGlmKGkgPT09IDApIHtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXBhZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGkuaWQgPSBgJHtuYW1lc1tpXX0tdGFiYDtcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSBuYW1lc1tpXTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cblxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoMi50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBvdXIgc2l0ZSFcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGgyKTtcbiAgICBjb25zdCBtYWlucCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1haW5wLnRleHRDb250ZW50ID0gXCJUaGUgcGlubmFjbGUgb2YgZmluZSBkaW5pbmdcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5wKTtcbiAgICByZXR1cm4gbWFpblxufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcIk1hZGUgYnlcIjtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL015bmFtZWlzZnJvc3R3YWxrZXJcIik7XG4gICAgbGluay50ZXh0Q29udGVudCA9IFwiIE15bmFtZWlzZnJvc3R3YWxrZXJcIjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5jb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb250YWluZXI/LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcblxuICAgIGNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcblxuICAgIGNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkIH1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9