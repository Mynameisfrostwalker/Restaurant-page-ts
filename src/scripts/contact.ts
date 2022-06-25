const createContact = () => {
    const main = document.querySelector("main");
    main?.replaceChildren();
    main?.classList.remove("home");
    main?.classList.add("contact");

    const container = document.createElement("div");
    container.classList.add("contact-container");

    const h1 = document.createElement("h1");
    h1.textContent = "Contact us and tell us what you think!";
    container.appendChild(h1);

    const phone = document.createElement("p");
    phone.textContent = "Phone Number: 07066306153";
    container.appendChild(phone);

    const address = document.createElement("p");
    address.textContent = "Address: Hollywood Boulevard 42, Los Angeles, USA";
    container.appendChild(address);

    main?.appendChild(container);
}

export { createContact }