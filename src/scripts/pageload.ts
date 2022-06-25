
const createHeader = () => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Le Riz";
    header.appendChild(h1);
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    let names = ["Home", "Menu", "Contact"];

    for(let i = 0; i < 3; i++) {
        const li = document.createElement("li");
        if(i === 0) {
            li.classList.add("current-page");
        }
        li.id = `${names[i]}-tab`;
        li.textContent = names[i];
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    header.appendChild(nav);
    return header;
}

const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("home");
    const h2 = document.createElement("h2");
    h2.textContent = "Welcome to our site!";
    main.appendChild(h2);
    const mainp = document.createElement("p");
    mainp.textContent = "The pinnacle of fine dining";
    main.appendChild(mainp);
    return main
}

const createFooter = () => {
    const footer = document.createElement("footer");
    footer.textContent = "Made by";
    const link = document.createElement("a");
    link.setAttribute("href", "https://github.com/Mynameisfrostwalker");
    link.textContent = " Mynameisfrostwalker";
    footer.appendChild(link);
    return footer
}

const pageLoad = () => {
    const container = document.querySelector("#content");

    container?.appendChild(createHeader());

    container?.appendChild(createMain());

    container?.appendChild(createFooter());

}

export { pageLoad, createMain };

