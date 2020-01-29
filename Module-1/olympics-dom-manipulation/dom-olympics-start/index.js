const h1 = document.createElement("h1")
const h3 = document.createElement("h3")
const header = document.getElementById("header")
header.setAttribute("class", "header")
h1.innerText = "JavaScript Made This!!"
h3.innerHTML = "<h3><span class='name'>David</span> wrote the JavaScript<h3>"
header.appendChild(h1)
header.appendChild(h3)

const messages = document.getElementsByClassName("message")
const firstMessage = messages[0].innerText.split(" ")
const secondMessage = messages[1].innerText.split(" ")
const thirdMessage = messages[2].innerText.split(" ")
const fourthMessage = messages[3].innerText.split(" ")

for (let i = 0; i < firstMessage.length; i++) {
    if (firstMessage[i] == "serious") {
        firstMessage[i] = "exciting"
        messages[0].innerText = firstMessage.join(" ")
    }
}

for (let i = 0; i < secondMessage.length; i++) {
    if (secondMessage[i] == "don't") {
        secondMessage[i] = "would"
    } else if (secondMessage[i] == "want") {
        secondMessage[i] = "love"
    }
    messages[1].innerText = secondMessage.join(" ")
}

messages[2].innerText = "We're going to visit later this year"
messages[3].innerText = "Wonderful!"

document.getElementById("clear-button").addEventListener('click', function(){
    for (let i = 0; i < messages.length; i++) {
        messages[i].innerText = ""
        messages[i].style.backgroundColor = "white"
    }
})