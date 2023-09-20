export function createFooter() {
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.textContent = "\u00A9 2023 Moonxel. All rights reserved.";
    footer.appendChild(p);
    return footer;
}
