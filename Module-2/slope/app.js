//Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// function collectAnimals(...animals) {  
//     return animals
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")) 
// ["dog", "cat", "mouse", "jackolope", "platypus"]




//Write a function that returns a food object with the array names as properties using Object Literals:

// function combineFruit(fruit, sweets, vegetables){
//     return {fruit, sweets, vegetables}
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"]))
// //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrit"]
//      }


// Use destructuring to use the property names as variables. Destructure the object in the parameter:

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   }
  
//   function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }

// console.log(parseSentence(vacation))


// Use destructuring to make this code ES6:

// const toys = [`legos`, `ball`]

// function returnFirst(items){
//     const [firstItem] = items /*change this line to be es6*/
//     return firstItem
// }

// // const returnFirst = (items) => firstItem = items[0]
// console.log(returnFirst(toys))


// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites([firstFav, secondFav, thirdFav]){
//     /*your code here*/
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
// }

// const returnFavorites2 = ([firstFav, secondFav, thirdFav]) => `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`

// console.log(returnFavorites(favoriteActivities))
// console.log(returnFavorites2(favoriteActivities))



// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// function combineAnimals(...animalArrays) {  
//     let combinedArray = [] 
//     animalArrays.forEach((animalArray) => combinedArray.push(...animalArray))
//     return combinedArray
//     // const mappedArrays = animalArrays.map((animalArray) => {return ...animalArray})
//     // // return animalArrays.map((animalArrays) => ...animalArrays)
// }

// const realAnimals = ["dog", "cat", "mouse"]
// const magicalAnimals = ["jackolope"]
// const mysteriousAnimals = ["platypus"]

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)) 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Try to make the following function more ES6xy:

// function product(a, b, c, d, e) {  
//   var numbers = [a,b,c,d,e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

// const product = (...numbers) => numbers.reduce((acc,number) => acc*number, 1)
// console.log(product(1, 2, 3, 4, 5))

// Make the following function more ES6xy. Use at least both the rest and spread operators:

// function unshift(array, a, b, c, d, e) {  
//   return [a, b, c, d, e].concat(array);
// }

// const unshift2 = (array, ...things) => [...things, ...array]
// const newArray = [`dog`, 1]
// console.log(unshift2(newArray, 8, `a`, {confused: `davd`}))

// Write some destructuring code to help this function out. Use object literals to simplify it:

// function populatePeople(names) {
//     return names.map(function(name) {
//         name = name.split(" ")
//         const {firstname:firstName, lastName:lastName} = name
//     }
// }

const populatePeople = (names) => {
    return names.map((name) => {
        name = name.split(" ")
        const [firstName, lastName] = name
        return {firstName, lastName}
    })
}


console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
