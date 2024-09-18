export default class Card {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    render() {
        const card = document.createElement('div');
        card.className = 'card';

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = this.title;
        card.appendChild(cardTitle);

        const cardContent = document.createElement('p');
        cardContent.textContent = this.content;
        card.appendChild(cardContent);

        return card;
    }
}