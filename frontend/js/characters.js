// Character Database
const characterDatabase = {
    arjuna: {
        name: 'ARJUNA',
        emoji: '🏹',
        title: 'Divinely Blessed Archer',
        color: '#6b8dff',
        stats: {
            health: 95,
            mana: 90,
            strength: 80,
            agility: 90,
            intelligence: 85,
            stamina: 85,
            wisdom: 88
        },
        weapons: {
            primary: 'Gandiva Bow',
            secondary: 'Divine Sword',
            ultimate: 'Brahmastra'
        },
        skills: [
            {
                name: 'Gandiva Barrage',
                description: 'Rapid arrow attacks',
                cooldown: 2,
                manaCost: 20,
                damage: 40,
                level: 1
            },
            {
                name: 'Divine Arrow Rain',
                description: 'Rain down divine arrows',
                cooldown: 8,
                manaCost: 50,
                damage: 80,
                level: 1
            },
            {
                name: 'Eagle Eye Precision',
                description: 'Perfect aim and critical chance',
                cooldown: 5,
                manaCost: 30,
                damage: 60,
                level: 1,
                passive: true
            },
            {
                name: 'Brahmastra',
                description: 'Ultimate divine weapon',
                cooldown: 30,
                manaCost: 100,
                damage: 250,
                level: 1,
                ultimate: true
            }
        ],
        abilities: {
            passive1: 'Celestial Archer - 10% increased damage',
            passive2: 'Divine Guidance - Arrows never miss',
            active1: 'Arrow Storm',
            active2: 'Divine Protection'
        }
    },

    bhima: {
        name: 'BHIMA',
        emoji: '💪',
        title: 'The Mighty Strength Warrior',
        color: '#d4741e',
        stats: {
            health: 120,
            mana: 70,
            strength: 100,
            agility: 70,
            intelligence: 70,
            stamina: 95,
            wisdom: 75
        },
        weapons: {
            primary: 'Divine Gada',
            secondary: 'War Axe',
            ultimate: 'Vayu Burst'
        },
        skills: [
            {
                name: 'Gada Smash',
                description: 'Powerful mace strike',
                cooldown: 2,
                manaCost: 25,
                damage: 60,
                level: 1
            },
            {
                name: 'Earthquake Surge',
                description: 'Creates shockwave damage',
                cooldown: 8,
                manaCost: 45,
                damage: 90,
                level: 1
            },
            {
                name: 'Rage Mode',
                description: 'Increase damage but reduce defense',
                cooldown: 10,
                manaCost: 40,
                damage: 120,
                level: 1,
                buff: true
            },
            {
                name: 'Vayu Power Burst',
                description: 'Ultimate wind power',
                cooldown: 30,
                manaCost: 100,
                damage: 280,
                level: 1,
                ultimate: true
            }
        ],
        abilities: {
            passive1: 'Raw Strength - Base damage +15%',
            passive2: 'Earth Guard - Reduce incoming damage by 10%',
            active1: 'Unstoppable Force',
            active2: 'Primal Roar'
        }
    },

    yudhishthira: {
        name: 'YUDHISHTHIRA',
        emoji: '👑',
        title: 'The Righteous Leader',
        color: '#c9a227',
        stats: {
            health: 100,
            mana: 110,
            strength: 75,
            agility: 75,
            intelligence: 95,
            stamina: 80,
            wisdom: 98
        },
        weapons: {
            primary: 'Dharma Staff',
            secondary: 'Holy Sword',
            ultimate: 'Divine Judgment'
        },
        skills: [
            {
                name: 'Holy Strike',
                description: 'Staff strike with holy power',
                cooldown: 2,
                manaCost: 20,
                damage: 35,
                level: 1
            },
            {
                name: 'Healing Blessing',
                description: 'Heal self and nearby allies',
                cooldown: 6,
                manaCost: 50,
                heal: 60,
                level: 1,
                support: true
            },
            {
                name: 'Dharma Aura',
                description: 'Create protective barrier',
                cooldown: 8,
                manaCost: 40,
                defense: 30,
                level: 1,
                buff: true
            },
            {
                name: 'Divine Judgment',
                description: 'Ultimate justice strike',
                cooldown: 30,
                manaCost: 100,
                damage: 200,
                level: 1,
                ultimate: true,
                support: true
            }
        ],
        abilities: {
            passive1: 'Righteous Leader - Team gains +5% all stats',
            passive2: 'Dharmic Protection - Reduce status effects',
            active1: 'Rally Cry',
            active2: 'Holy Sanctuary'
        }
    },

    nakula: {
        name: 'NAKULA',
        emoji: '⚡',
        title: 'The Swift Swordmaster',
        color: '#4dd0e1',
        stats: {
            health: 85,
            mana: 85,
            strength: 80,
            agility: 98,
            intelligence: 80,
            stamina: 88,
            wisdom: 78
        },
        weapons: {
            primary: 'Twin Swords',
            secondary: 'Lightning Blade',
            ultimate: 'Speed Vortex'
        },
        skills: [
            {
                name: 'Swift Slash',
                description: 'Quick sword attacks',
                cooldown: 1,
                manaCost: 15,
                damage: 35,
                level: 1
            },
            {
                name: 'Lightning Combo',
                description: 'Multi-hit fast attack',
                cooldown: 5,
                manaCost: 40,
                damage: 85,
                level: 1,
                hits: 3
            },
            {
                name: 'Shadow Dash',
                description: 'Evade and counter attack',
                cooldown: 4,
                manaCost: 30,
                damage: 50,
                level: 1,
                dodge: true
            },
            {
                name: 'Speed Vortex',
                description: 'Ultimate spinning attack',
                cooldown: 30,
                manaCost: 100,
                damage: 220,
                level: 1,
                ultimate: true
            }
        ],
        abilities: {
            passive1: 'Swift Warrior - Attack speed +20%',
            passive2: 'Wind Motion - Dodge chance +15%',
            active1: 'Blade Dance',
            active2: 'Ghoststrike'
        }
    },

    sahadeva: {
        name: 'SAHADEVA',
        emoji: '🔮',
        title: 'The Mystical Seer',
        color: '#7e57c2',
        stats: {
            health: 90,
            mana: 120,
            strength: 75,
            agility: 85,
            intelligence: 98,
            stamina: 80,
            wisdom: 95
        },
        weapons: {
            primary: 'Mystic Sword',
            secondary: 'Prophecy Staff',
            ultimate: 'Temporal Rupture'
        },
        skills: [
            {
                name: 'Mystic Strike',
                description: 'Magic-infused attack',
                cooldown: 2,
                manaCost: 25,
                damage: 40,
                level: 1
            },
            {
                name: 'Future Vision',
                description: 'See enemy weaknesses',
                cooldown: 8,
                manaCost: 50,
                level: 1,
                support: true
            },
            {
                name: 'Time Slow',
                description: 'Slow down time briefly',
                cooldown: 10,
                manaCost: 60,
                level: 1,
                buff: true
            },
            {
                name: 'Temporal Rupture',
                description: 'Ultimate time manipulation',
                cooldown: 30,
                manaCost: 100,
                damage: 180,
                level: 1,
                ultimate: true
            }
        ],
        abilities: {
            passive1: 'Mystic Affinity - Mana regeneration +10%',
            passive2: 'Foresight - Predict enemy moves',
            active1: 'Chaos Magic',
            active2: 'Temporal Shift'
        }
    },

    krishna: {
        name: 'LORD KRISHNA',
        emoji: '🔱',
        title: 'The Infinite Supreme',
        color: '#ffff00',
        isAdmin: true,
        isHidden: true,
        stats: {
            health: 9999,
            mana: 9999,
            strength: 999,
            agility: 999,
            intelligence: 999,
            stamina: 999,
            wisdom: 999
        },
        weapons: {
            primary: 'Sudarshana Chakra',
            secondary: 'Divine Flute',
            ultimate: 'Vishwaroopam'
        },
        skills: [
            {
                name: 'Chakra Attack',
                description: 'Divine discus strike',
                cooldown: 0,
                manaCost: 0,
                damage: 9999,
                level: 99
            },
            {
                name: 'Teleportation',
                description: 'Instant movement',
                cooldown: 0,
                manaCost: 0,
                level: 99
            },
            {
                name: 'Time Control',
                description: 'Manipulate time',
                cooldown: 0,
                manaCost: 0,
                level: 99
            },
            {
                name: 'Vishwaroopam',
                description: 'Show infinite cosmic form',
                cooldown: 0,
                manaCost: 0,
                damage: 999999,
                level: 99,
                ultimate: true
            },
            {
                name: 'Battlefield Freeze',
                description: 'Stop all enemies',
                cooldown: 0,
                manaCost: 0,
                level: 99
            },
            {
                name: 'Divine Army Summon',
                description: 'Summon infinite army',
                cooldown: 0,
                manaCost: 0,
                level: 99
            },
            {
                name: 'Reality Manipulation',
                description: 'Change reality itself',
                cooldown: 0,
                manaCost: 0,
                level: 99,
                ultimate: true
            },
            {
                name: 'Instant Healing',
                description: 'Heal all damage instantly',
                cooldown: 0,
                manaCost: 0,
                heal: 9999,
                level: 99
            }
        ],
        abilities: {
            passive1: 'Infinite Power - No cooldowns, no mana cost',
            passive2: 'Godly Presence - All enemies fear you',
            passive3: 'Karma Control - Manipulate destiny',
            active1: 'Cosmic Manipulation',
            active2: 'Universal Vision'
        }
    }
};

