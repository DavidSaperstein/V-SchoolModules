const people = [
    {
        name: "Ameron",
        age: 33,
        gender: "male"

    },
    {
        name: "David",
        age: 31,
        gender: "male"
    },
    {
        name: "Brandon",
        age: 25,
        gender: "male"
    },
    {
        name: "Diana",
        age: 25,
        gender: "female"
    },
    
]

// function printName () {
//     // people.forEach(function(person) {
        
//     //     console.log("This is" + person.name +  "," person.age + person.gender)
//     // })

//     for ( var i=0; i < people.length; i++) {
//         if (people[i].gender === "male") {

//             console.log ("This is " + people[i].name + ", he is " + people[i].age + " years old.")
//         } else {
//             console.log ("This is " +  people[i].name + ", she is " + people[i].age + " years old.")
//         }
        
//     }
// }

function printName(people = []) {
    people.forEach(function(person) 
{
        console.log('this is ' + person.name + ', ' + (person.gender === 'male' ? 'he' : 'she') + 'is' + person.age + 'years old.')
    })
}

printName(people)

// printName ()
// This is Ameron, he is 33 years old.



const yarnData = [
    {
        id: 1,
        name: "red",
        rgb: 123
    },
    {
        id: 2,
        name: "blue",
        rgb: 234
    },
    {
        id: 3,
        name: "yellow",
        rgb: 678
    },
    {
        id: 4,
        name: "yellow",
        rgb: 987
    },
    {
        id: 5,
        name: "yellow",
        rgb: 324
    }
]

const newYarn = yarn.map( yarn => {
    if (!newYarn.find(yarn.name)) {
        yarn.rgb = [yarn.rgb]
        newYarn.push(yarn)
    } else (
        let id = yarn.id

    )
})