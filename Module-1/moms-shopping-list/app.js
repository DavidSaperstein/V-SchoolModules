const button = document.getElementById("button")
const input = document.getElementById("input")
const list = document.getElementById("list")

//function to add li
button.addEventListener("click", function (e) {
    e.preventDefault()
    const newItem = createNewItem(e)
    list.appendChild(newItem)
})

//function to create li

function createNewItem(e) {
    const newItem = document.createElement("li")
    const itemName = document.createElement("span")
    itemName.innerText = input.value

    //function to create X button element
    const xButton = document.createElement("button")    
    xButton.innerText = "X"
    xButton.title = "Delete Item"
    xButton.addEventListener("click", function(e) {
        e.preventDefault()
        e.target.parentElement.remove(newItem)
    })

    newItem.appendChild(xButton)
    newItem.appendChild(itemName)
    return newItem
}
//function to click button element and delete line