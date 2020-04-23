// 1) Make an array of numbers that are doubles of the first array

// function doubleNumbers(arr){
//     // your code here
//   }

//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

const numbers = [1, 2, 3, 4, 5]

// const result = numbers.map(function(number) {
//     return number * 2
// })

// const result = numbers.map(number => number*2)

// console.log(result)

// 2) Take an array of numbers and make them strings
// function stringItUp(arr){
//   // your code here
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// const result = numbers.map(function(number) {
//     return number.toString()
// })

// const result = numbers.map(number => number.toString())

// console.log(result)

// 3) Capitalize each of an array of names
// function capitalizeNames(arr){
//   // your code here
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// const result = names.map(function(name) {
//     let lowercaseName = name.toLowerCase()
//     lowercaseSplit = lowercaseName.split('')
//     lowercaseSplit[0] = lowercaseSplit[0].toUpperCase()
//     return lowercaseSplit.join('')
// })

// console.log(result)

// 4) Make an array of strings of the names
// function namesOnly(arr){
//   // your code here
// }

// console.log(namesOnly([
    // {
    //     name: "Angelina Jolie",
    //     age: 80
    // },
    // {
    //     name: "Eric Jones",
    //     age: 2
    // },
    // {
    //     name: "Paris Hilton",
    //     age: 5
    // },
    // {
    //     name: "Kayne West",
    //     age: 16
    // },
    // {
    //     name: "Bob Ziroll",
    //     age: 100
    // }
// ])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// const people =[
// {
//     name: "Angelina Jolie",
//     age: 80
// },
// {
//     name: "Eric Jones",
//     age: 2
// },
// {
//     name: "Paris Hilton",
//     age: 5
// },
// {
//     name: "Kayne West",
//     age: 16
// },
// {
//     name: "Bob Ziroll",
//     age: 100
// }]

// const result = people.map(function(person){
//     return person.name
// })

// console.log(result)

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//   // your code here
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// const people =[
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }]

// const result = people.map(function(person) {
//     if (person.age > 17) {
//         return `${person.name} can go to The Matrix`
//     } else {
//         return `${person.name} is under age!!`
//     }
//     })

// console.log(result)

// 6) Make an array of the names in h1s, and the ages in h2s
// function readyToPutInTheDOM(arr){
//   // your code here
// }
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// // "<h1>Eric Jones</h1><h2>2</h2>", 
// // "<h1>Paris Hilton</h1><h2>5</h2>", 
// // "<h1>Kayne West</h1><h2>16</h2>", 
// // "<h1>Bob Ziroll</h1><h2>100</h2>"]

// const people =[
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }]

// const result = people.map(function(person){
//     return `<h1>${person.name}</h1><h2>${person.age}</h2>`
// })

// console.log(result)