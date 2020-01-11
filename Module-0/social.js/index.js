var dragonCast = {
    name: "Goku",
    age: 41,
    species: "Saiyan",
    moveset: ["Kamehameha", "Spirit Bomb", "Kaio-Ken"],
    quote: function (){
        console.log("No, see, I don't think like I'm saving the world. The fact is, it's cause I'm usually trying to challenge the strongest warriors I can find. That's how this tournament happened, too. But I can't bear the thought of innocent lives getting wiped out just cause I wanna fight the best. So, I'll do what I can for them.")
    },
    numberOfDeaths: 2,
    killedBy: [
        {
            name: "Piccolo",
            species: "Namekian",
            special: ["Regeneration", "Special Beam Cannon",],
            quote: function (){
                console.log("It's ironic, isn't it? After all my years of training to defeat your father, I go out like this trying to save you; his son.")
            },
            numberOfDeaths: 2,
            killedBy: [
                {
                    name: "Nappa",
                    species: "Saiyan",
                    moveset: ["Eye Lasers", "Finger Beam"],
                    quote: function (){
                        console.log("What's wrong? Oh wait, don't tell me. I think I know what you need. A nice trip to the afterlife. One way, of course.")
                    },
                    numberOfDeaths: 1,
                    killedBy: [
                        {
                            name: "Vegeta",
                            species: "Saiyan",
                            moveset: ["Galick Gun", "Big Bang Attack", "Final Flash"],
                            quote: function() {
                                console.log("Fine, Kakarot, you are the mightiest Saiyan, I've admitted that much. At least for now. But don't you dare think that this is over. I won't let you keep me in second place forever, feeding on the scraps of your glory. I will surpass you, and even then I'll keep pushing, I'll surpass every single warrior in the Universe. I won't stop until I'm the ultimate number one.")
                            },
                            numberOfDeaths: 2,
                            significantOther: "Bulma",
                            children: ["Trunks", "Bra"]
                        }
                    ],
                    significantOther: "none",
                    children: "none"
                }
            ],
            significantOther: "none",
            children: "none"
        }
    ],
    significantOther: "Chi-Chi",
    children: ["Gohan", "Goten"]
}

dragonCast.introducedInChapter = 1

console.log(dragonCast.introducedInChapter)

dragonCast.killedBy.introducedInChapter = 161

console.log(dragonCast.killedBy.introducedInChapter)

dragonCast.moveset.push("Instant Transmission");

console.log(dragonCast.moveset)

dragonCast.killedBy.special.push("Masenko");

console.log(dragonCast.killedBy[moveset])

