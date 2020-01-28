const animals = ["dog", "cat", "mouse"]

const list = document.createElement("ul")

const body = document.getElementsByTagName("body")[0]
body.appendChild(list)
for (let i = 0; i < animals.length; i++) {
    const li = document.createElement("li")
    li.textContent = animals[i]
    list.appendChild(li)
}
