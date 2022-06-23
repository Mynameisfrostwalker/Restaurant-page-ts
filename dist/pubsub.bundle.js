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
/*!*******************************!*\
  !*** ./src/scripts/pubsub.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publish": () => (/* binding */ publish),
/* harmony export */   "subscribe": () => (/* binding */ subscribe)
/* harmony export */ });
var events = {
// key: eventname, value: [funcs]
};
var subscribe = function (eventName, func) {
    if (events[eventName]) {
        events[eventName].push(func);
    }
    else {
        events[eventName] = [func];
    }
    return {
        unsubscribe: function () {
            var funcs = events[eventName];
            var idx = funcs.indexOf(func);
            if (idx > -1) {
                funcs.splice(idx, 1);
            }
        }
    };
};
var publish = function (eventName) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var funcs = events[eventName];
    if (Array.isArray(funcs)) {
        funcs.forEach(function (func) {
            func.apply(null, args);
        });
    }
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVic3ViLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNLE1BQU0sR0FBVztBQUNmLGlDQUFpQztDQUN4QyxDQUFDO0FBTUYsSUFBTSxTQUFTLEdBQUcsVUFBQyxTQUFpQixFQUFFLElBQThCO0lBQ2hFLElBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEM7U0FBTTtRQUNILE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCO0lBQ0QsT0FBTztRQUNILFdBQVcsRUFBRTtZQUNULElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLElBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNULEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUN2QjtRQUNMLENBQUM7S0FDSjtBQUNMLENBQUMsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFJLFVBQUMsU0FBaUI7SUFBRSxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLDZCQUFjOztJQUMvQyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDO0tBQ0w7QUFDTCxDQUFDLENBQUM7QUFFeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdHMvLi9zcmMvc2NyaXB0cy9wdWJzdWIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ0eXBlIEFueWZ1bmN0aW9ucyA9ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIEV2ZW50cyB7XG4gICAgW2luZGV4OiBzdHJpbmddOiBBbnlmdW5jdGlvbnNbXSwgIFxufVxuXG5jb25zdCBldmVudHM6IEV2ZW50cyA9IHtcbiAgICAgICAgLy8ga2V5OiBldmVudG5hbWUsIHZhbHVlOiBbZnVuY3NdXG59O1xuXG5pbnRlcmZhY2UgVW5zdWJzY3JpYmUge1xuICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lOiBzdHJpbmcsIGZ1bmM6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCk6IFVuc3Vic2NyaWJlID0+IHtcbiAgICBpZihldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZ1bmMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50c1tldmVudE5hbWVdID0gW2Z1bmNdO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnVuY3MgPSBldmVudHNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGZ1bmNzLmluZGV4T2YoZnVuYyk7XG4gICAgICAgICAgICBpZihpZHggPiAtMSkge1xuICAgICAgICAgICAgICAgIGZ1bmNzLnNwbGljZShpZHgsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCBwdWJsaXNoICA9IChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55W10pOiB2b2lkID0+IHtcbiAgICBjb25zdCBmdW5jcyA9IGV2ZW50c1tldmVudE5hbWVdO1xuICAgIGlmKEFycmF5LmlzQXJyYXkoZnVuY3MpKSB7XG4gICAgICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZXhwb3J0IHtwdWJsaXNoLCBzdWJzY3JpYmV9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9