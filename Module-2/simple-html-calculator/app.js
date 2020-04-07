const add = document["add-calculator"]
const subtract = document["subtract-calculator"]
const multiply = document["multiply-calculator"]

add.addEventListener("submit", function(event) {
    event.preventDefault()
    const sum = document.getElementById("sum")
    const firstNum = parseInt(add["first-add"].value)
    const secondNum = parseInt(add["second-add"].value)
    const answer = firstNum+secondNum
    sum.textContent = `Sum: ${answer}`  
})

subtract.addEventListener("submit", function(event) {
    event.preventDefault()
    const difference = document.getElementById("difference")
    const firstNum = parseInt(subtract["first-subtract"].value)
    const secondNum = parseInt(subtract["second-subtract"].value)
    const answer = firstNum-secondNum
    difference.textContent = `Difference: ${answer}`
})

multiply.addEventListener("submit", function(event) {
    event.preventDefault()
    const product = document.getElementById("product")
    const firstNum = multiply["first-multiply"].value
    const secondNum = multiply["second-multiply"].value
    const answer = firstNum*secondNum
    product.textContent = `Product: ${answer}`
})