var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    const peoplphabet = []
    for (let i = 0; i < people.length; i++) {
        peoplphabet.push(people[i].concat(":"))
        for (let j = 0; j < alphabet.length; j++) {
            peoplphabet.push(alphabet[j].toUpperCase())
        }
    }
    return peoplphabet
}

console.log(forception(people, alphabet))
