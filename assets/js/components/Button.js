export default class Button {
    constructor(label, onClick) {
        this.label = label;
        this.onClick = onClick;
    }

    render() {
        const button = document.createElement('button');
        button.textContent = this.label;
        button.className = 'btn';
        button.addEventListener('click', this.onClick);
        return button;
    }
}