import Spaghetti from "../assets/spaghetti.png";
import Burger from "../assets/burger.png";
import Rice from "../assets/fried-rice.png";
import Chicken from "../assets/chicken.png";

class Credits {
    private name: string;
    private link: string;
    private title: string;
    private source: string;

    constructor(name: string, link: string, title: string, source: string) {
        this.name = name;
        this.link = `https://www.flaticon.com/free-icons/${link}`;
        this.title = `${title} icons created by smalllikeart - Flaticon`;
        this.source = source;
    }

    createSection() {
        const section = document.createElement("section");

        const imgLink = document.createElement("a");
        imgLink.href = this.link;
        imgLink.title = this.title;

        const Icon = new Image();
        Icon.src = this.source;
        imgLink.appendChild(Icon);
        section.appendChild(imgLink);

        const p = document.createElement("p");
        p.textContent = this.name;
        section.appendChild(p);
        

        return section;
    }
}

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

const createMenu = () => {
    const main = document.querySelector("main");
    main?.classList.remove("home");
    main?.classList.add("menu")
    main?.replaceChildren()
    const container = document.createElement("div");
    container.classList.add("container");

    const spaghetti = new Credits("Spaghetti", "pasta", "Pasta", Spaghetti);
    const burger = new Credits("Burger", "burger", "Burger", Burger);
    const rice = new Credits("Fried rice", "rice", "Rice", Rice);
    const chicken = new Credits("Chicken", "chicken", "Chicken", Chicken);

    container.appendChild(spaghetti.createSection());
    container.appendChild(burger.createSection());
    container.appendChild(rice.createSection());
    container.appendChild(chicken.createSection());

    main?.appendChild(container);
}

export { createMenu }