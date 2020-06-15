const getTodo = () => {
    axios.get("https://api.vschool.io/davidsaperstein/todo")
    .then(res => showList(res.data))
    .catch(err => console.log(err))
}

const createH1 = (listItem, key) => {
    const element = document.createElement("h1")
    if (key === "price") {
    element.textContent = `$${listItem[key]}`
    } else {
        element.textContent = listItem[key]
    }
    return element
}

const showList = (listArray) => {
    clearList()
    if (listArray.length > 0) {
        listArray.map(todo => {
            const todoID = todo._id
            const container = document.createElement("div")
            container.setAttribute("class", "todo-card")
            document.getElementById('list').appendChild(container)
            const title = createH1(todo, "title")
            container.appendChild(title)
            if (todo.description) {
                const description = createH1(todo, "description")
                container.appendChild(description)
            }
            if (todo.price) {
                const price = createH1(todo, "price")
                container.appendChild(price)
            }
            if (todo.imgUrl) {
                const img = document.createElement("img")
                img.src = todo.imgUrl
                img.style.width = "250px"
                container.appendChild(img)
            }
            const newDelete = deleteButton(todoID)
            container.appendChild(newDelete)
            const newCheckbox = checkbox(todoID)
            container.appendChild(newCheckbox)
            if (todo.completed) {
                title.setAttribute("class", "strikethrough")
                newCheckbox.checked = true
            }


        })
    }
}

const post = (newToDo) => {
    axios.post('https://api.vschool.io/davidsaperstein/todo', newToDo)
    .then(res => getTodo())
    .catch(err => console.log(err))
}

const form = document.form
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const newToDo = {
        title: form.title.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
    }
    console.log(newToDo)
    post(newToDo)
})

const clearList = () => {
    const el = document.getElementById('list')
    while(el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

const checkbox = (id) => {
    const newCheckbox = document.createElement('input')
    newCheckbox.setAttribute('class', 'list-buttons')
    newCheckbox.type = 'checkbox'
    newCheckbox.title = 'Is This Complete?'
    document.body.appendChild(newCheckbox)
    newCheckbox.addEventListener('change', function(event) {
        event.preventDefault()
        if(this.checked) {
            axios.put(`https://api.vschool.io/davidsaperstein/todo/${id}`, {
                completed: true
            })
                .then(res => getTodo())
                .catch(err => console.log(err))
        } else {
            axios.put(`https://api.vschool.io/davidsaperstein/todo/${id}`, {
                completed: false
            })
                .then(res => getTodo())
                .catch(err => console.log(err))
        }
    })
    return newCheckbox
}

const deleteButton = (id) => {
    const newDelete = document.createElement('button')
    newDelete.setAttribute('id', 'delete')
    newDelete.innerText = 'Delete To-Do'
    newDelete.addEventListener('click', function() {
        axios.delete(`https://api.vschool.io/davidsaperstein/todo/${id}`)
            .then(res => getTodo())
            .catch(err => console.log(err))
    })
    return newDelete
}

getTodo()

