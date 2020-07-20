const items = document.getElementsByTagName("li")
const list = document.getElementById("list")
const button = document.getElementById("button")
const input = document.getElementById("input")

button.addEventListener("click", function (e) {
    e.preventDefault()
    const newest = appendListItemChildren(e)
    list.appendChild(newest)
})

function createListItem(e){
    e.preventDefault()
    const listItem = document.createElement("li")
    return listItem
}

function createNewItem(e){
    e.preventDefault()
    const newItem = document.createElement("div")
    newItem.innerText = input.value
    return newItem
}

function createNewEditButton(e, newItemText){
    e.preventDefault()
    const editButton = document.createElement("button")
    const newInput = document.createElement("input")
    editButton.innerText = "edit"
    editButton.addEventListener("click", function (e){
      e.preventDefault()
      if (editButton.innerText == "edit") {
        editButton.innerText = "save"
        newInput.value = newItemText
        editButton.parentElement.insertBefore(newInput, editButton)
      } else if (editButton.innerText == "save") {
        editButton.innerText = "edit"
        editButton.parentElement.firstElementChild.innerText = newInput.value
        newInput.remove()
      } else {
        
      }
      })
      return editButton
    }


function createNewXButton(e){
    e.preventDefault()
    const xButton = document.createElement("button")
    xButton.innerText = "X"
    xButton.addEventListener("click", () => xButton.parentElement.remove())
    return xButton
}

function appendListItemChildren (e){
    e.preventDefault()
    const listItem = createListItem(e)
    const newItem = createNewItem(e)
    listItem.appendChild(newItem)
    listItem.appendChild(createNewEditButton(e, newItem.textContent))
    listItem.appendChild(createNewXButton(e))
    return listItem
}



// function removeListItem (e) {
//     e.preventDefault()
//     listItem.remove()
//     }
    
// function createXListener(e) {
//     e.preventDefault()
//     xButton.addEventListener("click", () => removeListItem(e))
// }


    // const edit = () => {
    //     e.preventDefault()
    //     editButton.innerText = "save"
    //     this.removeEventListener
    //     editInput.placeholder = newItem.innerText
    //     listItem.firstChild.appendChild(editInput)
    //     this.addEventListener("click", save(e))
    // }

    // const save = () => {
    //     e.preventDefault()
    //     editButton.innerText = "edit"
    //     this.removeEventListener
    //     newItem.innerText = editInput.value
    //     this.addEventListener("click", edit(e))
    //     editInput.remove(editInput)
    //     return editInput

    // }






