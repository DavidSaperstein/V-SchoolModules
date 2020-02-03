const button = document.getElementById("button")
const input = document.getElementById("input")
const list = document.getElementById("list")

//function to add li
button.addEventListener("click", function (e) {
    e.preventDefault()
    const newItem = createNewItem(e)
    list.appendChild(newItem)
})

//for loop to turn unordered list into an array
//function to create li
function createNewItem(e) {
    const newItem = document.createElement("li")
    const itemName = document.createElement("div")
    itemName.innerText = input.value

    //function to create X button element
    const xButton = document.createElement("button")    
    xButton.innerText = "X"
    xButton.title = "Delete Item"
    xButton.addEventListener("click", function(e) {
        e.preventDefault()
        e.target.parentElement.remove(newItem)
    })


    //function to create edit button
    const editButton = document.createElement("button")
    editButton.innerText = "edit"
    editButton.addEventListener("click", edit(e))


    newItem.appendChild(itemName)
    newItem.appendChild(xButton)
    return newItem
}

//function that edits the list items

function edit(e) {
    e.preventDefault()
    const editBox = document.createElement("input")
    const saveButton = document.createElement("button")
    editBox.value = e.currentTarget.parentElement.firstElementChild.innerText
    saveButton.innerText = "save"
    // saveButton.addEventListener("click", save(e))
    e.currentTarget.parentElement.firstElementChild.appendChild(editBox)
    e.currentTarget.parentElement.firstElementChild.appendChild(saveButton)
    // e.target.remove(target)

}
