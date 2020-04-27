const num1 = "i'm not a number"
const num2 = 2

function sum(x, y){
    //check data types first and throw error
    return x + y;
}

try {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'input must be a number'
    }
}

catch(err) {
    console.log(err)
}

finally {
    console.log(`i don't know what i'm supposed to put here`)
}

const user = {
    username: 'greedy',
    password: 'nonsense'
}

function login (username, password) {
    if (username != 'greedy' || password != 'nonsense') {
    throw "username or password doesn't match"
    }

}

try {
    login('greedy','nope')
}

catch(err) {
    console.log(err)
}

finally {
    console.log('the username or password doesnt match')
}
