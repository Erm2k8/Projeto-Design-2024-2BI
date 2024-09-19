import Header from './components/Header.js';

function loadFavicon() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = '/assets/images/pngs/favicon.png';
    document.head.appendChild(link);
}

function loadHeader() {
    const header = new Header();
    header.createHeader();
}

document.addEventListener('DOMContentLoaded', () => {
    loadFavicon();
    loadHeader();
});
