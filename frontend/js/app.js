// Game State Management
const gameState = {
    currentScreen: 'titleScreen',
    currentPlayer: null,
    selectedCharacter: null,
    gameProgress: {
        chapter: 1,
        level: 1,
        experience: 0,
        questsCompleted: 0
    },
    isAdminMode: false,
    currentMission: null,
    unlockedCharacters: ['arjuna', 'bhima', 'yudhishthira', 'nakula', 'sahadeva'],
    playerStats: {
        health: 100,
        maxHealth: 100,
        mana: 100,
        maxMana: 100,
        ultimate: 0,
        maxUltimate: 100
    }
};

// Screen Navigation
function showScreen(screenId) {
    const currentScreen = document.querySelector('.screen.active');
    const newScreen = document.getElementById(screenId);

    if (currentScreen) {
        currentScreen.classList.remove('active');
    }

    if (newScreen) {
        newScreen.classList.add('active');
        gameState.currentScreen = screenId;
    }
}

// Start New Game
function startNewGame() {
    gameState.currentPlayer = {
        username: 'Hero',
        level: 1,
        experience: 0
    };
    loadCharacterSelection();
}

// Load Character Selection
function loadCharacterSelection() {
    const charactersGrid = document.querySelector('.characters-grid');
    charactersGrid.innerHTML = '';

    const characters = [
        {
            id: 'arjuna',
            name: 'ARJUNA',
            emoji: '🏹',
            role: 'Archer Warrior',
            description: 'Master of the divine Gandiva bow. Precise, swift, and unstoppable.',
            stats: {
                strength: 80,
                agility: 90,
                intelligence: 85,
                stamina: 85,
                wisdom: 88
            },
            abilities: [
                'Gandiva Barrage',
                'Divine Arrow',
                'Eagle Eye Precision',
                'Brahmastra Strike'
            ]
        },
        {
            id: 'bhima',
            name: 'BHIMA',
            emoji: '💪',
            role: 'Strength Warrior',
            description: 'Wielder of the mighty Gada. Raw power and earth-shaking force.',
            stats: {
                strength: 100,
                agility: 70,
                intelligence: 70,
                stamina: 95,
                wisdom: 75
            },
            abilities: [
                'Gada Smash',
                'Earthquake Surge',
                'Rage Mode',
                'Vayu Bursts'
            ]
        },
        {
            id: 'yudhishthira',
            name: 'YUDHISHTHIRA',
            emoji: '👑',
            role: 'Leader/Support',
            description: 'Just king of dharma. Leads with strategy and protects his team.',
            stats: {
                strength: 75,
                agility: 75,
                intelligence: 95,
                stamina: 80,
                wisdom: 98
            },
            abilities: [
                'Dharma Aura',
                'Healing Blessing',
                'Team Rally',
                'Divine Judgment'
            ]
        },
        {
            id: 'nakula',
            name: 'NAKULA',
            emoji: '⚡',
            role: 'Speed Fighter',
            description: 'Swift swordmaster. Speed and precision in every strike.',
            stats: {
                strength: 80,
                agility: 98,
                intelligence: 80,
                stamina: 88,
                wisdom: 78
            },
            abilities: [
                'Shadow Dash',
                'Lightning Combo',
                'Mirror Strike',
                'Speed Vortex'
            ]
        },
        {
            id: 'sahadeva',
            name: 'SAHADEVA',
            emoji: '🔮',
            role: 'Tactical/Magic',
            description: 'Seer with mystical foresight. Perceives weaknesses and controls time.',
            stats: {
                strength: 75,
                agility: 85,
                intelligence: 98,
                stamina: 80,
                wisdom: 95
            },
            abilities: [
                'Future Vision',
                'Weakness Detection',
                'Time Slow',
                'Mystical Barrier'
            ]
        }
    ];

    characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.onclick = () => selectCharacter(char);
        card.innerHTML = `
            <div class="character-image">${char.emoji}</div>
            <div class="character-name">${char.name}</div>
            <div class="character-role">${char.role}</div>
            <div class="character-description">${char.description}</div>
        `;
        charactersGrid.appendChild(card);
    });

    showScreen('characterScreen');
}

