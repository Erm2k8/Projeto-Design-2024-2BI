import Button from "./components/Button.js";
import Card from "./components/Cards.js";

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const button = new Button('Click me', () => alert("Button Clicked"));
    app.appendChild(button.render());

    const card = new Card("Card Title", "card content card content card content");
    app.appendChild(card.render());
})