// Get Character Data
function getCharacterData(characterId) {
    return characterDatabase[characterId] || null;
}

// Create Character Card UI
function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.style.borderColor = character.color;
    card.innerHTML = `
        <div class="character-image" style="font-size: 3rem;">${character.emoji}</div>
        <div class="character-name" style="color: ${character.color};">${character.name}</div>
        <div class="character-role">${character.title}</div>
        <div class="character-description">${character.description || 'Divine warrior'}</div>
    `;
    return card;
}

// Load Character Skills UI
function loadCharacterSkills(characterId) {
    const character = getCharacterData(characterId);
    const skillsTree = document.querySelector('.skills-tree');
    skillsTree.innerHTML = '';

    character.skills.forEach((skill, index) => {
        const skillNode = document.createElement('div');
        skillNode.className = 'skill-node unlocked';
        skillNode.innerHTML = `
            <div class="skill-icon">⚡</div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-desc">${skill.description}</div>
            <div class="skill-cost">Cost: ${skill.manaCost} Mana | CD: ${skill.cooldown}s</div>
            ${skill.damage ? `<div class="skill-damage">DMG: ${skill.damage}</div>` : ''}
            <div class="skill-level">Lvl ${skill.level}</div>
        `;
        skillsTree.appendChild(skillNode);
    });
}

// Display Character Status
function displayCharacterStatus(character) {
    const portrait = document.getElementById('charPortrait');
    portrait.textContent = character.emoji;
    portrait.style.fontSize = '4rem';

    updateHUDStatus();
}

// Update HUD Status
function updateHUDStatus() {
    const stats = gameState.playerStats;
    
    document.getElementById('healthBar').style.width = `${(stats.health / stats.maxHealth) * 100}%`;
    document.getElementById('healthText').textContent = `${Math.ceil(stats.health)}/${stats.maxHealth}`;
    
    document.getElementById('manaBar').style.width = `${(stats.mana / stats.maxMana) * 100}%`;
    document.getElementById('manaText').textContent = `${Math.ceil(stats.mana)}/${stats.maxMana}`;
    
    document.getElementById('ultimateBar').style.width = `${stats.ultimate}%`;
    document.getElementById('ultimateText').textContent = `Ultimate: ${Math.ceil(stats.ultimate)}%`;
}

// Export functions
window.getCharacterData = getCharacterData;
window.loadCharacterSkills = loadCharacterSkills;
window.displayCharacterStatus = displayCharacterStatus;
window.updateHUDStatus = updateHUDStatus;
