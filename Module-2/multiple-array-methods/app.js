const people = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// Returns a list of everyone older than 18, which is
// sorted alphabetically by last name, and where
// each name and age is embedded in a string that looks like an HTML <li> element.

const results = people.sort((a,b) => {
        if (a.lastName < b.lastName) {
            return -1;
        } else if (a.lastName > b.lastName) {
            return 1;
        } else {
            return 0
        }
    }).filter(person => person.age > 18).reduce(function (final, person) {
    final.push(`<li>${person.firstName} ${person.lastName} is ${person.age}<li>`)
    return final
}, [])

console.log(results)


