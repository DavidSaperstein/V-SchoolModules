// for (i = 0; i < 9; i++) {
//     console.log(i+1)
// }

// for (i = 9; i > 0; i--) {
//     console.log(i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (i = 0; i < fruit.length; i++) {
//     console.log (fruit[i])
// }

// var numArr = []

// for (i = 0; i < 9; i++) {
//     numArr.push(i+1);
// }
// console.log(numArr)

// for (i = 0; i <= 100; i++) {
//     if (i === 0) {

//     } else if (i%2 === 0) {
//         console.log(i)
//     }
       
//     }

// var fruit1 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var fruit2 = []

// for (i = 0 ; i < fruit1.length; i++) {
//     if (i === 0 || i%2 === 0) {
//         fruit2.push(fruit1[i]);
//     } 
// }

// console.log(fruit2)

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

//   for (i = 0; i < peopleArray.length; i++) {
//       console.log(peopleArray[i].name)
//   }

// var names = []
// var occupations = []
// for (i = 0; i < peopleArray.length; i++){
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// }
// console.log(names)
// console.log(occupations)

// var otherNames = []
// var otherOccupations = []
// let count = 1
// let occuCount = 1

// function otherOcc() {
//   if (occupations[i] == "Singer" && otherOccupations[0] != "Singer") {
//     otherOccupations.push(occupations[i]);
// } else if (otherOccupations[0] == "Singer" && occuCount%2 === 0) {
//     occuCount++
//     otherOccupations.push(occupations[i]);
// } else {
//     occuCount++
// }

// }

// function otherNam() {
//   if (names[i] == "Harrison Ford" && otherNames[0] != "Harrison Ford") {
//   otherNames.push(names[i]);
// } else if (otherNames[0] == "Harrison Ford" && count%2 === 0) {
//   count++
//   otherNames.push(names[i]);
// } else {
// count++
// }
// }

// for (i = 0; i < names.length; i++) {
//   otherOcc();
//   otherNam();
    
// }

// console.log(otherNames)
// console.log(otherOccupations)

//gold medal

//1)

// for (i=0; i < 3; i++) {
//   var Arr = []
//   Arr.push(0);
//   Arr.push(0);
//   Arr.push(0);
//   console.log(Arr)
// }

// for (i = 0; i < 3; i++) {
//   var Arr = []
//   for (i = 0; i < 3; i++) {
//     Arr.push(0);
//   }
//   console.log(Arr)
// }
var Arr = []

// for (i = 0; i < 3; i++) {
//     Arr.push([]);
//     for (a = 0; a < 3; a++) {
//       Arr[i].push(0);
//     }
// }
// console.log(Arr)


//2)

// for (i = 0; i < 3; i++){
//   Arr.push([]);
//   for (a = 0; a < 3; a++) {
//     Arr[i].push(i);
//   }
// }
// console.log(Arr)

//3)

for (i = 0; i < 3; i++){
  Arr.push([]);
  for (a = 0; a < 3; a++) {
    Arr[i].push(a);
  }
}

for (i = 0; i < 3; i++){
  for (a = 0; a < 3; a++) {
    Arr[i][a] = "x"
  }
}
console.log(Arr)
