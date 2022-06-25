import "../styles/reset.scss";
import "../styles/main.scss";
import { pageLoad } from "./pageload";
import { createMenu } from "./menu";

pageLoad();

const lists = document.querySelectorAll("li");

const displayTab = (e: Event) => {
    const tab = e.target
    if(tab instanceof HTMLElement) {
        if(tab.id === "Menu-tab") {
            const active = document.querySelector(".current-page");
            active?.classList.remove("current-page");
            createMenu();
            tab.classList.add("current-page");
        }
    }
}

lists.forEach(li => {
    li.addEventListener("click", displayTab)
})