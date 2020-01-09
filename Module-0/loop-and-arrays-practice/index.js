// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// let compCount = 0
// for (i = 0; i < officeItems.length; i++) {
//     if (officeItems[i] === "computer") {
//         compCount++
//     } 
// }
// console.log(compCount)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

var people = peopleWhoWantToSeeMadMaxFuryRoad
// for (i = 0; i < people.length; i++) {
//     people[i].age >= 18 ? console.log(people[i].name + " is old enough to see Mad Max") : console.log(people[i].name + " is not old enough to see Mad Max")
// }

// for (i=0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         people[i].gender === "male" ? console.log(people[i].name + " is old enough to see Mad Max, let him in.") : console.log(people[i].name + " is old enough to see mad Max, let her in.")
//     } else {
//         people[i].gender == "male" ? console.log(people[i].name + " isn't old enough to see Mad Max, don't let him in.") : console.log (people[i].name + " isn't old enough to see mad Max, don't let her in.")

//     }
// }

var toggle = [9, 3, 4, 2]
let totalToggle = 0
for (i = 0; i < toggle.length; i++) {
    totalToggle += toggle[i]
}

totalToggle%2 == 0 ? console.log("The light is off") : console.log("The light is on")