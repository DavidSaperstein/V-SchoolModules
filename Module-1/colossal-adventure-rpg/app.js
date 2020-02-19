const readline = require('readline-sync');

const hero = {
    name: 'Destined Hero',
    health: 50,
    weapon: 'Wooden Sword',
    inventory: []
}

const name = readline.question('What is your name? ');

if (name.length > 0) {
    hero.name = name
}

const dangers = [
    goblin = {
        health: 10,
        weapon: 'Dagger',
        drops: ['Potion', 'Dagger']
    }, 
    elf = {
        health: 15,
        weapon: 'Sword',
        drops: ['Scroll of Fireball', 'Sword', 'Nothing']
    },
    darkLord = {
        health: 50,
        weapon: 'Evil Magic Staff of Doom',
        drops: ['Nothing'],
        alive: true
    }]

const fightOptions = ['Attack', 'Use Item', 'Run']
const walkOptions = ['Move Up', 'Use Item', 'Status', 'Rest']


let walkChoice = ''

const nonCombatOptions =  () => {
    walkChoice = readline.keyIn(` Press W to move forward \n Press A to Use Item \n Press S to Check Status \n Press D to Rest `, {limit: 'wasd'})
}

const status = () => (
    console.log(` Name: ${hero.name} \n Health: ${hero.health} \n Weapon: ${hero.weapon}`)
)

const moveForward = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const event =  Math.floor(Math.random() * (max - min + 1)) + min
    if (event <= 3) {
        
    }
}
const opponent = {}
const goblinFight = () => {
    opponent = dangers[0]
    console.log(opponent)
    console.log(`As you make your way down up the spire, you come to a landing. Just a few feet down the dark corridor, you see a small green humanoid sitting by a campfire. The creature turns its horrid green facade in your direction, bellows an incoherant battle-cry, and charges toward you.`)

    while (opponent.health > 0) {
        let fightChoice = readline.keyInSelect(fightOptions, `${hero.name} what do you do?`)

        if (fightChoice === 0) {
            attack()
        }
    }
    console.log(`The goblin is defeated`)
}

function attack() {
    if (hero.weapon === 'Wooden Sword') {
        opponent.health -= 4
        console.log(`You swing your sword and deal 4 points of damage to the ${opponent.name}`)
    } else if (hero.weapon === 'Dagger') {
        opponent.health -= 6
        console.log(`You swing your sword and deal 6 points of damage to the ${opponent.name}`)
    } else if (hero.weapon === 'Sword') {
        opponent.health -= 8
        console.log(`You swing your sword and deal 8 points of damage to the ${opponent.name}`)
    }
}


goblinFight()
// while (darkLord.alive === true) {


// }

