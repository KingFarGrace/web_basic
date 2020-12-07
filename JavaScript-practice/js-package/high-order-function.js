var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.getElementById("arr").innerHTML = arr;
document.getElementById("map").innerHTML = arr.map((x) => {return x * x;});
document.getElementById("reduce").innerHTML = arr.reduce((x, y) => {return x * 10 + y;});
document.getElementById("filter").innerHTML = arr.filter((x) => {return x % 2 === 0;});
document.getElementById("sort").innerHTML = arr.sort((x, y) => {
    if(x < y) {
        return 1;
    }
    if(x > y) {
        return -1;
    }
    return 0;
});