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