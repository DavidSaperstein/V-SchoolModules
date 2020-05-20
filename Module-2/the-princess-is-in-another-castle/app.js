const readline = require('readline-sync')

class Player {
    constructor (name = 'Player1', totalCoins = 0, status = 'Small', hasStar = false, gameActive = true) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    setName() {
        // const playerName = require('readline-sync'),
        const marioOrLuigi = ['Mario', 'Luigi']
        const choice = readline.keyInSelect(marioOrLuigi, 'Are you Mario or Luigi?')
        this.name = marioOrLuigi[choice]
    }

    gotHit() {
        if (this.hasStar) {
            console.log('You are too super to be hurt.')
            this.status = 'Powered Up'
            this.hasStar = false
        } else if (this.status === 'Powered Up') {
            this.status = 'Big'
            console.log('Is this what pain feels like?')
        } else if (this.status === 'Big') {
            this.status = 'Small'
            console.log('That hurt.')
        } else {
            this.status = 'Dead'
            this.gameActive = false
            console.log(" Too much damage. You're dead.")
        }
    }

    gotPowerup() {
        if (this.status === 'Small') {
            this.status = 'Big'
            console.log(`You are the big.`)
        } else if (this.status === 'Big') {
            this.status = 'Powered Up'
            console.log(`Power Up!`)
        } else {
            this.hasStar = true
            console.log(`You're super.`)
        }
    }

    addCoin() {
        this.totalCoins++
        console.log(`You got a coin.`)
    }

    print() {
        if(this.status != 'Dead') {
            console.log(` Name: ${this.name} \n Status: ${this.status} \n Coins: ${this.totalCoins} \n Am Super: ${this.hasStar} \n`)
        } else {
            console.log(` Your score was ${this.totalCoins}. \n Game Over, Dude`)
        }
    }
}

const randomNumber = () => Math.floor(Math.random() * 3)
const whatHappened = (player) => {
    let eventNumber = randomNumber(0,2)
    if (eventNumber === 0) {
        player.gotHit()
        player.print()
    } else if (eventNumber === 1) {
        player.gotPowerup()
        player.print()
    } else {
        player.addCoin()
        player.print()
    }
}


const newPlayer = new Player()
newPlayer.setName()
let game
const run = () => {
    game = setInterval(gameOver, 2000)
}

const gameOver = () => {
    whatHappened(newPlayer)
    if (newPlayer.status === 'Dead') {    
        clearInterval(game)
    } 
}

run()