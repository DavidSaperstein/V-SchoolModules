// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// function fiveAndGreaterOnly(arr) {
//   // your code here
// }
// // test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// const numbers = [3, 6, 8, 2]
// const result = numbers.filter(function(number){
//     if (number >= 5) {
//         return true
//     }
// })
// const result2 = numbers.filter(number => number >=5)
// console.log(result)
// console.log(result2)


// 2) Given an array of numbers, return a new array that only includes the even numbers.
// function evensOnly(arr) {
//   // your code here
// }
// // test
// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
// const numbers = [3, 6, 8, 2]
// const result = numbers.filter(function(number){
//     if (number%2 === 0) {
//         return true
//     }
// })
// const result2 = numbers.filter(number => number%2 === 0)
// console.log(result)
// console.log(result2)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// function fiveCharactersOrFewerOnly(arr) {
//   // your code here
// }
// // test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// const words = ["dog", "wolf", "by", "family", "eaten", "camping"]
// const result = words.filter(function(word){
//     if (word.length <= 5) {
//         return true
//     }
// })
// const result2 = words.filter(word => word.length <= 5)
// console.log(result)
// console.log(result2)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// function peopleWhoBelongToTheIlluminati(arr){
//   // your code here
// }
// // test
// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));
// // =>
// //[ { name: 'Angelina Jolie', member: true },
// //  { name: 'Paris Hilton', member: true },
// //  { name: 'Bob Ziroll', member: true } ]

// const people = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// const result = people.filter(function(person) {
//     if (person.member === true) {
//         return true
//     }
// })

// const result2 = people.filter(person => person.member === true)
// console.log(result)
// console.log(result2)

// 5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
// function ofAge(arr){
//   // your code here
// }
// // test
// console.log(ofAge([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ])); 
// // => 
// //[ { name: 'Angelina Jolie', age: 80 },
// //  { name: 'Bob Ziroll', age: 100 } ]

const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const result = people.filter(function(person) {
    if (person.age >= 18) {
        return true
    }
})
const result2 = people.filter(person => person.age >= 18)
console.log(result)
console.log(result)