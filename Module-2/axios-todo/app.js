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
    console.log(listArray)
    if (listArray.length > 0) {
        listArray.map(todo => {
            console.log(todo)
            const container = document.createElement("div")
            container.setAttribute("class", "todo-card")
            document.body.appendChild(container)
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
                console.log("this is working")
                const img = document.createElement("img")
                img.src = todo.imgUrl
                console.log(todo.imgUrl)
                img.style.width = "250px"
                container.appendChild(img)
            }
        })
    }
}

getTodo()