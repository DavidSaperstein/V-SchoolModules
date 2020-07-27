const challenge = [3,4,4,3,6,3]

/*// const removeDupes = (arr) => {
//     const solution = []
//     for(i = 0; i < arr.length; i++) {
//         arr.filter(arr[i]).length > 1 ? arr.splice(i, 1) : solution.push(i)
//     }
//     return solution
// }*/

// console.log(removeDupes(challenge))
function help(num) {
    if (num === num) {
        return num
    }
}
const yeah = challenge.filter(help(3))
console.log(yeah)