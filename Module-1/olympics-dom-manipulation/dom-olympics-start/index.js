const h1 = document.createElement("h1")
const h3 = document.createElement("h3")
const header = document.getElementById("header")
header.setAttribute("class", "header")
h1.innerText = "JavaScript Made This!!"
h3.innerHTML = "<h3><span class='name'>David</span> wrote the JavaScript<h3>"
header.appendChild(h1)
header.appendChild(h3)

const messages = document.getElementsByClassName("message")
const one = messages[0].split(" ")
const two = messages[1].split(" ")
const three = messages[2].split(" ")
const four = messages[3].split(" ")

for (i = 0; i < one.length; i++) {
    if (one[i] = "serious") {
        one[i] = "exciting"
    }
}

console.log(one)