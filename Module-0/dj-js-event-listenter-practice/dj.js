 const box = document.getElementById("box")
 const page = document

 box.addEventListener("mouseover", function turnBlue() {
     box.style.backgroundColor = "blue";
 });
 box.addEventListener("mousedown", function turnRed() {
     box.style.backgroundColor = "red";
 });
 box.addEventListener("mouseup", function turnYellow() {
    box.style.backgroundColor = "yellow";
});
box.addEventListener("dblclick", function turnGreen() {
    box.style.backgroundColor = "green";
});
page.addEventListener("wheel", function turnOrange() {
    box.style.backgroundColor = "orangered";
});

