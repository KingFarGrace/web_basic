function onClick() {
    alert("Success!");
}

function changeTxt(id) {
    id.innerHTML = "Changed!";
}

function onChange() {
    var ele = document.getElementById("ipt");
    ele.value = ele.value.toUpperCase();
}

function moveOver(obj) {
    obj.style.backgroundColor = "red";
}

function moveOut(obj) {
    obj.style.backgroundColor = "blue";
}

function mouseDown(obj) {
    obj.src = "../../img/Meridier.jpg";
}

function mouseUp(obj) {
    obj.src = "../../img/candy.png";
}

document.getElementsByTagName("body")[0].onload = function(){
    if(navigator.cookieEnabled == true) {
        alert("cookie available!");
    } else {
        alert("cookie disavailable!");
    }
}

document.getElementById("btn").onclick = function(){
    onClick();
}