// Select Character
function selectCharacter(character) {
    const cards = document.querySelectorAll('.character-card');
    cards.forEach(card => card.classList.remove('selected'));

    event.currentTarget.classList.add('selected');
    gameState.selectedCharacter = character;

    // Update character info
    const infoBox = document.getElementById('characterInfo');
    infoBox.innerHTML = `
        <h3>${character.name}</h3>
        <div class="character-stats">
            <div class="stat">
                <div class="stat-name">Strength</div>
                <div class="stat-value">${character.stats.strength}</div>
            </div>
            <div class="stat">
                <div class="stat-name">Agility</div>
                <div class="stat-value">${character.stats.agility}</div>
            </div>
            <div class="stat">
                <div class="stat-name">Intelligence</div>
                <div class="stat-value">${character.stats.intelligence}</div>
            </div>
            <div class="stat">
                <div class="stat-name">Stamina</div>
                <div class="stat-value">${character.stats.stamina}</div>
            </div>
            <div class="stat">
                <div class="stat-name">Wisdom</div>
                <div class="stat-value">${character.stats.wisdom}</div>
            </div>
        </div>
        <div class="character-abilities">
            <h4>Abilities</h4>
            <div class="ability-list">
                ${character.abilities.map(ability => `
                    <div class="ability-item">
                        <div class="ability-name">⚔️ ${ability}</div>
                        <div class="ability-description">Divine warrior technique</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Confirm Character Selection
function confirmCharacterSelection() {
    if (!gameState.selectedCharacter) {
        alert('Please select a character');
        return;
    }

    gameState.currentCharacter = gameState.selectedCharacter;
    loadGameStart();
}

// Load Game Start
function loadGameStart() {
    // Play opening cutscene
    playOpening Cutscene();
}

// Play Opening Cutscene
function playOpeningCutscene() {
    showScreen('storyScreen');
    playNarration('The Mahabharata: A tale of five divine brothers...');
    setTimeout(() => {
        startGameMission();
    }, 5000);
}

// Start Game Mission
function startGameMission() {
    gameState.currentMission = {
        chapter: 1,
        name: 'The Childhood of Heroes',
        location: 'Hastinapura Palace',
        objective: 'Complete your training under Drona'
    };

    initializeGameEngine();
    showScreen('gameScreen');
}

// Event Listeners
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        togglePauseMenu();
    }

    if (gameState.currentScreen === 'gameScreen') {
        if (e.key === ' ') {
            gameState.playerStats.dodging = true;
        }
        if (e.code === 'KeyE') {
            useSkill();
        }
        if (e.code === 'KeyQ') {
            useUltimate();
        }
    }
});

// Pause Menu
function togglePauseMenu() {
    const pauseMenu = document.getElementById('pauseMenu');
    if (pauseMenu.style.display === 'none') {
        pauseMenu.style.display = 'flex';
    } else {
        pauseMenu.style.display = 'none';
    }
}

function resumeGame() {
    document.getElementById('pauseMenu').style.display = 'none';
}

// Narration System
function playNarration(text) {
    const narratorText = document.getElementById('narratorText');
    narratorText.textContent = text;
    narratorText.style.display = 'block';
}

function skipStory() {
    document.getElementById('storyScreen').classList.remove('active');
    startGameMission();
}

// Admin Access (Hidden)
function accessAdminMode() {
    const modal = document.getElementById('adminLogin');
    modal.style.display = 'flex';
}

function verifyAdminAccess() {
    const password = document.getElementById('adminPassword').value;
    if (password === 'KRISHNA' || password === 'krishna' || password === 'BHAGAVAD_GITA') {
        gameState.isAdminMode = true;
        gameState.unlockedCharacters.push('krishna');
        document.getElementById('adminLogin').style.display = 'none';
        alert('🔱 Welcome, Lord Krishna! Unlimited power unlocked.');
        showScreen('titleScreen');
    } else {
        alert('Access Denied. Incorrect divine code.');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 MAHABHARATA: DHARMA WARS initialized');
    showScreen('titleScreen');
});
