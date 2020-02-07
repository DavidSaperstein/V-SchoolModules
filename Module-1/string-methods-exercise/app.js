// function capitalizeToLowercase (string) {
//     const upper = string.toUpperCase()
//     const lower = string.toLowerCase()
//     return upper + " " + lower
// }

// console.log(capitalizeToLowercase("david"))

function numberHalf(number) {
    // numberArr = number.split("")
    halfArr = number.slice(0, Math.floor(number.length/2))
    return halfArr
}

console.log(numberHalf("567"))

function capitalLowerCase(string) {
    let firstHalf = string.slice(0, Math.floor(string.length/2)).toUpperCase()
    let secondHalf = string.slice(Math.floor(string.length/2), string.length).toLowerCase()
    return firstHalf+secondHalf
}

console.log(capitalLowerCase("The Mayor of Value Town"))


function capitalSpace(string) {
    let stringArr = string.split("")
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i-1] === " " || i === 0) {
            stringArr[i] = stringArr[i].toUpperCase()
        }
    }
    return stringArr.join("")
}

console.log(capitalSpace("the mayor of value town"))