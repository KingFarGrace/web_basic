setInterval(() => {timer()}, 1000);
var timer = () => {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById("timer").innerHTML = time;
}