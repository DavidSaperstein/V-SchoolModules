const readline = require('readline-sync')
let input = readline.question('What phrase would you like to encrypt? ').toLowerCase()
let shift
let attempts = 0

//create alphabet string to shift between
const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890.,!?"
const newPhrase = []

//for loop to perform shift for length of phrase
let isInputReal = false
while(!isInputReal) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (input[i] === alphabet[j]) {
                isInputReal = true
            }
        }
    }
    if (!isInputReal) {
        console.log(`You must include at least one of the following characters in your phrase: ${alphabet}.`)
        input = readline.question('What phrase would you like to encrypt? ').toLowerCase()
    }
}

while (isNaN(shift)){
    if (attempts > 0) {
        console.log("You broke it.")
    }
    attempts += 1
    shift = parseInt(readline.question('How many letters would you like to shift? '));
}  
for (let i = 0; i < input.length; i++) {
    let index = alphabet.indexOf(input[i])
    let newIndex = Math.round(index + shift)
    
    if (index === -1) {
        newPhrase.push(input[i])
    } else if (newIndex >= alphabet.length) {
        newPhrase.push(alphabet[newIndex%alphabet.length])
    } else if (newIndex < 0) {
        if (newIndex < (alphabet.length*-1)) {
            newPhrase.push(alphabet[alphabet.length + newIndex%alphabet.length])
            console.log(newIndex%alphabet.length)
        } else {
            newPhrase.push(alphabet[alphabet.length+newIndex])
        }
    } else {
        newPhrase.push(alphabet[newIndex])
    }
}


console.log(newPhrase.join(""))
