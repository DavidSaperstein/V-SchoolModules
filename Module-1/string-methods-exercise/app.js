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