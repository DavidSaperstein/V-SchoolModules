const readline = require('readline-sync');

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const destinedHero = {
    name: 'Destined Hero',
    baseHealth: 30,
    currentHealth: 30,
    attack: 5,
    weapon: 'Wooden Sword',
}
const name = readline.question("What is your name? ");
destinedHero.name = name
const inventory = ['Wooden Sword']

const enemies = [
    {
        name: 'goblin',
        capitalName: `Goblin`,
        baseHealth: 10,
        currentHealth: 10,
        attack: 3,
        drop: [' Dirty Rags', 'Dagger', `Moldy Bread`]
    },
    {
        name: 'elf',
        capitalName: `Elf`,
        baseHealth: 20,
        currentHealth: 20,
        attack: 5,
        drop: [' Key', 'Longsword', 'Armor']
    },
    {
        name: 'Dark Lord',
        capitalName: `Dark Lord`,
        baseHealth: 50,
        currentHealth: 50,
        attack: 10,
        drop: [`Nothing`, `Nothing`, `Nothing`],
        isAlive: true
    }
]

const nonCombatOptions = () => {
    walkChoice = readline.keyIn(` Press W to Move Forward \n Press S to Check Status \n Press D to Rest `, {limit: 'wsd'})
    if (walkChoice === `w`) {
        console.log(`\n`)
        moveForward()
        console.log(`\n`)
    } else if (walkChoice === `s`) {
        console.log(`\n`)
        checkStatus()
        console.log(`\n`)   
    } else if (walkChoice === `d`) {
        console.log(`\n`) 
        rest()
        console.log(`\n`)  
    } else {
        console.log(`\n`)
        console.log(`Can't you follow instructions?`)
        console.log(`\n`)   
    }
}

const attack = () => {
    let damage = destinedHero.attack+random(1,6)
    return damage
}

const enemyAttack = (enemy) => {
    let damage = enemy.attack+random(1,6)
    return damage
}

const deadHero = () => {
    if (destinedHero.currentHealth <= 0) {
    console.log(`You have died. Better luck next time?`)
    }
}

const loot = (enemyLoot) => {
    if (enemyLoot.currentHealth <= 0 && destinedHero.currentHealth > 0) {
        let treasure = enemyLoot.drop[random(0,2)]
        inventory.push(treasure)
        console.log(`The ${enemyLoot.name} dropped a ${treasure}.`)
        if (treasure === `Longsword`) {
            destinedHero.attack = 10
            destinedHero.weapon = `Longsword`
        } else if (treasure === `Dagger` && destinedHero.weapon != `Longsword`) {
            destinedHero.attack = 7
            destinedHero.weapon = `Dagger`
        } else if (treasure === `Armor`) {
            destinedHero.baseHealth = 50
        }
    }
}

const run = (runningFrom) => {
    let runChance = random(1,10)
    if (runChance > 7) {
        let currentEnemyAttack = enemyAttack(runningFrom)
        destinedHero.currentHealth -= currentEnemyAttack
        console.log(`The ${runningFrom.name}'s attack does ${currentEnemyAttack} damage to you! \n`)
    } else {
        console.log(`You successfully escape.`)
    }
    return runChance
}

const isTheDarkLordDead = (monster) => {
    if (monster.currentHealth <= 0 & monster.name === `Dark Lord` && destinedHero.currentHealth > 0) {
        enemies[2].isAlive = false
    }
}

const fight = () => {
    console.log(`\n`)
    let randomEncounter = random(1,10)
    let currentEnemy = {}
    if (randomEncounter <= 5) {
        currentEnemy = enemies[0]
        console.log(`You come across a small green creature with a repulsive visage. The goblin attacks you.`)
    } else if (randomEncounter > 5 && randomEncounter < 9) {
        currentEnemy = enemies[1]
        console.log(`You see an ephemerally beautiful humanoid in pristine armor wielding a finely crafted sword. It notices you. You notice the elf's fangs.  Good luck.`)
    } else {
        currentEnemy = enemies[2]
        console.log(`You finally find the lord of this infernal place. The Dark Lord does not appreciate your trespass. En Garde!`)
    }
    while (currentEnemy.currentHealth > 0 && destinedHero.currentHealth > 0 ) {        
        console.log(`${currentEnemy.capitalName} Health: ${currentEnemy.currentHealth}        ${destinedHero.name} Health: ${destinedHero.currentHealth}`)
        let fightChoice = readline.keyIn(`Press A to Attack \nPress R to run \nWhat do?   `, {limit:`ar`})
        if (fightChoice === `a`) {
            let currentAttack = attack()
            currentEnemy.currentHealth -= currentAttack
            console.log(`You deal ${currentAttack} damage to the ${currentEnemy.name}!`)
            if (currentEnemy.currentHealth > 0 && destinedHero.currentHealth > 0) {
                let currentEnemyAttack = enemyAttack(currentEnemy)
                destinedHero.currentHealth -= currentEnemyAttack
                console.log(`The ${currentEnemy.name}'s attack does ${currentEnemyAttack} damage to you! \n`)
            }
        } else if (fightChoice === `r`) {
            let successOrFail = run(currentEnemy)
            if (successOrFail < 8) {
                break
            }
        }  
    }
    isTheDarkLordDead(currentEnemy)
    deadHero()
    loot(currentEnemy)
    if (currentEnemy != enemies[2]) {
        currentEnemy.currentHealth = currentEnemy.baseHealth
        console.log(`Congratulations! You are victorious!`)    
    } else if (currentEnemy === enemies[2] && enemies[2].currentHealth <= 0) {
        console.log(`You have cleansed the realm of the evil that was the Dark Lord. You have my thanks.`)
    }
}

const moveForward = () => {
    let randomEncounter = random(1,10)
    if (randomEncounter <= 3) {
        fight()
    }
}

const checkStatus = () => {
    console.log(`Name: ${destinedHero.name}  Max Health: ${destinedHero.baseHealth}  Health: ${destinedHero.currentHealth}  Attack: ${destinedHero.attack}  Weapon: ${destinedHero.weapon}`)
    console.log(`Inventory: ${inventory.join(", ")}`)
}

const rest = () => {
    destinedHero.currentHealth += 20
    if (destinedHero.currentHealth > destinedHero.baseHealth) {
        destinedHero.currentHealth = destinedHero.baseHealth
    }
    if (random(1,10) > 7) {
        fight()
    }
}


console.log(`${destinedHero.name}? That sounds made up.  No matter. You've made your way to the infernal lair of the Dark Lord.  Find it, kill it, and save the realm. \n`)

while(enemies[2].isAlive === true && destinedHero.currentHealth > 0) {
    nonCombatOptions()
}


