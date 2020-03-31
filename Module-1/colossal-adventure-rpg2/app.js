const readline = require('readline-sync');

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// while (darkLordAlive = true) {
// }

const destinedHero = {
    name: 'Destined Hero',
    health: 30,
    attack: 5,
    weapon: 'Wooden Sword',
}

inventory = ['Wooden Sword']

const enemies = [

    goblin = {
        name: 'goblin',
        capitalName: `Goblin`,
        health: 10,
        attack: 3,
        drop: ['Dirty Rags', 'Dagger', `Moldy Bread`]
    },

    elf = {
        name: 'elf',
        capitalName: `Elf`,
        health: 20,
        attack: 5,
        drop: ['Key', 'Longsword', 'Armor']
    },

    darkLord = {
        name: 'Dark Lord',
        capitalName: `Dark Lord`,
        health: 50,
        attack: 10,
        drop: [`Nothing`, `Nothing`, `Nothing`],
        isAlive: true
    }
]

const fightOptions = ['Attack', 'Run']
const walkOptions = ['Move Up', 'Status', 'Rest']

const nonCombatOptions =  () => {
    walkChoice = readline.keyIn(` Press W to Move Forward \n Press S to Check Status \n Press D to Rest `, {limit: 'wasd'})
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
    if (destinedHero.health <= 0) {
    console.log(`You have died. Better luck next time?`)
    }
}

const loot = (enemyLoot) => {
    if (enemyLoot.health <= 0 && destinedHero.health > 0) {
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
            destinedHero.health = 50
        } else {

        }
    }
}

const run = (runningFrom) => {
    let runChance = random(1,10)
    if (runChance > 7) {
        let currentEnemyAttack = enemyAttack(runningFrom)
        destinedHero.health -= currentEnemyAttack
        console.log(`The ${runningFrom.name}'s attack does ${currentEnemyAttack} damage to you! \n`)
    } else {
        console.log(`You successfully escape.`)
    }
    return runChance
}

const fight = () => {
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
    while (currentEnemy.health > 0 && destinedHero.health > 0 ) {        
        console.log(`${currentEnemy.capitalName} Health: ${currentEnemy.health}        ${destinedHero.name} Health: ${destinedHero.health}`)
        let fightChoice = readline.keyIn(`Press A to Attack \nPress R to run \nWhat do?   `, {limit:`ar`})
        if (fightChoice === `a`) {
            let currentAttack = attack()
            currentEnemy.health -= currentAttack
            console.log(`You deal ${currentAttack} damage to the ${currentEnemy.name}!`)
            if (currentEnemy.health > 0 && destinedHero.health > 0) {
                let currentEnemyAttack = enemyAttack(currentEnemy)
                destinedHero.health -= currentEnemyAttack
                console.log(`The ${currentEnemy.name}'s attack does ${currentEnemyAttack} damage to you! \n`)
            }
        } else if (fightChoice === `r`) {
            let successOrFail = run(currentEnemy)
            if (successOrFail < 8) {
                break
            }
        }  
    }
    deadHero()
    loot(currentEnemy)
}

const moveForward = () => {
    let randomEncounter = random(1,10)
    if (randomEncounter <= 3) {
        fight()
    }
}

fight()