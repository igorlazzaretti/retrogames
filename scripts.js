
const games = [
    { title: 'Super Mario World', console: 'snes', image: 'assets/images/mario.webp', url: 'games/super-mario-world.html' },
    { title: 'Mario Kart Deluxe', console: 'snes', image: 'assets/images/mario-kart.png', url: 'games/mario-kart.html' },
    { title: 'Crash Team Racing', console: 'playstation', image: 'assets/images/ctr.png', url: 'games/ctr.html' },
    { title: 'Harry Potter And The Sorcerers Stone (USA)', console: 'playstation', image: 'assets/images/hp-stone.png', url: 'games/hp-sorcerer-stone.html' },
    { title: 'Donkey Kong Country', console: 'snes', image: 'assets/images/dkc.png', url: 'games/donkey-kong-country.html' },
    { title: 'PES 2', console: 'playstation', image: 'assets/images/pes2.png', url: 'games/PES-2.html' },
    { title: 'Pac-Man', console: 'outros', image: 'assets/images/pac.png', url: 'games/pac-man.html' },
    { title: 'Sonic the Hedgehog', console: 'megadrive', image: 'assets/images/default.png', url: '#' },
    { title: 'Streets of Rage 2', console: 'megadrive', image: 'assets/images/default.png', url: '#' },
    { title: 'Golden Axe', console: 'megadrive', image: 'assets/images/default.png', url: '#' },
    { title: 'Final Fantasy VII', console: 'playstation', image: 'assets/images/default.png', url: '#' },
    { title: 'The Legend of Zelda', console: 'snes', image: 'assets/images/default.png', url: '#' },
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