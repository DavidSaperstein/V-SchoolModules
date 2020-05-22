const pokeXHR = new XMLHttpRequest()
pokeXHR.onreadystatechange = function () {
    if (pokeXHR.readyState === 4 && pokeXHR.status === 200) {
        const pokeJSON = pokeXHR.responseText
        const pokeData = JSON.parse(pokeJSON)
        whosThatPokemon(pokeData)
    }
}

pokeXHR.open("GET", "https://api.vschool.io/pokemon", true)
pokeXHR.send()

const whosThatPokemon = (pokemon) => {
    // console.log(pokemon.objects[0].pokemon)
    const pokenames = pokemon.objects[0].pokemon.map(poke => poke.name)
    pokenames.forEach(poke => {
        const pokeh1 = document.createElement("h1")
        pokeh1.textContent = poke
        document.body.appendChild(pokeh1)
    })
}