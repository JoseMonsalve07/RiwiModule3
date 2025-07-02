const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = false;
        if (ok){
            resolve("Operación exitosa");
        } else {
            reject("Se produjo un error");
        }
    }, 100);
});

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });