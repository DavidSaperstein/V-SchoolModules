const items = document.getElementsByTagName("li")
const list = document.getElementById("list")
const button = document.getElementById("button")
const input = document.getElementById("input")
const editInput = document.createElement("input")
const index = []


button.addEventListener("click", function (e) {
    e.preventDefault()
    const newest = appendListItemChildren(e)
    list.appendChild(newest)
    index.push(newest)
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

function createNewEditButton(e){
    e.preventDefault()
    const editButton = document.createElement("button")
    editButton.innerText = "edit"
    return editButton
}

function createNewXButton(e){
    e.preventDefault()
    const xButton = document.createElement("button")
    xButton.innerText = "X"
    return xButton
}

function appendListItemChildren (e){
    e.preventDefault()
    const listItem = createListItem(e)
    listItem.appendChild(createNewItem(e))
    listItem.appendChild(createNewEditButton(e))
    listItem.appendChild(createNewXButton(e))
    xButton.addEventListener("click", () => removeListItem(newest))
    return listItem
}

function removeListItem (X){
    X.remove()
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


