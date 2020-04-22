const form = document.stomps 

form.addEventListener("submit", function(e) {
    e.preventDefault()
    let goombaStomps = form.goombaStomps.value
    let bobombStomps = form.bobombStomps.value
    let cheepCheepStomps = form.cheepCheepStomps.value
    let finalPrice = document.getElementById("finalPrice")
    let goombaPrice = parseInt(goombaStomps*5)
    let bobombPrice = parseInt(bobombStomps*7)
    let cheepCheepPrice = parseInt(cheepCheepStomps*11)
    finalPrice.textContent = parseInt(goombaPrice)+parseInt(bobombPrice)+parseInt(cheepCheepPrice)
})
