/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/burger.png":
/*!*******************************!*\
  !*** ./src/assets/burger.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41a5c88c73d6de8b552a.png";

/***/ }),

/***/ "./src/assets/chicken.png":
/*!********************************!*\
  !*** ./src/assets/chicken.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7097e7fe807d9762fca6.png";

/***/ }),

/***/ "./src/assets/fried-rice.png":
/*!***********************************!*\
  !*** ./src/assets/fried-rice.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21e9e4cdeed9f838c997.png";

/***/ }),

/***/ "./src/assets/spaghetti.png":
/*!**********************************!*\
  !*** ./src/assets/spaghetti.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1788fb5486e2a2e45c74.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/menu.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _assets_spaghetti_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/spaghetti.png */ "./src/assets/spaghetti.png");
/* harmony import */ var _assets_burger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/burger.png */ "./src/assets/burger.png");
/* harmony import */ var _assets_fried_rice_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/fried-rice.png */ "./src/assets/fried-rice.png");
/* harmony import */ var _assets_chicken_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/chicken.png */ "./src/assets/chicken.png");




var Credits = /** @class */ (function () {
    function Credits(name, link, title, source) {
        this.name = name;
        this.link = "https://www.flaticon.com/free-icons/".concat(link);
        this.title = "".concat(title, " icons created by smalllikeart - Flaticon");
        this.source = source;
    }
    Credits.prototype.createSection = function () {
        var section = document.createElement("section");
        var imgLink = document.createElement("a");
        imgLink.href = this.link;
        imgLink.title = this.title;
        var Icon = new Image();
        Icon.src = this.source;
        imgLink.appendChild(Icon);
        section.appendChild(imgLink);
        var p = document.createElement("p");
        p.textContent = this.name;
        section.appendChild(p);
        return section;
    };
    return Credits;
}());
/*
const credits = [
    {
        name: "Spaghetti",
        link: "https://www.flaticon.com/free-icons/pasta",
        title: "Pasta icons created by Freepik - Flaticon",
        source: Spaghetti
    },
    {
        name: "Burger",
        link: "https://www.flaticon.com/free-icons/burger",
        title: "Burger icons created by smalllikeart - Flaticon",
        source: Burger
    },
    {
        name: "Fried rice",
        link: "https://www.flaticon.com/free-icons/rice",
        title: "Rice icons created by Freepik - Flaticon",
        source: Rice
    },
    {
        name: "Chicken",
        link: "https://www.flaticon.com/free-icons/chicken",
        title: "Chicken icons created by Freepik - Flaticon",
        source: Chicken,
    }
]
*/
var createMenu = function () {
    var main = document.querySelector("main");
    main === null || main === void 0 ? void 0 : main.classList.remove("home");
    main === null || main === void 0 ? void 0 : main.classList.add("menu");
    main === null || main === void 0 ? void 0 : main.replaceChildren();
    var container = document.createElement("div");
    container.classList.add("container");
    var spaghetti = new Credits("Spaghetti", "pasta", "Pasta", _assets_spaghetti_png__WEBPACK_IMPORTED_MODULE_0__);
    var burger = new Credits("Burger", "burger", "Burger", _assets_burger_png__WEBPACK_IMPORTED_MODULE_1__);
    var rice = new Credits("Fried rice", "rice", "Rice", _assets_fried_rice_png__WEBPACK_IMPORTED_MODULE_2__);
    var chicken = new Credits("Chicken", "chicken", "Chicken", _assets_chicken_png__WEBPACK_IMPORTED_MODULE_3__);
    container.appendChild(spaghetti.createSection());
    container.appendChild(burger.createSection());
    container.appendChild(rice.createSection());
    container.appendChild(chicken.createSection());
    main === null || main === void 0 ? void 0 : main.appendChild(container);
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztJQUN4RSxJQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSwrQ0FBTSxDQUFDLENBQUM7SUFDakUsSUFBTSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsbURBQUksQ0FBQyxDQUFDO0lBQzdELElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdEQUFPLENBQUMsQ0FBQztJQUV0RSxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDOUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUM1QyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBRS9DLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUVvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10cy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdHMvLi9zcmMvc2NyaXB0cy9tZW51LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBTcGFnaGV0dGkgZnJvbSBcIi4uL2Fzc2V0cy9zcGFnaGV0dGkucG5nXCI7XG5pbXBvcnQgQnVyZ2VyIGZyb20gXCIuLi9hc3NldHMvYnVyZ2VyLnBuZ1wiO1xuaW1wb3J0IFJpY2UgZnJvbSBcIi4uL2Fzc2V0cy9mcmllZC1yaWNlLnBuZ1wiO1xuaW1wb3J0IENoaWNrZW4gZnJvbSBcIi4uL2Fzc2V0cy9jaGlja2VuLnBuZ1wiO1xuXG5jbGFzcyBDcmVkaXRzIHtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIGxpbms6IHN0cmluZztcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzb3VyY2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbGluazogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBzb3VyY2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxpbmsgPSBgaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvJHtsaW5rfWA7XG4gICAgICAgIHRoaXMudGl0bGUgPSBgJHt0aXRsZX0gaWNvbnMgY3JlYXRlZCBieSBzbWFsbGxpa2VhcnQgLSBGbGF0aWNvbmA7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIH1cblxuICAgIGNyZWF0ZVNlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAgICAgICBjb25zdCBpbWdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGltZ0xpbmsuaHJlZiA9IHRoaXMubGluaztcbiAgICAgICAgaW1nTGluay50aXRsZSA9IHRoaXMudGl0bGU7XG5cbiAgICAgICAgY29uc3QgSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBJY29uLnNyYyA9IHRoaXMuc291cmNlO1xuICAgICAgICBpbWdMaW5rLmFwcGVuZENoaWxkKEljb24pO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGltZ0xpbmspO1xuXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfVxufVxuXG4vKlxuY29uc3QgY3JlZGl0cyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiU3BhZ2hldHRpXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvcGFzdGFcIiwgXG4gICAgICAgIHRpdGxlOiBcIlBhc3RhIGljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uXCIsXG4gICAgICAgIHNvdXJjZTogU3BhZ2hldHRpXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQnVyZ2VyXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvYnVyZ2VyXCIsXG4gICAgICAgIHRpdGxlOiBcIkJ1cmdlciBpY29ucyBjcmVhdGVkIGJ5IHNtYWxsbGlrZWFydCAtIEZsYXRpY29uXCIsXG4gICAgICAgIHNvdXJjZTogQnVyZ2VyXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiRnJpZWQgcmljZVwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3JpY2VcIixcbiAgICAgICAgdGl0bGU6IFwiUmljZSBpY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvblwiLFxuICAgICAgICBzb3VyY2U6IFJpY2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJDaGlja2VuXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvY2hpY2tlblwiLFxuICAgICAgICB0aXRsZTogXCJDaGlja2VuIGljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uXCIsXG4gICAgICAgIHNvdXJjZTogQ2hpY2tlbixcbiAgICB9XG5dXG4qL1xuXG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBtYWluPy5jbGFzc0xpc3QucmVtb3ZlKFwiaG9tZVwiKTtcbiAgICBtYWluPy5jbGFzc0xpc3QuYWRkKFwibWVudVwiKVxuICAgIG1haW4/LnJlcGxhY2VDaGlsZHJlbigpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHNwYWdoZXR0aSA9IG5ldyBDcmVkaXRzKFwiU3BhZ2hldHRpXCIsIFwicGFzdGFcIiwgXCJQYXN0YVwiLCBTcGFnaGV0dGkpO1xuICAgIGNvbnN0IGJ1cmdlciA9IG5ldyBDcmVkaXRzKFwiQnVyZ2VyXCIsIFwiYnVyZ2VyXCIsIFwiQnVyZ2VyXCIsIEJ1cmdlcik7XG4gICAgY29uc3QgcmljZSA9IG5ldyBDcmVkaXRzKFwiRnJpZWQgcmljZVwiLCBcInJpY2VcIiwgXCJSaWNlXCIsIFJpY2UpO1xuICAgIGNvbnN0IGNoaWNrZW4gPSBuZXcgQ3JlZGl0cyhcIkNoaWNrZW5cIiwgXCJjaGlja2VuXCIsIFwiQ2hpY2tlblwiLCBDaGlja2VuKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFnaGV0dGkuY3JlYXRlU2VjdGlvbigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyLmNyZWF0ZVNlY3Rpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJpY2UuY3JlYXRlU2VjdGlvbigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpY2tlbi5jcmVhdGVTZWN0aW9uKCkpO1xuXG4gICAgbWFpbj8uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudSB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9