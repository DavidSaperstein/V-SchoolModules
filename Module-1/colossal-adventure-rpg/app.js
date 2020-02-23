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
        name: "goblin",
        health: 10,
        weapon: 'Dagger',
        drops: ['Potion', 'Dagger'],
        dialogue: `As you make your way down up the spire, you come to a landing. Just a few feet down the dark corridor, you see a small green humanoid sitting by a campfire. The creature turns its horrid green facade in your direction, bellows an incoherant battle-cry, and charges.`
    }, 
    elf = {
        name: "elf",
        health: 15,
        weapon: 'Sword',
        drops: ['Scroll of Fireball', 'Sword', 'Nothing'],
        dialogue: `You see a slim being of indescribable beauty in unbelievably shiny armor. There is a faint glow about them. Their features are perfectly symetrical, their skin perfectly smooth. Their teeth perfectly sharp. Their smile...perfectly malicious. They spot you and hiss "Well come on then, have at thee."`
    },
    darkLord = {
        name: "Dark Lord",
        health: 5,
        weapon: 'Evil Magic Staff of Doom',
        drops: ['Nothing'],
        dialogue: `Traveling through the darkness you have conquered many evils. None prepared you for what you see. A shadowy figure emenating such evil that being in its meer presence causes you to recoil. It turns around, leaving a small spherical object to roll away. It pull downs its hood with two furry hands and says in a gutteral, unnerving voice "Meow." Before this dungeon, a time that feels long ago now, you had no idea how malignant this creature was. Until that day when you got home late and couldn't feed him on time. He revealed to you what he truly was, knocked you out, and dragged your unconcious form to this god-forsaken dungeon. Now it is you or Mr. Scratch. Are you up to the challenge, hero?`,
        alive: true,
        defeat: `You have bested your beloved pet in mortal combat. Congratulations, "hero," you're free.`
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

const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const event =  Math.floor(Math.random() * (max - min + 1)) + min
    return event    
}


let opponent = {}
const goblinFight = () => {
    const baseHealth = dangers[0].health
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
    dangers[0].health = baseHealth
}

const fight = (monster) => {
    const baseHealth = dangers[monster].health
    opponent = dangers[monster]
    console.log(dangers[monster].dialogue)
    console.log(opponent)

    while (opponent.health > 0) {
        let fightChoice = readline.keyInSelect(fightOptions, `${hero.name} what do you do?`)

        if (fightChoice === 0) {
            attack()
        }
    }

    if (dangers[monster] != 2) {
        console.log(`You have defeated the ${dangers[monster].name}. Well done.`)
    } else {
        console.log(dangers[monster].defeat)
    }
    dangers[monster].health = baseHealth
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

// const moveForward = () => {
//     const eventResult = random(0, 4)
//     if (eventResult < 3) {
//         fight(eventResult)
//     } else if (eventResult === 3) {
//         treasure(random(1,10))
//     } else {
//         rest()
//     }
// }


fight(2)
// while (darkLord.alive === true) {


// }

