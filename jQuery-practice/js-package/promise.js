function print(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $.get("../../txt/hello.txt", (data, status) => {
                document.write("data:" + data + "<br>status:" + status + "<br>")
                resolve();
            });
        }, delay);
    });
}



async function asyncPrint() {
    try {
        await print(1000);
        await print(1000);
        await print(1000);
    } catch (error) {
        console.log(error);
    }
}

asyncPrint();