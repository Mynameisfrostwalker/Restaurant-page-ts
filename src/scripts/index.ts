import "../styles/reset.scss";
import "../styles/main.scss";
import { pageLoad , createMain} from "./pageload";
import { createMenu } from "./menu";
import { createContact } from "./contact";

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
        if(tab.id === "Home-tab") {
            const main = document.querySelector("main");
            const active = document.querySelector(".current-page");
            active?.classList.remove("current-page");
            main?.replaceChildren()
            main?.appendChild(createMain());
            tab.classList.add("current-page");
        }
        if(tab.id === "Contact-tab") {
            const active = document.querySelector(".current-page");
            active?.classList.remove("current-page");
            createContact();
            tab.classList.add("current-page");
        }
    }
}

lists.forEach(li => {
    li.addEventListener("click", displayTab)
})