let count = 0;
function clickButton () {
    const comments = document.getElementsByClassName("blurb");
    const identifiers = document.getElementsByClassName("blurb-box")
    const button = document.getElementById("button")
    if (count < comments.length) {
        comments[count].style.display = "inline";
        identifiers[count].style.display = "inline";
        button.innerHTML = "Next";
        count++
    } else {
        for (let i=0; i < comments.length; i++) {
            comments[i].style.display = "none";
            identifiers[i].style.display = "none";
            button.innerHTML = "Start Lesson Here";
        }
        count = 0
    }

    console.log(count)
}