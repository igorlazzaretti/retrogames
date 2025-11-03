
const games = [
    { title: 'Super Mario World', console: 'snes', image: 'assets/images/mario.webp', url: 'game/super-mario-world.html' },
    { title: 'The Legend of Zelda', console: 'snes', image: 'assets/images/default.png', url: '#' },
    { title: 'Donkey Kong Country', console: 'snes', image: 'assets/images/default.png', url: '#' },
    { title: 'Sonic the Hedgehog', console: 'megadrive', image: 'assets/images/default.png', url: '#' },
    { title: 'Streets of Rage 2', console: 'megadrive', image: 'assets/images/default.png', url: '#' },
    { title: 'Golden Axe', console: 'megadrive', image: 'assets/images/default.png', url: '#' },
    { title: 'Final Fantasy VII', console: 'playstation', image: 'assets/images/default.png', url: '#' },
    { title: 'Crash Bandicoot', console: 'playstation', image: 'assets/images/default.png', url: '#' },
    { title: 'Metal Gear Solid', console: 'playstation', image: 'assets/images/default.png', url: '#' },
];

let currentFilter = 'all';

function renderGames() {
    const grid = document.getElementById('gamesGrid');
    const filteredGames = currentFilter === 'all'
        ? games
        : games.filter(game => game.console === currentFilter);

    grid.innerHTML = filteredGames.map(game => `
                <div class="game-card" onclick="openGame('${game.url}')">
                    <div class="game-image">
                        <img src="${game.image}" alt="${game.title}" class="game-img">
                    </div>
                    <div class="game-title">${game.title}</div>
                </div>
            `).join('');
}

function filterGames(console) {
    currentFilter = console;
    renderGames();

    document.querySelectorAll('.nav-menu li').forEach(li => {
        li.classList.remove('active');
    });
    event.target.classList.add('active');
}

function openGame(url) {
    window.open(url, '_self');
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    }
}

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

renderGames();