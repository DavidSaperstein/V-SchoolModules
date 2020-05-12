const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot}
    })
}

console.log(mapVegetables(carrots))

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}

console.log(filterForFriendly(people))

const doMathSum = (a, b) => a + b

const produceProduct = (a,b) => a*b

const printString = (firstName = "Jane", lastName = "Doe", age = "100") => console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)

printString("David", "Saperstein", "32")

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}

const arrowFilterForDogs = (arr) => arr.filter(animal => animal.type === "dog")
console.log(arrowFilterForDogs(animals))

const templateLiterals = (location, name) => console.log(`Hi ${name}! \nWelcome to ${location}. \nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)

templateLiterals("Florida", "David")