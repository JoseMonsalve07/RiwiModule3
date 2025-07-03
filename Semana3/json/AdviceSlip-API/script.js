document.getElementById("btn").addEventListener("click", () => {

    const url = "https://api.adviceslip.com/advice"

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showAdvice(data);
    })
    .catch(error => {
        document.getElementById("resultado").innerText = "Error: " + error;
    });
});

function showAdvice(data) {
    const slip = data.slip;
    const html = `${slip.advice}`;
    document.getElementById("resultado").innerHTML = html;
}   