const readline = require("readline-sync");
const name = readline.question("What is your name? ");
const options = ["Put hand in hole.", "Find the key.", "Open the door."]

let choice = readline.keyInSelect(options, `${name}? That sounds made up. No matter. You find yourself in a cold dark space. As you grope around nervously, you begin \n to understand your situation. You are in a small square room with a door on one side, two bare walls, and the wall \n opposite the door has a small hole that smells faintly of copper. When you listen carefully by the hole you can hear \n faint, but clear, screams of agony. You try the door and find that it's locked. What do you do?`)

while (choice != 1) {
    if (choice == 2) {
        choice = readline.keyInSelect(options, `You attempt to open a locked door. You mother must be so proud. What's your next trick?`)
    } else if (choice == 0) {
        console.log(`${name}, you stuck your hand in the conspicuously dangerous portal of doom. The world is collectively smarter, now that you're dead.`) 
        break
    } else if (choice == -1) {
        break
    }
}
if (choice == 1) {
    options.splice(1,1)
}

while (choice == 1) {
    let nextTrick = readline.keyInSelect(options, `You decide to look up and find a key hanging on a string. Congratulations! You have a key! What do?`)
    if (nextTrick == 0) {
        console.log(`${name}, you stuck your hand in the conspicuously dangerous portal of doom. The world is collectively smarter, now that you're dead.`) 
        break
    } else if (nextTrick == 1) {
        console.log(`You unlock the door and slowly open it. A blinding light briefly fills your vision. Once your vision clears, you find \n yourself in a cold dark space...`)
        break
    } else if (nextTrick == -1) {
        break
    }
}