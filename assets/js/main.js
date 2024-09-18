import Header from './components/Header.js';

function loadHeader() {
    const header = new Header();
    header.createHeader();
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
});
