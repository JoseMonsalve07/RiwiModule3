document.getElementById("btn").addEventListener("click", () => {

    const url = "https://catfact.ninja/fact";


    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        mostrarFacto(data);
    })
    .catch(error => {
        document.getElementById("resultado").innerText = "Error: " + error;
    });
});

function mostrarFacto(data){
    const fact = data.fact;
    const html = `Curious fact: ${fact}`;
    document.getElementById("resultado").innerHTML = html;
}