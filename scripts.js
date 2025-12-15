
const games = [
    { title: 'Super Mario World', console: 'nintendo', image: 'assets/images/mario.webp', url: 'games/super-mario-world.html' },
    { title: 'Mario Kart Deluxe', console: 'nintendo', image: 'assets/images/mario-kart.webp', url: 'games/mario-kart.html' },
    { title: 'Crash Team Racing', console: 'playstation', image: 'assets/images/ctr.webp', url: 'games/ctr.html' },
    { title: 'Harry Potter And The Sorcerers Stone', console: 'playstation', image: 'assets/images/hp-stone.webp', url: 'games/hp-sorcerer-stone.html' },
    { title: 'Harry Potter and the Chamber of Secrets', console: 'playstation', image: 'assets/images/hp-chamber.webp', url: 'games/hp-chamber-of-secrets.html' },
    { title: 'Donkey Kong Country', console: 'nintendo', image: 'assets/images/dkc.webp', url: 'games/donkey-kong-country.html' },
    { title: 'Donkey Kong Country 2: Diddy\'s Kong Quest', console: 'nintendo', image: 'assets/images/dkc-2.webp', url: 'games/donkey-kong-country-2.html' },
    { title: 'Donkey Kong Country 3', console: 'nintendo', image: 'assets/images/dkc-3.webp', url: 'games/donkey-kong-country-3.html' },
    { title: 'PES 2', console: 'playstation', image: 'assets/images/pes2.png', url: 'games/PES-2.html' },
    { title: 'Pac-Man', console: 'arcade', image: 'assets/images/pac.png', url: 'games/pac-man.html' },
    { title: 'Donkey Kong', console: 'arcade', image: 'assets/images/dk.webp', url: 'games/donkey-kong.html' },
    { title: 'Dragon Ball Z - Final Bout', console: 'playstation', image: 'assets/images/db-gt-fb.png', url: 'games/db-gt-final-bout.html' },
    { title: 'Top Gear', console: 'nintendo', image: 'assets/images/top-gear.png', url: 'games/top-gear.html' },
    { title: 'F-Zero', console: 'nintendo', image: 'assets/images/f-zero.png', url: 'games/f-zero.html' },
    { title: 'Super Ghoulsn Ghosts', console: 'nintendo', image: 'assets/images/super-ghouls.png', url: 'games/super-ghouls-n-ghost.html' },
    { title: 'Sunset Riders', console: 'nintendo', image: 'assets/images/sunset-riders.png', url: 'games/sunset-riders.html' },
    { title: 'Super Bomberman 4', console: 'nintendo', image: 'assets/images/super-bomb-4.png', url: 'games/super-bomb-4.html' },
    { title: 'Vigilante 8 - 2nd Offense', console: 'playstation', image: 'assets/images/vigilante-8.webp', url: 'games/vigilante-8-2nd-ofense.html' },
    { title: 'Mario Kart 64', console: 'nintendo', image: 'assets/images/mario-kart-64.png', url: 'games/mario-kart-64.html' },
    { title: 'Crash Bandicoot', console: 'playstation', image: 'assets/images/crash-bandi.webp', url: 'games/crash-bandi.html' },
    { title: 'Michael Jackson Moonwalker', console: 'sega', image: 'assets/images/mj-moonwalker.png', url: 'games/mj-moonwalker.html' },
    { title: 'Super Monaco GP', console: 'sega', image: 'assets/images/super-monaco-gp.webp', url: 'games/super-monaco-gp.html' },
    { title: 'Pokemon FireRed', console: 'nintendo', image: 'assets/images/pokemon-fr.png', url: 'games/pokemon-fr.html' },
    { title: 'Top Gear 3000', console: 'nintendo', image: 'assets/images/tg3000.webp', url: 'games/top-gear-3000.html' },
    { title: 'International Superstar Soccer Deluxe', console: 'nintendo', image: 'assets/images/internacional-superstar-soccer-deluxe.png', url: 'games/international.html' },
    { title: 'Road Rash - Jailbreak', console: 'playstation', image: 'assets/images/road-rash-jailbreak.png', url: 'games/road-rash-jailbreak.html' },
    { title: 'Goof Troop', console: 'nintendo', image: 'assets/images/goof-troop.png', url: 'games/goof-troop.html' },
    { title: 'Rock N Roll Racing', console: 'nintendo', image: 'assets/images/rock-n-roll-racing.png', url: 'games/rock-n-roll-racing.html' },
    { title: 'Sicari 2: The Brink of Time', console: 'nintendo', image: 'assets/images/sicari2.png', url: 'games/sicari-2-the-brink-of-time.html' },
    { title: 'Tekken 3', console: 'playstation', image: 'assets/images/tekken3.webp', url: 'games/tekken-3.html' },
    { title: 'Sonic', console: 'sega', image: 'assets/images/sonic.webp', url: 'games/sonic-the-headgehog.html' },
    { title: 'Sonic 2', console: 'sega', image: 'assets/images/sonic2.webp', url: 'games/sonic-the-headgehog-2.html' },
    { title: 'Tony Hawks Pro Skater', console: 'playstation', image: 'assets/images/tony.webp', url: 'games/tony-hawks-pro-skater.html' },
    { title: 'Tony Hawks Pro Skater 2', console: 'playstation', image: 'assets/images/tony2.webp', url: 'games/tony-hawks-pro-skater-2.html' },
    { title: 'Tony Hawks Pro Skater 3', console: 'playstation', image: 'assets/images/tony3.webp', url: 'games/tony-hawks-pro-skater-3.html' },
    { title: 'Tony Hawks Pro Skater 4', console: 'playstation', image: 'assets/images/tony4.webp', url: 'games/tony-hawks-pro-skater-4.html' },
    { title: 'Prince of Persia', console: 'sega', image: 'assets/images/prince-of-persia.webp', url: 'games/prince-of-persia.html' },
    { title: '007 - The World Is Not Enough', console: 'playstation', image: 'assets/images/007-twine.webp', url: 'games/007-the-world-is-not-enough.html' },
    { title: 'Spider-Man', console: 'playstation', image: 'assets/images/spider-man.webp', url: 'games/spider-man.html' },
    { title: 'Aladdin', console: 'nintendo', image: 'assets/images/aladdin.webp', url: 'games/aladdin.html' },
    { title: 'Turma da Monica: O Resgate', console: 'sega', image: 'assets/images/turma-da-monica.webp', url: 'games/turma-da-monica-o-resgate.html' },
    { title: 'Super Smash Bros', console: 'nintendo', image: 'assets/images/super-smash-bros.webp', url: 'games/super-smash-bros.html' },
    { title: 'Final Fantasy Chronicles - Chrono Trigger', console: 'playstation', image: 'assets/images/ff-chrono.webp', url: 'games/final-fantasy-chronicles-chrono-trigger.html' },
    { title: 'Speedy Gonzales in Los Gatos Bandidos', console: 'nintendo', image: 'assets/images/ligeirinho.webp', url: 'games/speedy-gonzales-in-los-gatos-bandidos.html' },
    { title: 'Disneys Hercules', console: 'playstation', image: 'assets/images/disneys-hercules.webp', url: 'games/disneys-hercules.html' },
    { title: 'Mercs', console: 'arcade', image: 'assets/images/mercs.webp', url: 'games/mercs.html' },
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

// Reading Bar / Barra de Leitura Horizontal
window.onscroll = function() {
    const readingEl = document.getElementById("readingBar");
    if (!readingEl) return;

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = 0;

    if (height > 0) {
        scrolled = (winScroll / height) * 100;
        if (!isFinite(scrolled) || isNaN(scrolled)) scrolled = 0;
    }

    readingEl.style.width = scrolled.toFixed(2) + "%";
};