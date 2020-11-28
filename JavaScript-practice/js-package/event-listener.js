function changeSize() {
    document.getElementById("title").style.fontSize = "50px";
}

function changeColor() {
    document.getElementById("title").style.color = "red";
}

var btn = document.getElementById("btn");
btn.addEventListener("click", changeSize);
btn.addEventListener("click", changeColor);