const getTodo = () => {
    axios.get("https://api.vschool.io/davidsaperstein/todo")
    .then(res => showList(res.data))
    .catch(err => console.log(err))
}

const createH1 = (listItem, key) => {
    const element = document.createElement("h1")
    element.textContent = listItem[key]
    return element
}

const showList = (listArray) => {
    clearList()
    if (listArray.length > 0) {
        listArray.map(todo => {
            const container = document.createElement("div")
            container.setAttribute("class", "todo-card")
            document.getElementById('list').appendChild(container)
            const title = createH1(todo, "title")
            if (todo.completed) {
                title.setAttribute("class", "strikethrough")
            }
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

getTodo()