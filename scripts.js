
const games = [
    { title: 'Super Mario World', console: 'nintendo', image: 'assets/images/mario.webp', url: 'games/super-mario-world.html' },
    { title: 'Mario Kart Deluxe', console: 'nintendo', image: 'assets/images/mario-kart.png', url: 'games/mario-kart.html' },
    { title: 'Crash Team Racing', console: 'playstation', image: 'assets/images/ctr.png', url: 'games/ctr.html' },
    { title: 'Harry Potter And The Sorcerers Stone', console: 'playstation', image: 'assets/images/hp-stone.png', url: 'games/hp-sorcerer-stone.html' },
    { title: 'Donkey Kong Country', console: 'nintendo', image: 'assets/images/dkc.png', url: 'games/donkey-kong-country.html' },
    { title: 'PES 2', console: 'playstation', image: 'assets/images/pes2.png', url: 'games/PES-2.html' },
    { title: 'Pac-Man', console: 'outros', image: 'assets/images/pac.png', url: 'games/pac-man.html' },
    { title: 'Dragon Ball Z - Final Bout', console: 'playstation', image: 'assets/images/db-gt-fb.png', url: 'games/db-gt-final-bout.html' },
    { title: 'Top Gear', console: 'nintendo', image: 'assets/images/top-gear.png', url: 'games/top-gear.html' },
    { title: 'F-Zero', console: 'nintendo', image: 'assets/images/f-zero.png', url: 'games/f-zero.html' },
    { title: 'Super Ghoulsn Ghosts', console: 'nintendo', image: 'assets/images/super-ghouls.png', url: 'games/super-ghouls-n-ghost.html' },
    { title: 'Sunset Riders', console: 'nintendo', image: 'assets/images/sunset-riders.png', url: 'games/sunset-riders.html' },
    { title: 'Super Bomberman 4', console: 'nintendo', image: 'assets/images/super-bomb-4.png', url: 'games/super-bomb-4.html' },
    { title: 'Vigilante 8 - 2nd Offense', console: 'playstation', image: 'assets/images/vigilante-8.png', url: 'games/vigilante-8-2nd-ofense.html' },
    { title: 'Mario Kart 64', console: 'nintendo', image: 'assets/images/mario-kart-64.png', url: 'games/mario-kart-64.html' },
    { title: 'Crash Bandicoot', console: 'playstation', image: 'assets/images/crash-bandi.png', url: 'games/crash-bandi.html' },
    { title: 'Michael Jackson Moonwalker', console: 'megadrive', image: 'assets/images/mj-moonwalker.png', url: 'games/mj-moonwalker.html' },
    { title: 'Super Monaco GP', console: 'megadrive', image: 'assets/images/super-monaco-gp.png', url: 'games/super-monaco-gp.html' },
    { title: 'Pokemon FireRed', console: 'nintendo', image: 'assets/images/pokemon-fr.png', url: 'games/pokemon-fr.html' },
    { title: 'Top Gear 3000', console: 'nintendo', image: 'assets/images/tg3000.png', url: 'games/top-gear-3000.html' },
    { title: 'International Superstar Soccer Deluxe', console: 'nintendo', image: 'assets/images/internacional-superstar-soccer-deluxe.png', url: 'games/international.html' },
    { title: 'Road Rash - Jailbreak', console: 'playstation', image: 'assets/images/road-rash-jailbreak.png', url: 'games/road-rash-jailbreak.html' },
    { title: 'Goof Troop', console: 'nintendo', image: 'assets/images/goof-troop.png', url: 'games/goof-troop.html' },
    { title: 'Rock N Roll Racing', console: 'nintendo', image: 'assets/images/rock-n-roll-racing.png', url: 'games/rock-n-roll-racing.html' },
    { title: 'Sicari 2: The Brink of Time', console: 'nintendo', image: 'assets/images/sicari2.png', url: 'games/sicari-2-the-brink-of-time.html' },
    { title: 'Tekken 3', console: 'playstation', image: 'assets/images/tekken3.webp', url: 'games/tekken-3.html' },
    { title: 'Tekken 3', console: 'megadrive', image: 'assets/images/sonic.webp', url: 'games/sonic-the-headgehog.html' },
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

    // Remove a classe active de todos os itens
    document.querySelectorAll('.nav-menu li').forEach(li => {
        li.classList.remove('active');
    });
    event.target.classList.add('active');

    // Fecha o menu hamburguer em telas móveis
    const navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
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