// navBar.js
export function createNavBar() {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const links = [
        { text: "Home", href: "index.html" },
        { text: "Projects", href: "#projects" },
        { text: "About", href: "about.html" },
        { text: "Contact", href: "contact.html" },
    ];

    links.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = link.text;
        a.href = link.href;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);

    return nav;
}
