
const games = [
    { title: 'Super Mario World', console: 'nintendo', image: 'assets/images/mario.webp', url: 'games/super-mario-world.html' },
    { title: 'Mario Kart Deluxe', console: 'nintendo', image: 'assets/images/mario-kart.png', url: 'games/mario-kart.html' },
    { title: 'Crash Team Racing', console: 'playstation', image: 'assets/images/ctr.png', url: 'games/ctr.html' },
    { title: 'Harry Potter And The Sorcerers Stone (USA)', console: 'playstation', image: 'assets/images/hp-stone.png', url: 'games/hp-sorcerer-stone.html' },
    { title: 'Donkey Kong Country', console: 'nintendo', image: 'assets/images/dkc.png', url: 'games/donkey-kong-country.html' },
    { title: 'PES 2', console: 'playstation', image: 'assets/images/pes2.png', url: 'games/PES-2.html' },
    { title: 'Pac-Man', console: 'outros', image: 'assets/images/pac.png', url: 'games/pac-man.html' },
    { title: 'Dragon Ball Z - Final Bout', console: 'playstation', image: 'assets/images/db-gt-fb.png', url: 'games/db-gt-final-bout.html' },
    { title: 'Top Gear', console: 'nintendo', image: 'assets/images/top-gear.png', url: 'games/top-gear.html' },
    { title: 'F-Zero', console: 'nintendo', image: 'assets/images/f-zero.png', url: 'games/f-zero.html' },
    { title: 'Super Ghoulsn Ghosts', console: 'nintendo', image: 'assets/images/super-ghouls.png', url: 'games/super-ghouls-n-ghost.html' },
    { title: 'Super Bomberman 4', console: 'nintendo', image: 'assets/images/super-bomb-4.png', url: 'games/super-bomb-4.html' },
    { title: 'Vigilante 8 - 2nd Offense', console: 'playstation', image: 'assets/images/vigilante-8.png', url: 'games/vigilante-8-2nd-ofense.html' },
    { title: 'Mario Kart 64', console: 'nintendo', image: 'assets/images/mario-kart-64.png', url: 'games/mario-kart-64.html' },
    { title: 'Crash Bandicoot', console: 'playstation', image: 'assets/images/crash-bandi.png', url: 'games/crash-bandi.html' },
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